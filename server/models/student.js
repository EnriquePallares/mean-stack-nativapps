const { model, Schema } = require('mongoose');

const studentSchema = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    courseAssocciated: { type: Array, required: false }
});

module.exports = model('Student', studentSchema);