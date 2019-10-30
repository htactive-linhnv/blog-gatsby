import React from 'react';
import { Link } from 'gatsby'
const Paginate = (props) => {
    const {isFirst,isLast,prevPage,nextPage,numPages,currentPage} = props
    return (
        <>
            {!isFirst && (
                <Link to={prevPage} rel="prev">
                    ← Previous Page
                </Link>
            )}

            {Array.from({ length: numPages }, (_, i) => (
                <Link key={`pagination-number${i + 1}`} to={`blog/${i === 0 ? "" : i + 1}`}>
                    {" "}{i + 1} {" "}
                </Link>
            ))}

            {!isLast && (
                <Link to={nextPage} rel="next">
                    Next Page →
                </Link>
            )}
        </>
    );
};

export default Paginate;