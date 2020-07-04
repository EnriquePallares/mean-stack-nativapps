const mongoose = require("mongoose");
const URI = "mongodb://localhost/colapp";

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB is Connected"))
  .catch((err) => console.log(err));

module.exports = mongoose;
