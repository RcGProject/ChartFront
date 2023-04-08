import axios from 'axios';

// instância do axios.
const request = axios.create({
  baseURL: 'https://api.chartproject.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default request;
