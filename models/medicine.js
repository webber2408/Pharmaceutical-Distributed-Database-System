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