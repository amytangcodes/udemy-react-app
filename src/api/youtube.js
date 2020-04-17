import axios from 'axios';

const KEY = 'AIzaSyDacXP9knVFt5UF_zRU7b9OwKwseO8HM6Q';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: `${KEY}`
  }
});