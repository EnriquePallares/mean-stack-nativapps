const Student = require("../models/student");
const studentCtrl = {};

studentCtrl.getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

studentCtrl.createStudent = async (req, res) => {
  const {
    name: name,
    lastname: lastname,
    age: age,
    email: email,
    courseAssocciated: courseAssocciated,
  } = req.body;

  const newStudent = new Student({
    name,
    lastname,
    age,
    email,
    courseAssocciated,
  });
  await newStudent.save();

  res.json({
    status: "Student Saved",
  });
};

studentCtrl.getStudent = async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
};

studentCtrl.editStudent = async (req, res) => {
  const student = {
    name: req.body.name,
    lastname: req.body.lastname,
    age: req.body.age,
    email: req.body.email,
    courseAssocciated: req.body.courseAssocciated,
  };

  console.log(student);

  await Student.findByIdAndUpdate(
    req.params.id,
    { $set: student },
    { new: true }
  );

  res.json({
    status: "Student Updated",
  });
};

studentCtrl.deleteStudent = async (req, res) => {
  await Student.findByIdAndRemove(req.params.id);
  res.json({
    status: "Student Deleted",
  });
};

module.exports = studentCtrl;
