import axios, { CreateAxiosDefaults } from 'axios';

const axiosConfig: CreateAxiosDefaults = {
    baseURL: 'https://api.kinopoisk.dev/v1.4',
    headers: {
        'X-API-KEY': 'M66TQTM-GH445ZH-QQEDYSW-79KW4TT', //отказался от process.env, т.к не разобрался с конфигурацией .env файлов на Vercel
        'Content-Type': 'application/json'
    },
    paramsSerializer: {
        indexes: null,
    }
};

export const client = axios.create(axiosConfig);