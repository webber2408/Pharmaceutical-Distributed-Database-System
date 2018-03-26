var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
const mongoose = require('mongoose');
//const config = require('./config/database');
//const Medicine = require('./models/medicine');
// var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27019/pharma_database");
// var db = mongoose.connection;
const MedicineSchema = mongoose.Schema(
{
    Name:String,
    Company:String,
    Salt0:String,
    Salt1:String,
    Salt2:String,
    Salt3:String,
    Combinations:String,
    Volume:String,
    Presentation:String,
    Price:String,
  },
  {
  collection: 'medi'
}
);
var Model = mongoose.model('Medicines', MedicineSchema);
mongoose.connect('mongodb://localhost:27021/test');
var count=0;
var myRows = [];

visit_page();


function visit_page(){
  var pageToVisit = "http://www.drugsupdate.com/brand/listing/";
  for(var i=101;i<=200;i++){
    pageToVisitNow= pageToVisit+i.toString();
    console.log("Visiting page " + pageToVisitNow);
    request(pageToVisitNow, function(error, response, body) {
       if(error) {
         console.log("Error: " + error);
       }
       // Check status code (200 is HTTP OK)
       console.log("Status code: " + response.statusCode);
       if(response.statusCode === 200) {
         // Parse the document body
         var $ = cheerio.load(body);
         //console.log("Page title:  " + $('title').text());
         crawl_table($);
         //convert_json();
       }
    });
  }
}



function crawl_table($){


  var box= $('.box_brhs');
  var tables_tr= box.children('div').children('table').children('tr');
  tables_tr.each(function(){
    var each_tr= $(this);
    var data= each_tr.children('td');
    data.each(function(){

      myRows[count]={};
      myData = [];
      var d=$(this);
      var col= d.children('div').children('table').children('tbody').children('tr');
      var name= col.eq(1).children('td').children('div').children('a').eq(0);
      var company= col.eq(1).children('td').children('div').children('span').children('a');
      var salts= col.eq(1).children('td').children('div').children('a').eq(1)
      var combinations= col.eq(4).children('td').eq(0);
      var volume= col.eq(4).children('td').eq(1);
      var presentation= col.eq(4).children('td').eq(2);
      var price= col.eq(4).children('td').eq(3);

      var salt= salts.text().toString();
      var str= salt.slice(1,salt.length-1);
      var s= str.split(/[\+\/,]/);

      myData["Name"] = name.text();
      myData["Company"] = company.text();
      myData["Salt0"] = "";
      myData["Salt1"] = "";
      myData["Salt2"] = "";
      myData["Salt3"] = "";
      for(var k=0;k<s.length;k++){
        var str1= "Salt"+k.toString();
        if(str1 == "Salt0"){
          myData["Salt0"] = s[0].toLowerCase();
        }
        if(str1 == "Salt1"){
          myData["Salt1"] = s[1].toLowerCase();
        }
        if(str1 == "Salt2"){
          myData["Salt2"] = s[2].toLowerCase();
        }
        if(str1 == "Salt3"){
          myData["Salt3"] = s[3].toLowerCase();
        }
      }
      myData["Combinations"]= combinations.text();
      myData["Volume"]= volume.text();
      myData["Presentation"]= presentation.text();
      myData["Price"]=price.text();
      console.log(myData);
      var saveData = new Model({
          'Name':myData["Name"],
          'Company':myData["Company"],
          'Salt0':myData["Salt0"],
          'Salt1':myData["Salt1"],
          'Salt2':myData["Salt2"],
          'Salt3':myData["Salt3"],
          'Combinations':myData["Combinations"],
          'Volume':myData["Volume"],
          'Presentation':myData["Presentation"],
          'Price':myData["Price"]
      }).save(function(err, result) {
          if (err) throw err;

          if(result) {
            console.log(count);
            console.log("Saved");
          }
        });
      //console.log(myData.Name);
      // myRows[count]["Name"]= name.text();
      // myRows[count]["Company"]= company.text();
      // for(var j=0;j<s.length;j++){
      //   myRows[count]["Salt"+j.toString()]= s[j].toLowerCase();
      // }
      // myRows[count]["Combinations"]= combinations.text();
      // myRows[count]["Volume"]= volume.text();
      // myRows[count]["Presentation"]= presentation.text();
      // myRows[count]["Price"]= price.text();
      // Medicine.addMedicine(myRows[count]);
      count++;

    });
  });

}

// function convert_json(){
//   var myObj = new Medicine({
//     Name:myRows[]["Name"],
//   });
//   myObj = JSON.stringify(myRows);
//   Medicine.addMedicine(myObj);
//   //console.log(JSON.stringify(myObj)); 
//   //console.log(count);
// }
