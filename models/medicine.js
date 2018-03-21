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

// module.exports.getAllMedicines = function(callback){
// 	console.log("hello");
// 	// console.log(Jobexp.collection.find());
// 	// console.log(Jobexp.find({}));
// 	// Jobexp.find({});
// 	// console.log("hello");
// 	Medicine.find(function (err, results) {
// 		console.log(results);
//         assert.equal(null, err);
        
//         //invoke callback with your mongoose returned result
//         callback(err,results);
//       });
// }
// module.exports.addMedicine = function(newMedicine){
// 	console.log(newMedicine);
// 	newMedicine.save();
// }
// module.exports.getMedicine= function(med_name,callback){
// 	Medicine.find({"Name":med_name}, function(err,results){
//         if (err) return handleError(err);
//         else console.log(results);
//         callback(err,results);
// 	});
// }

// module.exports.getMedicineSalt= function(data,callback){
// 	Medicine.find({"Name":data.name,"Salt0":data.salt}, function(err,results){
//         if (err) return handleError(err);
//         else console.log(results);
//         callback(err,results);
// 	});
// }

// module.exports.getAllMedicineWithSalt= function(med_salt,callback){
// 	Medicine.find({"Salt0":med_salt}, function(err,results){
//         if (err) return handleError(err);
//         else console.log(results);
//         callback(err,results);
// 	});
// }

// module.exports.getAllMedicineWithSaltSorted= function(med_salt,callback){
// 	Medicine.find({"Salt0":med_salt},null,{sort:{"Price":1}},function(err,results){
//         if (err) return handleError(err);
//         else console.log(results);
//         callback(err,results);
// 	});
// }


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

// module.exports.getMedicineSalt= function(data,callback){
// 	Medicine.find({"Name":data.name,"Salt0":data.salt}, function(err,results){
//         if (err) return handleError(err);
//         else console.log(results);
//         callback(err,results);
// 	});
// }

module.exports.getAllMedicineWithSalt= function(med_salt,callback){
	Medicine.find({"Salt0":med_salt.salt0,"Salt1":med_salt.salt1,"Salt2":med_salt.salt2,"Salt3":med_salt.salt3}, function(err,results){
        if (err) return handleError(err);
        else console.log(results);
        callback(err,results);
	});
}

module.exports.getAllMedicineWithSaltSorted= function(med_salt,callback){

	Medicine.find({"Salt0":med_salt.salt0,"Salt1":med_salt.salt1,"Salt2":med_salt.salt2,"Salt3":med_salt.salt3}).sort({"Price":1}).exec(function(err,results){
        if (err) return handleError(err);
        else console.log(results);
        callback(err,results);
	});
	// var cursor= Medicine.find({"Salt0":med_salt});
	// var query= cursor.sort({"Price":1});
	// console.log(query);
	// query.exec(function(err,results){
	// 	if (err) return handleError(err);
 //       // else console.log(results);
 //        callback(err,results);
	// });
}

module.exports.getMedicineWithSalt= function(data,callback){
	console.log(data.name);
	Medicine.find({"Name":data.name, "Salt0":data.salt0,"Salt1":data.salt1,"Salt2":data.salt2,"Salt3":data.salt3},function(err,results){
		if (err) return handleError(err);
        else console.log(results);
        callback(err,results);
	});
}

module.exports.getSubstitute=function(name,callback){
	Medicine.find({"Name":name},function(err,res){
		console.log(res.Salt0);
	});
}







