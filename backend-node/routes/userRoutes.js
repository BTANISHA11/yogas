const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
    const { name, age, email } = req.body;
    if (age < 18 || age > 65) {
        return res.status(400).json({ message: 'Age must be between 18 and 65' });
    }
    try {
        const newUser  = new User({ name, age, email });
        await newUser .save();
        res.status(201).json(newUser );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;