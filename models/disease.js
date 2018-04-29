const mongoose = require('mongoose');
const assert = require('assert')
const config = require('../config/database');
const Medicine = require('./medicine');

const DiseaseSchema= mongoose.Schema(
		{
			Condition : String,
			Salts: [],
		},
		{
			collection: 'disease'
		}

	);

const Disease = module.exports = mongoose.model('Disease', DiseaseSchema);

// const MedicineSchema = mongoose.Schema({
// 	medicines:{
// 		Name:String,
// 		Company:String,
// 		Salt0:String,
// 		Salt1:String,
// 		Salt2:String,
// 		Salt3:String,
// 		Combinations:String,
// 		Volume:String,
// 		Presentation:String,
// 		Price:Number
// 	}
// });

// const Medicine = module.exports = mongoose.model('Medicines',MedicineSchema);



module.exports.getDiseaseList = function(callback){
	//console.log("hello");
	// console.log(Jobexp.collection.find());
	// console.log(Jobexp.find({}));
	// Jobexp.find({});
	// console.log("hello");
	Disease.find(function (err, results) {
		console.log(results);
        assert.equal(null, err);
        
        //invoke callback with your mongoose returned result
        callback(err,results);
      });
}

module.exports.getSaltForDisease = function(disease, callback){
	//console.log("hello");
	// console.log(Jobexp.collection.find());
	// console.log(Jobexp.find({}));
	// Jobexp.find({});
	// console.log("hello");
	Disease.find({"Condition": disease},function (err, results) {
		console.log(results);
        assert.equal(null, err);
        
        //invoke callback with your mongoose returned result
        callback(err,results);
      });
}

module.exports.getMedicineForDisease = function(disease, callback){
	//console.log("hello");
	// console.log(Jobexp.collection.find());
	// console.log(Jobexp.find({}));
	// Jobexp.find({});
	// console.log("hello");
	Disease.find({"Condition": disease},{"Salts":1},function (err, results) {
		//console.log(results);
        assert.equal(null, err);
        salt=[];
        var j=0;
   		for(i=0;i<results[0].Salts.length;i++)
   		{

   			// if(results[0].Salts[i][results[0].Salts[i].length-1]==" ")
   			// {
   			// 	results[0].Salts[i]=results[0].Salts[i].slice(0,results[0].Salts[i].length-1)
   			// }
   			results[0].Salts[i]=results[0].Salts[i].toLowerCase();

   			results[0].Salts[i]=results[0].Salts[i].replace(/[()]/g,'#');
 			var check = results[0].Salts[i].split(/[#]/);
 			for(z=0;z<=check.length-1;z++)
 			{
 				if(check[z][check[z].length-1]== " "){
 					check[z]= check[z].slice(0, check[z].length-1);
 				}
 				if(check[z]!=""){
 					salt[j]= check[z];
 					j++;
 				}
 			}

   		}
   		var res=[];
   		var count=0;
   		var j=1;
        for(i=0;i<salt.length; i++)
        {
        	var med={
        		salt0: "",
        		salt1: "",
        		salt2: "",
        		salt3: ""
        	}
        	var split = salt[i].split(/[,]/);
        	med.salt0= split[0];
        	if(split.length==2){
        		if(split[1][0]== " ")
        		{
        			split[1]= split[1].slice(1,split[1].length);
        		}
        		med.salt1= split[1];
        	}
        	if(split.length==3){
        		if(split[2][0]== " ")
        		{
        			split[2]= split[2].slice(1,split[2].length);
        		}
        		med.salt2= split[2];
        	}
        	if(split.length==4){
        		if(split[3][0]== " ")
        		{
        			split[3]= split[3].slice(1,split[3].length);
        		}
        		med.salt3= split[3];
        	}
			Medicine.getAllMedicineWithSalt(med, (err,result)=>{

        		if(result.length>0){
        			for(l=0;l<result.length;l++)
        			{
        				res[count]=result[l];
        				count++;

        			}
        		}
        		j++;
        		if(j==salt.length+1)
				{
					done();
				}
			});

        }
        function done(){
        	callback(err,res);
        }
      });
}