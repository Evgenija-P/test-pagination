import Proptypes from "prop-types";

const ImageItem = ({ img }) => {
  return (
    <div className="w-[100px]">
      <img src={img.previewURL} alt="" /> <p>{img.tags}</p>
    </div>
  );
};

ImageItem.propTypes = {
  img: Proptypes.object,
};

export default ImageItem;
