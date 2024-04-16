import React, { useState, useEffect } from 'react';
import styles from './CreateBug.module.css';

const CreateBug = ({ onBugCreated, closeModal, bug }) => {
    const [bugName, setBugName] = useState('');
    const [bugType, setBugType] = useState('');
    const [expectedOutput, setExpectedOutput] = useState('');
    const [currentOutput, setCurrentOutput] = useState('');
    const [assignee, setAssignee] = useState('');
    const [comments, setComments] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        if (bug) {
            setBugName(bug.bugName);
            setBugType(bug.bugType);
            setExpectedOutput(bug.expectedOutput);
            setCurrentOutput(bug.currentOutput);
            setAssignee(bug.assignee);
            setComments(bug.comments);
            setImage(bug.image);
        } else {
            setBugName('');
            setBugType('');
            setExpectedOutput('');
            setCurrentOutput('');
            setAssignee('');
            setComments('');
            setImage('');
        }
    }, [bug]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedBugData = {
            bugName,
            bugType,
            expectedOutput,
            currentOutput,
            assignee,
            comments,
            image
        };
        onBugCreated(updatedBugData, bug ? bug.id : null);
        closeModal();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Convert image file to base64 string, if necessary, or just prepare to upload
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); // This sets the base64 string to state
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={styles.container}>
            <button onClick={closeModal} className={styles.closeButton}>&times;</button>
            <h2>{bug ? "Edit Bug" : "Create Bug"}</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label className={styles.label}>Bug Name:</label>
                <input type="text" value={bugName} onChange={(e) => setBugName(e.target.value)} required className={styles.input} />
                <label className={styles.label}>Bug Type:</label><input type="text" value={bugType} onChange={(e) => setBugType(e.target.value)} required className={styles.input} />
                <label className={styles.label}>Expected Output:</label>
                <input type="text" value={expectedOutput} onChange={(e) => setExpectedOutput(e.target.value)} className={styles.input} />
                <label className={styles.label}>Current Output:</label>
                <input type="text" value={currentOutput} onChange={(e) => setCurrentOutput(e.target.value)} className={styles.input} />
                <label className={styles.label}>Assignee:</label>
                <input type="text" value={assignee} onChange={(e) => setAssignee(e.target.value)} className={styles.input} />
                <label className={styles.label}>Comments:</label>
                <textarea value={comments} onChange={(e) => setComments(e.target.value)} className={styles.input}></textarea>
                <label className={styles.label}>Upload Image:</label>
                <input type="file" onChange={(e) => handleImageChange(e)} className={styles.input} />
                <button type="submit" className={styles.button}>{bug ? "Update Bug" : "Create Bug"}</button>
            </form>
        </div>
    );
};

export default CreateBug;
