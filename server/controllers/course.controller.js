const Course = require("../models/course");
const courseCtrl = {};

courseCtrl.getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

courseCtrl.createCourse = async (req, res) => {
  const {
    name: name,
    startTime: startTime,
    endTime: endTime,
    dateIni: dateIni,
    dateFin: dateFin,
  } = req.body;

  const newCourse = new Course({ name, startTime, endTime, dateIni, dateFin });
  await newCourse.save();

  res.json({
    status: "Course Saved",
  });
};

courseCtrl.getCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);
  res.json(course);
};

courseCtrl.editCourse = async (req, res) => {
  const course = {
    name: req.body.name,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    dateIni: req.body.dateIni,
    dateFin: req.body.dateFin,
  };

  await Course.findByIdAndUpdate(
    req.params.id,
    { $set: course },
    { new: true }
  );

  res.json({
    status: "Course Updated",
  });
};

courseCtrl.deleteCourse = async (req, res) => {
  await Course.findByIdAndRemove(req.params.id);
  res.json({
    status: "Course Deleted",
  });
};

module.exports = courseCtrl;
