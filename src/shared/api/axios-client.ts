import axios, { CreateAxiosDefaults } from 'axios';

const axiosConfig: CreateAxiosDefaults = {
    baseURL: 'https://api.kinopoisk.dev/v1.4',
    headers: {
        'X-API-KEY': '00FE019-60D4RWK-H1P5CK1-5SR3BWD', //отказался от process.env, т.к не разобрался с конфигурацией .env файлов на Vercel
        'Content-Type': 'application/json'
    },
    paramsSerializer: {
        indexes: null,
    }
};

export const client = axios.create(axiosConfig);