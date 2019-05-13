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
	request.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vScx0dsrYookK-4-3Lu3L_CH_noLq-WXMxS3CqTKMo4ITIxVYS8pvy3t27HNKgctjofgdn9zX1byWRW/pub?output=csv', function (error, response, body) {
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
		var students = [];
		lodash.each(csvRow,(row, index)=>{
			if(index===0) {return;}
			var data = {courses : []}
			var course = {}
			lodash.each(row,(r,i)=>{
				if(csvRow[0][i].indexOf('student')!==-1) {
					if(csvRow[0][i] === 'data__student_id' && r === 0) {
						//data = students[students.length-1]
						data[csvRow[0][i].replace('data__','')] = r
					}
					else {
						data[csvRow[0][i].replace('data__','')] = r
					}
				}
				if(csvRow[0][i].indexOf('courses')!==-1) {
					if(isNaN(r)) {
						course[csvRow[0][i].replace('data__courses__','')] = r		
					}
					else {
						course[csvRow[0][i].replace('data__courses__','')] = r*1
					}
				}	
			})
			if(!data.student_id) {
				students[students.length-1].courses.push(course);
			}
			else {
				data.courses.push(course);
				students.push(data)
			}

			
		})
		res.json({
			data:students,
			total_count:6
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

