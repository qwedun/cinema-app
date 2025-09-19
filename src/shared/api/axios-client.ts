import axios, { CreateAxiosDefaults } from 'axios';

const axiosConfig: CreateAxiosDefaults = {
    baseURL: 'https://api.kinopoisk.dev/v1.4',
    headers: {
        'X-API-KEY': '3BD3C6M-W9XMB8G-G3RTXPN-1NPY31H', //отказался от process.env, т.к не разобрался с конфигурацией .env файлов на Vercel
        'Content-Type': 'application/json'
    },
    paramsSerializer: {
        indexes: null,
    }
};

export const client = axios.create(axiosConfig);
