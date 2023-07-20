import Proptypes from "prop-types";

const ImageItem = ({ img }) => {
  return (
    <div className="w-full h-[120px]">
      <img src={img.previewURL} alt="" className="w-full h-[120px] object-cover hover:scale-110" />
    </div>
  );
};

ImageItem.propTypes = {
  img: Proptypes.object,
};

export default ImageItem;
