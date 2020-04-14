import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID f7Ai5juTA6vfIYjMLfVE4lJ7PJyEBqqNuV-cQ_39Lw8'
  }
});