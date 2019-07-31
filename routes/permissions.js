var express = require('express');
var router = express.Router();

function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        var buff = new Buffer(base64, 'base64');  
		var text = buff.toString('ascii');
        return JSON.parse(text);
    }

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(parseJwt(req.headers.authorization));
	res.json({"data":[{"permission_id":248,"institute_id":"45e72a35-a596-42c2-842e-7745744974a9","institute_name":"Demo Institution","discipline_id":null,"discipline_name":null,"course_id":null,"course_name":null},{"permission_id":255,"institute_id":"45e72a35-a596-42c2-842e-7745744974a9","institute_name":"Demo Institution","discipline_id":null,"discipline_name":null,"course_id":null,"course_name":null},{"permission_id":256,"institute_id":"45e72a35-a596-42c2-842e-7745744974a9","institute_name":"Demo Institution","discipline_id":null,"discipline_name":null,"course_id":null,"course_name":null},{"permission_id":257,"institute_id":"45e72a35-a596-42c2-842e-7745744974a9","institute_name":"Demo Institution","discipline_id":null,"discipline_name":null,"course_id":null,"course_name":null},{"permission_id":258,"institute_id":"45e72a35-a596-42c2-842e-7745744974a9","institute_name":"Demo Institution","discipline_id":null,"discipline_name":null,"course_id":null,"course_name":null},{"permission_id":259,"institute_id":"45e72a35-a596-42c2-842e-7745744974a9","institute_name":"Demo Institution","discipline_id":null,"discipline_name":null,"course_id":null,"course_name":null},{"permission_id":260,"institute_id":"45e72a35-a596-42c2-842e-7745744974a9","institute_name":"Demo Institution","discipline_id":null,"discipline_name":null,"course_id":null,"course_name":null},{"permission_id":261,"institute_id":"45e72a35-a596-42c2-842e-7745744974a9","institute_name":"Demo Institution","discipline_id":null,"discipline_name":null,"course_id":null,"course_name":null}], "survey":{  
      "application_enabled":1,
      "created_at":"2019-06-27 16:10:43",
      "effective_at":null,
      "email":parseJwt(req.headers.authorization).email,
      "expires_at":null,
      "external_id":null,
      "first_name":"First Name",
      "id":2,
      "last_name":"Last",
      "organizations":[  
         {  
            "display_name":"Demo University Survey",
            "effective_at":null,
            "expires_at":null,
            "ipeds_id":null,
            "organization_id":2,
            "organization_name":"di0000000000006",
            "salesforce_id":null
         }
      ],
      "user_roles":[  
         {  
            "effective_at":null,
            "expires_at":null,
            "organization_id":2,
            "organization_name":"di0000000000006",
            "role_id":2,
            "role_name":"admin"
         }
      ]
   }})
});

module.exports = router;
