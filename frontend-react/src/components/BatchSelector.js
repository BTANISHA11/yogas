import React from 'react';
import './BatchSelector.css'; 
const BatchSelector = ({ batches, setBatch }) => {
    return (
        <div className="form-group">
            <label>Choose Batch:</label>
            <select onChange={(e) => setBatch(e.target.value)} required>
                <option value="">Select a batch</option>
                {batches.map((batch) => (
                    <option key={batch._id} value={batch._id}>{batch.time}</option>
                ))}
            </select>
        </div>
    );
};

export default BatchSelector;