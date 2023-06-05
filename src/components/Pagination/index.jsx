import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

export const Pagination = ({ onChangePage, currentPage, info }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={info?.pages}
      forcePage={currentPage === 1 ? 0 : currentPage - 1}
    />
  );
};
