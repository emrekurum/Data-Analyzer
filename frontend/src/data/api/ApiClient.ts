import axios, { AxiosInstance, AxiosError } from 'axios';
import Constants from 'expo-constants';

export class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL?: string) {
    // Try to get API URL from environment variable, then from expo config, then default
    const envApiUrl = process.env.API_URL;
    const configApiUrl = Constants.expoConfig?.extra?.apiUrl;
    const apiUrl = baseURL || envApiUrl || configApiUrl || 'http://localhost:5000/api';
    
    this.client = axios.create({
      baseURL: apiUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        // Add auth token or other headers here if needed
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error: AxiosError) => {
        if (error.response) {
          // Server responded with error status
          throw new Error(`API Error: ${error.response.status} - ${error.message}`);
        } else if (error.request) {
          // Request made but no response received
          throw new Error('Network Error: Please check your connection');
        } else {
          // Something else happened
          throw new Error(`Error: ${error.message}`);
        }
      }
    );
  }

  async get<T>(url: string): Promise<T> {
    return this.client.get<T>(url);
  }

  async post<T>(url: string, data?: any): Promise<T> {
    return this.client.post<T>(url, data);
  }

  async put<T>(url: string, data?: any): Promise<T> {
    return this.client.put<T>(url, data);
  }

  async delete<T>(url: string): Promise<T> {
    return this.client.delete<T>(url);
  }
}

