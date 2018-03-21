const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Medicine = require('../models/medicine');
const config = require('../config/database');
var bodyParser= require('body-parser');
var urlencodedParser= bodyParser.urlencoded({extended: false});
router.get('/getAllMedicines' , (req,res) => {
	// res.send("Register !");
	console.log("hello");
	Medicine.getAllMedicines( (err,results)=>{
		console.log("hello");
		console.log(results);
		if(err){
			res.json({
				success:false,
				msg: 'Failed to retrieve all medicines !'
			});
		}
		else{
			res.json({
				success: true,
				msg: 'All Medicines retrieved !',
				results:results
			});
		}
	});
});

// router.get('/searchMedicine/:name',(req,res)=>{

// 	Medicine.getMedicine(req.params.name,(err,results)=>{
// 		console.log(results);
// 		if(err){
// 			res.json({
// 				success:false,
// 				msg: 'Failed to retrieve the medicine !'
// 			});
// 		}
// 		else{
// 			res.json({
// 				success: true,
// 				msg: 'Medicine retrieved !',
// 				results:results
// 			});
// 		}

// 	});

// });

// router.get('/searchMedicineWithSalt/:name/:salt',(req,res)=>{

// 	var data = {
//             "name": req.params.name,
//             "salt": req.params.salt
//     };
// 	Medicine.getMedicineSalt(data,(err,results)=>{
// 		console.log("hello");
// 		console.log(results);
// 		if(err){
// 			res.json({
// 				success:false,
// 				msg: 'Failed to retrieve the medicine !'
// 			});
// 		}
// 		else{
// 			res.json({
// 				success: true,
// 				msg: 'Medicine retrieved !',
// 				results:results
// 			});
// 		}

// 	});

// });

// router.get('/getAllMedicineWithSalt/:salt',(req,res)=>{

// 	Medicine.getAllMedicineWithSalt(req.params.salt,(err,results)=>{
// 		console.log(results);
// 		if(err){
// 			res.json({
// 				success:false,
// 				msg: 'Failed to retrieve the medicine !'
// 			});
// 		}
// 		else{
// 			res.json({
// 				success: true,
// 				msg: 'Medicine retrieved !',
// 				results:results
// 			});
// 		}

// 	});

// });

// router.get('/getAllMedicineWithSaltSorted/:salt',(req,res)=>{

// 	Medicine.getAllMedicineWithSalt(req.params.salt,(err,results)=>{
// 		console.log(results);
// 		if(err){
// 			res.json({
// 				success:false,
// 				msg: 'Failed to retrieve the medicine !'
// 			});
// 		}
// 		else{
// 			res.json({
// 				success: true,
// 				msg: 'Medicine retrieved !',
// 				results:results
// 			});
// 		}

// 	});

// });



// module.exports = router;

router.post('/getMedicine',urlencodedParser, (req, res)=>{
	var data={
		name: req.body.name,
		salt0:req.body.salt0,
	 	salt1:req.body.salt1,
	 	salt2:req.body.salt2,
	 	salt3:req.body.salt3,
	 	sort:req.body.sort,
	 	sub:req.body.substitute
	}
	console.log(data);
	if(data.name!="" && data.salt0=="" && data.sort=="no" && data.sub=="no"){
		Medicine.getMedicine(data.name,(err,results)=>{
			if(err){
				res.json({
					success:false,
					msg: 'Failed to retrieve the medicine !'
				});
			}
			else{
				res.json({
					success: true,
					msg: 'Medicine retrieved !',
					results:results
				});
			}

		});
	}

	else if(data.name=="" && data.salt0!="" && data.sort=="no" && data.sub=="yes")
	{
			Medicine.getAllMedicineWithSalt(data,(err,results)=>{
			if(err){
				res.json({
					success:false,
					msg: 'Failed to retrieve the medicine !'
				});
			}
			else{
				res.json({
					success: true,
					msg: 'Medicine retrieved !',
					results:results
				});
			}

		});
	}
	else if(data.name!="" && data.salt0!="" && data.sort=="no" && data.sub=="no")
	{
		Medicine.getMedicineWithSalt(data,(err,results)=>{
			if(err){
				res.json({
					success:false,
					msg: 'Failed to retrieve the medicine !'
				});
			}
			else{
				res.json({
					success: true,
					msg: 'Medicine retrieved !',
					results:results
				});
			}

		});
	}

	else if(data.name=="" && data.salt0!="" && data.sort=="yes" && data.sub=="yes"){
		Medicine.getAllMedicineWithSaltSorted(data,(err,results)=>{
		//console.log(results);
			if(err){
				res.json({
					success:false,
					msg: 'Failed to retrieve the medicine !'
				});
			}
			else{
				res.json({
					success: true,
					msg: 'Medicine retrieved !',
					results:results
				});
			}

		});
	}

	else if(data.name!="" && data.salt0!="" && data.sort=="no" && data.sub=="yes"){
		Medicine.getAllMedicineWithSalt(data,(err,results)=>{
			if(err){
				res.json({
					success:false,
					msg: 'Failed to retrieve the medicine !'
				});
			}
			else{
				res.json({
					success: true,
					msg: 'Medicine retrieved !',
					results:results
				});
			}

		});

	}

	else if(data.name!="" && data.salt0!="" && data.sort=="yes" && data.sub=="yes"){
		Medicine.getAllMedicineWithSaltSorted(data,(err,results)=>{
			if(err){
				res.json({
					success:false,
					msg: 'Failed to retrieve the medicine !'
				});
			}
			else{
				res.json({
					success: true,
					msg: 'Medicine retrieved !',
					results:results
				});
			}

		});

	}

	// else if(data.name!="" && data.salt0=="" && data.sort=="no" && data.sub=="yes"){
	// 	Medicine.getSubstitute(data.name,(err,results)=>{
	// 		if(err){
	// 			res.json({
	// 				success:false,
	// 				msg: 'Failed to retrieve the medicine !'
	// 			});
	// 		}
	// 		else{
	// 			res.json({
	// 				success: true,
	// 				msg: 'Medicine retrieved !',
	// 				results:results
	// 			});
	// 		}

	// 	});

	// }
});
module.exports = router;