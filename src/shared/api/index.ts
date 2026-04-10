import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';

const DEFAULT_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_Sem0LkMO4pHvIgGwyBsLLXruxD7nM65lsxBnA3xQxnH8s1A3BxSCwLhBNSpIQyY6';

const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: DEFAULT_URL,
    withCredentials: false,
  });

  instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    config.headers['x-api-key'] = API_KEY;

    return config;
  });

  return instance;
};

const BACKEND_HTTPS_SERVICES = createAxiosInstance();

export { BACKEND_HTTPS_SERVICES };
