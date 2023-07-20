import { useState } from "react";
import ReactPaginate from "react-paginate";
import PaginationItem from "./paginationItems";
import Proptypes from "prop-types";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Paginated = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="flex">
      <PaginationItem currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="flex"
      />
    </div>
  );
};

Paginated.propTypes = {
  itemsPerPage: Proptypes.number,
};

export default Paginated;
