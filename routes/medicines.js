const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Medicine = require('../models/medicine');
const config = require('../config/database');

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

router.get('/searchMedicine/:name',(req,res)=>{

	Medicine.getMedicine(req.params.name,(err,results)=>{
		console.log(results);
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

});

router.get('/searchMedicineWithSalt/:name/:salt',(req,res)=>{

	var data = {
            "name": req.params.name,
            "salt": req.params.salt
    };
	Medicine.getMedicineSalt(data,(err,results)=>{
		console.log("hello");
		console.log(results);
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

});

router.get('/getAllMedicineWithSalt/:salt',(req,res)=>{

	Medicine.getAllMedicineWithSalt(req.params.salt,(err,results)=>{
		console.log(results);
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

});

router.get('/getAllMedicineWithSaltSorted/:salt',(req,res)=>{

	Medicine.getAllMedicineWithSalt(req.params.salt,(err,results)=>{
		console.log(results);
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

});



module.exports = router;