const express = require("express");
const morgan = require("morgan");
const app = express();
const session = require("express-session");
const cors = require("cors");
const flash = require("connect-flash");
const studentRoutes = require("./routes/student.routes");
const courseRoutes = require("./routes/course.routes");
const userRoutes = require("./routes/user.routes");
const jwt = require("jsonwebtoken");
const path = require('path');

// Database
require("./database");

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cors());
app.use(flash());

// Routes
app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/users", userRoutes);

// Statics Files
app.use(express.static(path.join(__dirname,'../client/dist')))

// Server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
