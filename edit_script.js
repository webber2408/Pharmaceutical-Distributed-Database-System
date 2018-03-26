var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
const mongoose = require('mongoose');

var rn = require('random-number');
var options = {
  min:  30
, max:  400
, integer: true
}
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
    Price: Number
  },
  {
  collection: 'medicines'
}
);
var Model = mongoose.model('Medicines', MedicineSchema);
mongoose.connect('mongodb://localhost:27021/test');

change_price();
change_salt();

// change_price();

function change_price(){
  // Model.find({"Price":-1},function(err,result){
  //   if (err) throw err;
  //   result.Price=rn(options);
  //   result.save(function(err){
  //     if (err) throw err;
  //     console.log("Updated");
  //   });
  // });
  Model.update({"Price":-1},{$set: {"Price":rn(options)}},{multi: true},function(err, result){
    if (err) throw err;
    console.log("Updated");
  });
  // Model.find({"Price":},function(err,result){
  //   if (err) throw err;
  //   console.log(result);
  // });
}

//db.medicines.update({"Price":NaN},{$set: {"Price":99}})


function change_salt(){
  Model.find({},{Salt0:1, Salt1:1, Salt2:1, Salt3:1},function(err,result){
    var count=0;
    for(var i=0;i<result.length;i++)
    {
          var str=result[i].Salt0;
          if(str[0]==" "){
            str=str.slice(1,str.length)
          }
          if(str[str.length-1]==" "){
            str=str.slice(0,str.length-1);
          }

          var str1=result[i].Salt1;
          if(str1[0]==" "){
            str1=str1.slice(1,str1.length)
          }
          if(str1[str1.length-1]==" "){
            str1=str1.slice(0,str1.length-1);
          }

          var str2=result[i].Salt2;
          if(str2[0]==" "){
            str2=str2.slice(1,str2.length)
          }
          if(str2[str2.length-1]==" "){
            str2=str2.slice(0,str2.length-1);
          }

          var str3=result[i].Salt3;
          if(str3[0]==" "){
            str3=str3.slice(1,str3.length)
          }
          if(str3[str3.length-1]==" "){
            str3=str3.slice(0,str3.length-1);
          }

          Model.update({"_id":result[i]._id},{$set:{"Salt0":str, "Salt1":str1, "Salt2":str2, "Salt3":str3}}, function(err, res){
            if (err) throw (err);
          });
    }
  });
}