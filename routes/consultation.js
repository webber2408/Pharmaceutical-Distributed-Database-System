const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Consultation = require('../models/consultations');
const config = require('../config/database');

//register 

router.post('/addConsultation' , (req,res , next) => {
	// res.send("Register !");
	let newConsultation = new Consultation({
		consultation: req.body.consultation
	});

	Consultation.addConsultation(newConsultation , (err,newConsultation)=>{
		if(err){
			res.json({
				success:false,
				msg: 'Failed to add consultation !'
			});
		}
		else{
			res.json({
				success: true,
				msg: 'Consultation recorded successfully  !'
			});
		}
	});
});

router.get('/getConsultation' , (req,res) => {
	// res.send("Register !");
	console.log("hello");
	Consultation.getConsultation( (err,results)=>{
		console.log("hello");
		console.log(results);
		if(err){
			res.json({
				success:false,
				msg: 'Failed to retrieve consultations !'
			});
		}
		else{
			res.json({
				success: true,
				msg: 'All consultations retrieved !',
				results:results
			});
		}
	});
});






module.exports = router;