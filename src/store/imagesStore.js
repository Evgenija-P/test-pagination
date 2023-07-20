import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { getImage } from "../API/api";

class Images {
  allImages = [];

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, { name: "images", properties: ["allImages"] });
  }

  getImagesAction = async () => {
    const result = await getImage();

    this.allImages = result.hits;
    // console.log("this.allImages", this.allImages);
  };
}
export default new Images();
