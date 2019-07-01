var express = require('express');
var router = express.Router();

var nJwt = require('njwt');
var secureRandom = require('secure-random');

var signingKey = secureRandom(256, {type: 'Buffer'}); // Create a highly random byte array of 256 bytes

	

const request=require('request')
const csv=require('csvtojson')
const lodash = require('lodash');

let onError = function(err) {
	console.log(err)
}

let onComplete = function(data) {
	console.log(data)
}

function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        var buff = new Buffer(base64, 'base64');  
		var text = buff.toString('ascii');
        return JSON.parse(text);
    }

router.post('/',function(req,res,next) {
	//console.log(req);
	console.log(parseJwt(req.headers.authorization));
	var claims = Object.assign({}, parseJwt(req.headers.authorization));
	const username = req.body.username;
	claims.exp = claims.exp + (60*60*24);
	claims.iat = claims.exp + (60*60*24);
	var jwt = nJwt.create(claims,signingKey);
	var token = jwt.compact();	
	console.log(parseJwt(token));
	res.json({
		username:username,
		access_token:'',
		email:null,
		id_token:token,
		refresh_token : null
	})
})

module.exports = router;