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
	request.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vQF4ycRZWG4cFuUbjpCjycZtL2FVoRsl097zE7UnALjFlArPlW1ZRx-bOq0_c5ZOWdy2eA8OtoskfMr/pub?output=csv', function (error, response, body) {
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
		var courses = [];
		lodash.each(csvRow,(row, index)=>{
			if(index===0) {return;}
			var data = {}
			lodash.each(row,(r,i)=>{
				if(isNaN(r)) {
				data[csvRow[0][i]] = r
			}
				else {
				data[csvRow[0][i]] = r *1
				}	
			})
			courses.push(data)
			
		})
		res.json({
			data : {
				students : courses,
				page_number : 1,
				total_records:20,
				total_page:1
			}
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
