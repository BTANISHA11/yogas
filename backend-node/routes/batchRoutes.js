// routes/batchRoutes.js
const express = require('express');
const router = express.Router();
const Batch = require('../models/Batch');

const batches = ['6-7AM', '7-8AM', '8-9AM', '5-6PM'];

batches.forEach(batch => {
    const newBatch = new Batch({ time: batch });
    newBatch.save();
});

router.get('/', async (req, res) => {
    const allBatches = await Batch.find();
    res.json(allBatches);
});

module.exports = router;