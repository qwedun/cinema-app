import axios, { CreateAxiosDefaults } from 'axios';

const axiosConfig: CreateAxiosDefaults = {
    baseURL: process.env.API_URL,
    headers: {
        'X-API-KEY': process.env.API_KEY,
        'Content-Type': 'application/json'
    },
    paramsSerializer: {
        indexes: null,
    }
};

export const client = axios.create(axiosConfig);