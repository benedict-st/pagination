import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

export default function Рagination({
    itemCount,
    pageSize,
    currentPage,
    onPageChange
}) {
    const pageCount = Math.ceil(itemCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        className={
                            "page-item" +
                            (page === currentPage ? "  active" : "")
                        }
                        key={"page_" + page}
                    >
                        <a
                            className="page-link"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

Рagination.prototype = {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.func.isRequired,
    onPageChange: PropTypes.number.isRequired
};
