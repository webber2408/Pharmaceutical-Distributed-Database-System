const mongoose = require('mongoose');
// const bcrpyt = require('bcrpytjs');
const assert = require('assert')
const config = require('../config/database');

// User schema 
const ConsultationSchema = mongoose.Schema({
	consultation:{
		type: String,
		required: true
	}
});


const Consultation = module.exports = mongoose.model('Consultation',ConsultationSchema);

// module.exports.getExperience = function(id,callback){
// 	Jobex.findById(id,callback);
// }
module.exports.getConsultation = function(callback){
	console.log("hello");
	// console.log(Jobexp.collection.find());
	// console.log(Jobexp.find({}));
	// Jobexp.find({});
	// console.log("hello");
	Consultation.find(function (err, results) {
		console.log(results);
        assert.equal(null, err);
        
        //invoke callback with your mongoose returned result
        callback(err,results);
      });
}
// module.exports.getExperience = function(username, callback){
// 	const query = {username:username};
// 	User.findOne(query,callback);
// }

module.exports.addConsultation = function(newConsultation , callback){
	newConsultation.save(callback);
}

