import React from "react";
import _ from "lodash";
import PropsType from "prop-types";

const Pagination = ({ onPageChange, itemsCount, pageSize, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  console.log(currentPage);
  const pages = _.range(1, pageCount + 1);
  if (pageCount === 1) return null;

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={"page-item " + (page === currentPage ? "active" : "")}
            key={page}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  onPageChange: PropsType.func.isRequired,
  itemsCount: PropsType.number.isRequired,
  pageSize: PropsType.number.isRequired,
  currentPage: PropsType.number.isRequired
};

export default Pagination;
