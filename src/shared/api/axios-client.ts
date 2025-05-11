import axios, { CreateAxiosDefaults } from 'axios';

const axiosConfig: CreateAxiosDefaults = {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
        'Content-Type': 'application/json'
    },
    paramsSerializer: {
        indexes: null,
    }
};

export const client = axios.create(axiosConfig);