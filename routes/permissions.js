var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.json({"data":[{"permission_id":248,"institute_id":"45e72a35-a596-42c2-842e-7745744974a9","institute_name":"Demo Institution","discipline_id":null,"discipline_name":null,"course_id":null,"course_name":null},{"permission_id":255,"institute_id":"45e72a35-a596-42c2-842e-7745744974a9","institute_name":"Demo Institution","discipline_id":null,"discipline_name":null,"course_id":null,"course_name":null},{"permission_id":256,"institute_id":"45e72a35-a596-42c2-842e-7745744974a9","institute_name":"Demo Institution","discipline_id":null,"discipline_name":null,"course_id":null,"course_name":null},{"permission_id":257,"institute_id":"45e72a35-a596-42c2-842e-7745744974a9","institute_name":"Demo Institution","discipline_id":null,"discipline_name":null,"course_id":null,"course_name":null},{"permission_id":258,"institute_id":"45e72a35-a596-42c2-842e-7745744974a9","institute_name":"Demo Institution","discipline_id":null,"discipline_name":null,"course_id":null,"course_name":null},{"permission_id":259,"institute_id":"45e72a35-a596-42c2-842e-7745744974a9","institute_name":"Demo Institution","discipline_id":null,"discipline_name":null,"course_id":null,"course_name":null},{"permission_id":260,"institute_id":"45e72a35-a596-42c2-842e-7745744974a9","institute_name":"Demo Institution","discipline_id":null,"discipline_name":null,"course_id":null,"course_name":null},{"permission_id":261,"institute_id":"45e72a35-a596-42c2-842e-7745744974a9","institute_name":"Demo Institution","discipline_id":null,"discipline_name":null,"course_id":null,"course_name":null}], "survey":{}})
});

module.exports = router;
