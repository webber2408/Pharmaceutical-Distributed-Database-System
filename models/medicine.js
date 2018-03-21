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
		Price:String,
	}
});
const Medicine = module.exports = mongoose.model('Medicines',MedicineSchema);

module.exports.getAllMedicines = function(callback){
	console.log("hello");
	// console.log(Jobexp.collection.find());
	// console.log(Jobexp.find({}));
	// Jobexp.find({});
	// console.log("hello");
	Medicine.find(function (err, results) {
		console.log(results);
        assert.equal(null, err);
        
        //invoke callback with your mongoose returned result
        callback(err,results);
      });
}
module.exports.addMedicine = function(newMedicine){
	console.log(newMedicine);
	newMedicine.save();
}
module.exports.getMedicine= function(med_name,callback){
	Medicine.find({"Name":med_name}, function(err,results){
        if (err) return handleError(err);
        else console.log(results);
        callback(err,results);
	});
}

module.exports.getMedicineSalt= function(data,callback){
	Medicine.find({"Name":data.name,"Salt0":data.salt}, function(err,results){
        if (err) return handleError(err);
        else console.log(results);
        callback(err,results);
	});
}

module.exports.getAllMedicineWithSalt= function(med_salt,callback){
	Medicine.find({"Salt0":med_salt}, function(err,results){
        if (err) return handleError(err);
        else console.log(results);
        callback(err,results);
	});
}

module.exports.getAllMedicineWithSaltSorted= function(med_salt,callback){
	Medicine.find({"Salt0":med_salt},null,{sort:{"Price":1}},function(err,results){
        if (err) return handleError(err);
        else console.log(results);
        callback(err,results);
	});
}

