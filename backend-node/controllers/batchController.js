const Batch = require("../models/Batch");

exports.getBatches = async (req, res) => {
    try {
        const batches = await Batch.find();
        res.json(batches);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
