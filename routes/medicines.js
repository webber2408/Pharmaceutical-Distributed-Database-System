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






module.exports = router;