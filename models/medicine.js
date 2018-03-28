const mongoose = require('mongoose');
const assert = require('assert')
const config = require('../config/database');

// User schema 
const MedicineSchema = mongoose.Schema({
	medicines:{
		Name:String,
		Company:String,
		Salt0:String,
		Salt1:String,
		Salt2:String,
		Salt3:String,
		Combinations:String,
		Volume:String,
		Presentation:String,
		Price:Number,
	}
});
const Medicine = module.exports = mongoose.model('Medicines',MedicineSchema);

module.exports.getAllMedicines = function(page,callback){
	console.log("hello");
	// console.log(Jobexp.collection.find());
	// console.log(Jobexp.find({}));
	// Jobexp.find({});
	// console.log("hello");
	console.log(page);
	page = parseInt((page-1)*10);
	Medicine.find({}).limit(10).skip(page).exec(function(err,results){
        if (err) return handleError(err);
        else console.log(results);
        callback(err,results);
	});
}
module.exports.addMedicine = function(newMedicine){
	console.log(newMedicine);
	newMedicine.save();
}


module.exports.getMedicine= function(med_name,callback){
	console.time("db");
	Medicine.find({"Name":med_name}, function(err,results){
		console.timeEnd("db");
        if (err) return handleError(err);
        else console.log(results);
        callback(err,results);
	});
}


module.exports.getAllMedicineWithSalt= function(med_salt,callback){
	//Medicine.find({"Salt0":med_salt.salt0,"Salt1":med_salt.salt1,"Salt2":med_salt.salt2,"Salt3":med_salt.salt3}, function(err,results){
		console.log(med_salt.salt0);
		console.log(med_salt.salt1);
		console.time("dbs");
	Medicine.find(
					{  $and:[
								{  
									$or:[
									 		{"Salt0":med_salt.salt0},
									 		{"Salt0":med_salt.salt1},
									 		{"Salt0":med_salt.salt2},
									 		{"Salt0":med_salt.salt3}
									 	]
								},
								{
									$or:[
											{"Salt1":med_salt.salt0},
											{"Salt1":med_salt.salt1},
											{"Salt1":med_salt.salt2},
											{"Salt1":med_salt.salt3}
										]
								},
								{
									$or:[
											{"Salt2":med_salt.salt0},
											{"Salt2":med_salt.salt1},
											{"Salt2":med_salt.salt2},
											{"Salt2":med_salt.salt3}
										]
								},
								{
									$or:[
											{"Salt3":med_salt.salt0},
											{"Salt3":med_salt.salt1},
											{"Salt3":med_salt.salt2},
											{"Salt3":med_salt.salt3}
										]
								}
							]
					}, function(err,results){
		console.timeEnd("dbs");
        if (err) return handleError(err);
        else console.log(results);
        callback(err,results);
	});
}

module.exports.getOneMedicineWithSalt= function(med_salt,callback){
	


	//Medicine.findOne({"Salt0":med_salt.salt0,"Salt1":med_salt.salt1,"Salt2":med_salt.salt2,"Salt3":med_salt.salt3}, function(err,results){
    Medicine.findOne(
    {
    					$and:[
								{  
									$or:[
									 		{"Salt0":med_salt.salt0},
									 		{"Salt0":med_salt.salt1},
									 		{"Salt0":med_salt.salt2},
									 		{"Salt0":med_salt.salt3}
									 	]
								},
								{
									$or:[
											{"Salt1":med_salt.salt0},
											{"Salt1":med_salt.salt1},
											{"Salt1":med_salt.salt2},
											{"Salt1":med_salt.salt3}
										]
								},
								{
									$or:[
											{"Salt2":med_salt.salt0},
											{"Salt2":med_salt.salt1},
											{"Salt2":med_salt.salt2},
											{"Salt2":med_salt.salt3}
										]
								},
								{
									$or:[
											{"Salt3":med_salt.salt0},
											{"Salt3":med_salt.salt1},
											{"Salt3":med_salt.salt2},
											{"Salt3":med_salt.salt3}
										]
								}
							]
    }, function(err,results){
        if (err) return handleError(err);
        else console.log(results);
        callback(err,results);
	});
}

module.exports.getAllMedicineWithSaltSorted= function(med_salt,callback){

	//Medicine.find({"Salt0":med_salt.salt0,"Salt1":med_salt.salt1,"Salt2":med_salt.salt2,"Salt3":med_salt.salt3}).sort({"Price":1}).exec(function(err,results){
    Medicine.find(
				    {
				    	$and:[
								{  
									$or:[
									 		{"Salt0":med_salt.salt0},
									 		{"Salt0":med_salt.salt1},
									 		{"Salt0":med_salt.salt2},
									 		{"Salt0":med_salt.salt3}
									 	]
								},
								{
									$or:[
											{"Salt1":med_salt.salt0},
											{"Salt1":med_salt.salt1},
											{"Salt1":med_salt.salt2},
											{"Salt1":med_salt.salt3}
										]
								},
								{
									$or:[
											{"Salt2":med_salt.salt0},
											{"Salt2":med_salt.salt1},
											{"Salt2":med_salt.salt2},
											{"Salt2":med_salt.salt3}
										]
								},
								{
									$or:[
											{"Salt3":med_salt.salt0},
											{"Salt3":med_salt.salt1},
											{"Salt3":med_salt.salt2},
											{"Salt3":med_salt.salt3}
										]
								}
							]
				    }).sort({"Price":1}).exec(function(err,results){
        if (err) return handleError(err);
        else console.log(results);
        callback(err,results);
	});

}

module.exports.getMedicineWithSalt= function(med_salt,callback){
	console.log(med_salt.name);
	Medicine.find(
					{
						"Name":med_salt.name, 
						 $and:[
								{  
									$or:[
									 		{"Salt0":med_salt.salt0},
									 		{"Salt0":med_salt.salt1},
									 		{"Salt0":med_salt.salt2},
									 		{"Salt0":med_salt.salt3}
									 	]
								},
								{
									$or:[
											{"Salt1":med_salt.salt0},
											{"Salt1":med_salt.salt1},
											{"Salt1":med_salt.salt2},
											{"Salt1":med_salt.salt3}
										]
								},
								{
									$or:[
											{"Salt2":med_salt.salt0},
											{"Salt2":med_salt.salt1},
											{"Salt2":med_salt.salt2},
											{"Salt2":med_salt.salt3}
										]
								},
								{
									$or:[
											{"Salt3":med_salt.salt0},
											{"Salt3":med_salt.salt1},
											{"Salt3":med_salt.salt2},
											{"Salt3":med_salt.salt3}
										]
								}
							]
						
					},function(err,results){
		if (err) return handleError(err);
        else console.log(results);
        callback(err,results);
	});
}

module.exports.getSubstitute=function(name,callback){
	Medicine.find({"Name":name},{"Salt0":1,"Salt1":1,"Salt2":1,"Salt3":1,"_id":0},function(err,res){
		Medicine.find(res[0],function(err,results){
			if (err) return handleError(err);
	        else console.log(results);
	        callback(err,results);
		});
	});
}

module.exports.getSubstituteSorted=function(name,callback){
	Medicine.find({"Name":name},{"Salt0":1,"Salt1":1,"Salt2":1,"Salt3":1,"_id":0},function(err,res){
		Medicine.find(res[0]).sort({"Price":1}).exec(function(err,results){
			if (err) return handleError(err);
	        else console.log(results);
	        callback(err,results);
		});
	});
}

module.exports.getMedicinesCompanyWise=function(callback){
	Medicine.aggregate([
					{$group:{"_id":"$Company",'docs': { '$push': '$$ROOT' }}}]).exec(function(err,res){	
		// Medicine.find({"Company":res._id},function(err,results){
		// 	console.log(results);
			var result = res.reduce(function(obj, doc) { 
                obj[doc._id] = doc.docs
                return obj;
            }, {});
            console.log(result);
            //result.json(result);
            callback(err,result);
		});
}









