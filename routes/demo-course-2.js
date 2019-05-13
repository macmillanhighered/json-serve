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
	request.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vS_6Z0TF7b6T_ZpVnOA3r8dutrE7vzbWKvjQanln2uKMKxK2cjpnNYDz-3efq8XVsvXPbebnyQy70g2/pub?output=csv', function (error, response, body) {
		if (!error && response.statusCode == 200) {
		    var csv1 = body;
		    // Continue with your processing here.
		//console.log(csv1)	
	csv({
		noheader:true,
		output: "csv"
	})
	.fromString(csv1)
	.then((csvRow)=>{ 
		var data = {students : []}
		lodash.each(csvRow,(row, index)=>{
			if(index===0) {return;}
			var student = {}
			lodash.each(row,(r,i)=>{
				if(csvRow[0][i].indexOf('students__')!==-1) {
					if(isNaN(r)) {
						student[csvRow[0][i].replace('students__','')] = r		
					}
					else {
						student[csvRow[0][i].replace('students__','')] = r*1
					}
				}
				else if(r) {
					if(isNaN(r)) {
						data[csvRow[0][i]] = r		
					}
					else {
						data[csvRow[0][i]] = r*1
					}
				}
					
			})
			data.students.push(student)

			
		})
		res.json({
			data:data,
		})
		//console.log(JSON.stringify(csvRow))
		lodash.each(csvRow[0],(row)=>{
		
		})
	
	})
    }
});
	//res.json({a:1});
});

module.exports = router;

