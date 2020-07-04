const router = require('express').Router();
const studentCtrl = require('../controllers/student.controller');
const { checkAuth } = require("../helpers/auth");

router.get('/', checkAuth, studentCtrl.getStudents);
router.post('/', checkAuth, studentCtrl.createStudent);
router.get('/:id', checkAuth, studentCtrl.getStudent);
router.put('/:id', checkAuth, studentCtrl.editStudent);
router.delete('/:id', checkAuth, studentCtrl.deleteStudent);

module.exports = router;