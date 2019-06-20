var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var permissionRouter = require('./routes/permissions');
var dashboardCounts = require('./routes/dashboard-counts')
var coi = require('./routes/coi.js');
var attendanceChange = require('./routes/attendance-change')
var instituteAttendance = require('./routes/institute-attendance');
var soi = require('./routes/soi.js');
var soica = require('./routes/soi-ca.js')
var allStudentsAttendance = require('./routes/all-students-attendance.js')
var demoCourse1 = require('./routes/demo-course-1.js')
var demoCourse2 = require('./routes/demo-course-2.js')
var soiEngagement = require('./routes/soi-engagement')
var allStudentEngagement = require('./routes/all-students-engagement');
var coiEngagement = require('./routes/coi-engagement')
var allCourseEngagement = require('./routes/all-courses-engagement')
var demoCourse1Students = require('./routes/demo-course-1-students')
var demoCourse2Students = require('./routes/demo-course-2-students')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/reports/courses/attendance', usersRouter);
app.use('/reports/courses/interest', coi);
app.use('/user/permissions', permissionRouter);
app.use('/reports/counts', dashboardCounts);
app.use('/reports/courses/attendance-change',attendanceChange)
app.use('/reports/institution', instituteAttendance)
app.use('/reports/students/interest',soi);
app.use('/reports/students/interest/course-attendance',soica)
app.use('/reports/students/attendance',allStudentsAttendance)
app.use('/reports/course/DEMO_COURSE_1', demoCourse1)
app.use('/reports/course/DEMO_COURSE_1/students', demoCourse1Students)
app.use('/reports/course/DEMO_COURSE_2', demoCourse2)
app.use('/reports/course/DEMO_COURSE_2/students', demoCourse2Students)
app.use('/reports/students/engagement/interest', soiEngagement)
app.use('/reports/students/engagement',allStudentEngagement)
app.use('/reports/courses/interest/engagement', coiEngagement)
app.use('/reports/courses/engagement',allCourseEngagement)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
