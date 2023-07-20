import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import imagesStore from "../../store/imagesStore";
import "../../index.css";

import ImageItem from "./imageItem";

const ImageList = observer(() => {
  useEffect(() => {
    imagesStore.getImagesAction();
  }, []);

  const images = imagesStore.allImages;

  return (
    <div className="">
      {images && (
        <div className="grid grid-cols-6 gap-4">
          {images.map((img) => (
            <ImageItem img={img} key={img.id} />
          ))}
        </div>
      )}
    </div>
  );
});

export default ImageList;
