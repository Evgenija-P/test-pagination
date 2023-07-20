import axios from "axios";

const page = 1;
const perPage = 20;
const nextQuery = "cat";

export const getImage = async () => {
  const url = `https://pixabay.com/api/`;
  const API_KEY = `key=29432031-54944c319385602ed128077f3`;
  const urlOptions = `image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

  const response = await axios.get(`${url}?${API_KEY}&q=${nextQuery}&${urlOptions}`);
  //   console.log("api getImage", response.data);
  return response.data;
};
