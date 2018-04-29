const express = require('express');
const router = express.Router();
//const passport = require('passport');
//const jwt = require('jsonwebtoken');
const Disease = require('../models/disease');
const config = require('../config/database');
var bodyParser= require('body-parser');
var urlencodedParser= bodyParser.urlencoded({extended: false});



router.get('/getDiseaseList' , (req,res) => {
	// res.send("Register !");
	//console.log("hello");
	Disease.getDiseaseList( (err,results)=>{
		console.log("hello");
		//console.log(results);
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

router.post('/getSaltForDisease' ,urlencodedParser, (req, res)=>{
	var data={
		disease: req.body.disease,
	}
	// res.send("Register !");
	//console.log("hello");
	Disease.getSaltForDisease(data.disease, (err,results)=>{
		console.log("hello");
		//console.log(results);
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

router.post('/getMedicineForDisease' ,urlencodedParser, (req, res)=>{
	var data={
		disease: req.body.disease,
	}
	// res.send("Register !");
	//console.log("hello");
	Disease.getMedicineForDisease(data.disease, (err,results)=>{
		console.log("hello");
		//console.log(results);
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

module.exports = router;