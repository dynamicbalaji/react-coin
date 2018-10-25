import React from 'react';
import './Pagination.css';

const Pagination = () => {
    return (
        <div className="Pagination">
            <button className="Pagination-button">
            &larr;
            </button>
            <button className="Pagination-button">
            &garr;
            </button>
        </div>
    );
};

export default Pagination;