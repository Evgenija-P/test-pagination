import Proptypes from "prop-types";
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const PaginationItem = ({ currentItems }) => {
  return (
    <div className="flex">
      {currentItems &&
        currentItems.map((item) => (
          <div key={item}>
            <h3>{item}</h3>
          </div>
        ))}
    </div>
  );
};

PaginationItem.propTypes = {
  currentItems: Proptypes.array,
};

export default PaginationItem;
