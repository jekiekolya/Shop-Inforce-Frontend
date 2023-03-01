import axios from 'axios';

const baseURL = 'https://inforce-shop.onrender.com/api/';

export const axiosBaseUrl = axios.create({ baseURL });
