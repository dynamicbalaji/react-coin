import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
    const { page, totalPages } = props;
    return (
        <div className="Pagination">
            <button className="Pagination-button">
            &larr;
            </button>
            <span className="Pagination-info">
            Page <b>{page}</b> of <b>{totalPages}</b>
            </span>
            <button className="Pagination-button">
            &rarr;
            </button>
        </div>
    );
};

export default Pagination;