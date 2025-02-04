const mongoose = require('mongoose');

const EnrollmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', required: true },
    batchId: { type: mongoose.Schema.Types.ObjectId, ref: 'Batch', required: true },
    month: { type: String, required: true },
    year: { type: Number, required: true }
});

module.exports = mongoose.model('Enrollment', EnrollmentSchema);