import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BatchSelector from './BatchSelector';
import './AdmissionForm.css'; 

const AdmissionForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [batch, setBatch] = useState('');
    const [batches, setBatches] = useState([]);

    useEffect(() => {
        const fetchBatches = async () => {
            const response = await axios.get('http://localhost:5000/api/batches');
            setBatches(response.data);
        };
        fetchBatches();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userResponse = await axios.post('http://localhost:5000/api/users', { name, age, email });
            const enrollmentResponse = await axios.post('http://localhost:5000/api/enrollments', {
                userId: userResponse.data._id,
                batchId: batch,
                month: new Date().toLocaleString('default', { month: 'long' }),
                year: new Date().getFullYear()
            });
            alert('Enrollment successful!');
            // Reset form fields
            setName('');
            setAge('');
            setEmail('');
            setBatch('');
        } catch (error) {
            alert('Error: ' + error.response.data.message);
        }
    };

    return (
        <div className="form-container">
            <h2>Yoga Class Admission Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <BatchSelector batches={batches} setBatch={setBatch} />
                <button type="submit" className="submit-button">Enroll</button>
            </form>
        </div>
    );
};

export default AdmissionForm;