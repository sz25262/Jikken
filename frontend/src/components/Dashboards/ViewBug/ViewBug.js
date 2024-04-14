import React, { useState, useEffect } from 'react';
import styles from './ViewBugs.module.css';  // Import the CSS module

const ViewBugs = () => {
    const [bugs, setBugs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    const fetchData = async (page) => {
        // Simulation for demonstration
        const data = [
            { bugName: 'Bug 1', bugType: 'Type 1', currentStatus: 'Open', assignee: 'User A' },
            { bugName: 'Bug 2', bugType: 'Type 2', currentStatus: 'Closed', assignee: 'User B' },
            { bugName: 'Bug 3', bugType: 'Type 3', currentStatus: 'Open', assignee: 'User C' },
        ];

        setBugs(data);
        setTotalPages(5); // Simulated total pages
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>View Bugs</h2>
            <div className={styles.bugsList}>
                {bugs.map((bug, index) => (
                    <div key={index} className={styles.bugCard}>
                        <p><strong>Bug Name:</strong> {bug.bugName}</p>
                        <p><strong>Bug Type:</strong> {bug.bugType}</p>
                        <p><strong>Current Status:</strong> {bug.currentStatus}</p>
                        <p><strong>Assignee:</strong> {bug.assignee}</p>
                        <button className={styles.button}>Change Assignee</button>
                    </div>
                ))}
            </div>
            <div className={styles.pagination}>
                <button onClick={handlePrevPage} disabled={currentPage === 1} className={styles.button}>Previous</button>
                <span className={styles.pageNumber}>{currentPage} / {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages} className={styles.button}>Next</button>
            </div>
        </div>
    );
};

export default ViewBugs;
