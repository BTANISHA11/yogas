const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');

router.post('/', async (req, res) => {
    const { userId, batchId, month, year } = req.body;
    try {
        const newEnrollment = new Enrollment({ userId, batchId, month, year });
        await newEnrollment.save();
        res.status(201).json(newEnrollment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;