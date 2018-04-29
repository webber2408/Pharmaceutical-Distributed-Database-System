var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
const mongoose = require('mongoose');

const DiseaseSchema= mongoose.Schema(
		{
			Condition : String,
			Salts: [],
		},
		{
			collection: 'disease'
		}

	);


var Model = mongoose.model('Disease', DiseaseSchema);
mongoose.connect('mongodb://localhost:27017/test');
visit_page();

function visit_page(){
  var pageToVisit = "http://www.emedexpert.com/lists/conditions.shtml";

    //pageToVisitNow= pageToVisit+i.toString();
    console.log("Visiting page " + pageToVisit);
    request(pageToVisit, function(error, response, body) {
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


function crawl_table($){
	var table= $('.listtable');
	var tr= table.children('tr');
	//var result=[];
	var count=0;
	tr.each(function(index){
		if(index!=0){
			count++;
			var t= $(this);
			var myData=[];
			var condition= t.children('td').eq(0).text();
			//var drug= t.children('td').eq(1).text().toString().toLowerCase();
			//console.log(drug);
			//var drugs= drug.split(' ');
			var drug= t.children('td').eq(1).toString();

			var d= drug.slice(4,drug.length-5);
			var drugs= d.split('<br>');
			for(var k=0;k<drugs.length;k++){
				if(drugs[k].indexOf("<a href") > -1){
					drugs[k]="";
				}
			}
			//console.log(drugs);
			myData["Condition"]=condition;
			myData["Drug"]= drugs;
			var saveData = new Model({
		          'Condition':myData["Condition"],
		          'Salts':myData["Drug"]
		      }).save(function(err, result) {
		          if (err) throw err;

		          if(result) {
		            console.log(count);
		            console.log("Saved");
		          }
		        });
		}

	});
}