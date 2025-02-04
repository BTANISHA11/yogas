const mongoose = require('mongoose');

const BatchSchema = new mongoose.Schema({
    time: { type: String, required: true }
});

module.exports = mongoose.model('Batch', BatchSchema);