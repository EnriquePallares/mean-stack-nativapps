const router = require('express').Router();
const courseCtrl = require('../controllers/course.controller');
const { checkAuth }  = require("../helpers/auth");

router.get('/', checkAuth ,courseCtrl.getCourses);
router.post('/',checkAuth ,courseCtrl.createCourse);
router.get('/:id', checkAuth , courseCtrl.getCourse);
router.put('/:id', checkAuth , courseCtrl.editCourse);
router.delete('/:id', checkAuth , courseCtrl.deleteCourse);

module.exports = router;