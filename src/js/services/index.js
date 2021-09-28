import axios from 'axios';
import { API_LOCATION, API_TOKEN, IMAGE_PATH } from './config';

export async function getData(query) {
  const {
    data: { results },
  } = await axios.get(`${API_LOCATION}/search/movie`, {
    params: {
      api_key: API_TOKEN,
      query,
      page: 1,
    },
  });

  return results.map((record) => ({
    image: record.backdrop_path
      ? `${IMAGE_PATH}${record.backdrop_path}`
      : 'https://source.unsplash.com/M5DRKOFiv-o',
    id: record.id,
    title: record.title,
    release: record.release_date,
    vote: {
      average: record.vote_average,
      count: record.vote_count,
    },
    overview: record.overview,
    isAdult: record.adult,
  }));
}
