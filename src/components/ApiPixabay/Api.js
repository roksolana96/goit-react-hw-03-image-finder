
import axios from 'axios';

const API_KEY = '21612305-46cc4eea5f599b85b8ca50cca';
const BASE_URL = 'https://pixabay.com';

export const fetchImages = (query, page, perPage) => {
  return axios
    .get(
      `${BASE_URL}/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
    .then(response => response.data);
};


