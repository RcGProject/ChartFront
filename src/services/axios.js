import axios from 'axios';

// instância do axios.
const request = axios.create({
  baseURL: 'https://quickchart.io/chart',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default request;
