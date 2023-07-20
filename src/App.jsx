import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import imageStore from "./store/imagesStore";
import "./index.css";
import imagesStore from "./store/imagesStore";
import ImageItem from "./API/components/imageItem";

const App = observer(() => {
  useEffect(() => {
    imageStore.getImagesAction();
  }, []);

  const images = imagesStore.allImages;

  return (
    <div className="max-w-[1440px] mx-auto px-24">
      {images && (
        <div className="flex w-full">
          {images.map((img) => (
            <ImageItem img={img} key={img.id} />
          ))}
        </div>
      )}
    </div>
  );
});

export default App;
