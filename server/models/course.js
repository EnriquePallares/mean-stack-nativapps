const { model, Schema } = require('mongoose');

const courseSchema = new Schema({
    name: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    dateIni: { type: String, required: true },
    dateFin: { type: String, required: true }
});

module.exports = model('Course', courseSchema);