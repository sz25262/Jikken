import React, { useState } from 'react';
import Modal from 'react-modal';
import CreateBug from './CreateBug';
import styles from './ViewBugs.module.css';

Modal.setAppElement('#root');

const ViewBugs = () => {
    const [bugs, setBugs] = useState([
        {
            "id": 1,
            "bugName": "Unresponsive Click Events on Buttons",
            "bugType": "UI/UX Issue",
            "currentStatus": "Open",
            "assignee": "Dev Team Lead",
            "expectedOutput": "All buttons should trigger actions when clicked.",
            "currentOutput": "Submit button unresponsive on mobile devices.",
            "comments": "Check touch event handlers or CSS issues.",
            "image": "url_to_image_1"
        },
        {
            "id": 2,
            "bugName": "Data Fetching Error on Dashboard",
            "bugType": "API Integration Issue",
            "currentStatus": "In Progress",
            "assignee": "Backend Developer",
            "expectedOutput": "Dashboard displays latest data.",
            "currentOutput": "Shows 'Failed to fetch data' intermittently.",
            "comments": "Possible API timeout during peak times.",
            "image": "url_to_image_2"
        },
        {
            "id": 3,
            "bugName": "Memory Leak in Component",
            "bugType": "Performance Issue",
            "currentStatus": "Open",
            "assignee": "Performance Engineer",
            "expectedOutput": "No memory leaks.",
            "currentOutput": "UserProfile component causes memory leaks.",
            "comments": "Check for uncleared intervals and subscriptions.",
            "image": "url_to_image_3"
        },
        {
            "id": 4,
            "bugName": "Inconsistent Styling Across Browsers",
            "bugType": "Cross-Browser Compatibility",
            "currentStatus": "Open",
            "assignee": "Frontend Developer",
            "expectedOutput": "Consistent layout across browsers.",
            "currentOutput": "Navigation bar breaks on Firefox.",
            "comments": "Possible CSS Flexbox issues.",
            "image": "url_to_image_4"
        }
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editableBug, setEditableBug] = useState(null);

    const handleCreateOrEditBug = (bugData, id) => {
        setIsModalOpen(false);
        setBugs(prevBugs => prevBugs.map(bug => bug.id === id ? { ...bug, ...bugData } : bug));
    };

    const openEditModal = (bug) => {
        setEditableBug(bug);
        setIsModalOpen(true);
    };

    const deleteBug = (id) => {
        setBugs(prevBugs => prevBugs.filter(bug => bug.id !== id));
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>View Bugs</h2>
            <div className={styles.buttonContainer}>
                <button onClick={() => { setEditableBug(null); setIsModalOpen(true); }} className={styles.button}>Create New Bug</button>
            </div>
            <div className={styles.bugsList}>
                {bugs.map((bug) => (
                    <div key={bug.id} className={styles.bugCard}>
                        <p><strong>Bug Name:</strong> {bug.bugName}</p>
                        <p><strong>Bug Type:</strong> {bug.bugType}</p>
                        <p><strong>Current Status:</strong> {bug.currentStatus}</p>
                        <p><strong>Assignee:</strong> {bug.assignee}</p>
                        <p><strong>Comments:</strong> {bug.comments}</p>
                        {bug.image && <img src={bug.image} alt="Bug" className={styles.bugImage} />}
                        <button onClick={() => openEditModal(bug)} className={styles.button}>Edit</button>
                        <button onClick={() => deleteBug(bug.id)} className={styles.button}>Delete</button>
                    </div>
                ))}
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                <CreateBug onBugCreated={handleCreateOrEditBug} closeModal={() => setIsModalOpen(false)} bug={editableBug} />
            </Modal>
        </div>
    );
};

export default ViewBugs;
