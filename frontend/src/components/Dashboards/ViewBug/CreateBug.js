import React, { useState, useEffect } from 'react';
import styles from './CreateBug.module.css';

const CreateBug = ({ onBugCreated, closeModal, bug }) => {
    const [bugName, setBugName] = useState('');
    const [bugType, setBugType] = useState('');
    const [expectedOutput, setExpectedOutput] = useState('');
    const [currentOutput, setCurrentOutput] = useState('');
    const [assignee, setAssignee] = useState('');
    const [comments, setComments] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (bug) {
            setBugName(bug.bugName);
            setBugType(bug.bugType);
            setExpectedOutput(bug.expectedOutput);
            setCurrentOutput(bug.currentOutput);
            setAssignee(bug.assignee);
            setComments(bug.comments || '');
            setImage(bug.image || null);
        }
    }, [bug]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('bugName', bugName);
        formData.append('bugType', bugType);
        formData.append('expectedOutput', expectedOutput);
        formData.append('currentOutput', currentOutput);
        formData.append('assignee', assignee);
        formData.append('comments', comments);
        if (image) {
            formData.append('image', image);
        }
        onBugCreated(formData, bug ? bug.id : null);
        closeModal();
    };

    return (
        <div className={styles.container}>
            <button onClick={closeModal} className={styles.closeButton}>&times;</button>
            <h2>{bug ? "Edit Bug" : "Create Bug"}</h2>
            <form onSubmit={handleSubmit} className={styles.form} encType="multipart/form-data">
                <label className={styles.label}>Bug Name:</label>
                <input type="text" value={bugName} onChange={(e) => setBugName(e.target.value)} required className={styles.input} />
                <label className={styles.label}>Bug Type:</label>
                <input type="text" value={bugType} onChange={(e) => setBugType(e.target.value)} required className={styles.input} />
                <label className={styles.label}>Expected Output:</label>
                <input type="text" value={expectedOutput} onChange={(e) => setExpectedOutput(e.target.value)} className={styles.input} />
                <label className={styles.label}>Current Output:</label>
                <input type="text" value={currentOutput} onChange={(e) => setCurrentOutput(e.target.value)} className={styles.input} />
                <label className={styles.label}>Assignee:</label>
                <input type="text" value={assignee} onChange={(e) => setAssignee(e.target.value)} className={styles.input} />
                <label className={styles.label}>Comments:</label>
                <textarea value={comments} onChange={(e) => setComments(e.target.value)} className={styles.input}></textarea>
                <label className={styles.label}>Upload Image:</label>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} className={styles.input} />
                <button type="submit" className={styles.button}>{bug ? "Update Bug" : "Create Bug"}</button>
            </form>
        </div>
    );
};

export default CreateBug;
