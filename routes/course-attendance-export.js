	var express = require('express');
var router = express.Router();

const request=require('request')
const csv=require('csvtojson')
const lodash = require('lodash');

let onError = function(err) {
	console.log(err)
}

let onComplete = function(data) {
	console.log(data)
}

//var request = require('request');

 
/* csv()
.fromStream(request.get('https://docs.google.com/spreadsheets/d/157EMSMa84bQDX8RrqRXxCMe90ltMQzuaZ_SRSyWFDQM/edit?usp=sharing'))
.subscribe((json)=>{
    console.log(json)
    return new Promise((resolve,reject)=>{
        // long operation for each json e.g. transform / write into database.
    })
},onError,onComplete); */

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
	request.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vRXMialXNW2fvJTtdfZeyMBaJGz50-fJYuQGPE-cGeXpFFhhl6j20C8mOmiIO6GjUO6E5PwIKqQGLOv/pub?gid=0&single=true&output=csv', function (error, response, body) {
		res.set('Content-Type', 'text/csv');
  		res.status(200).send(body);
	});
});

module.exports = router;
