import axios from 'axios'
import { getToken } from './auth';

const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

if (getToken()) {
    http.defaults.headers['x-auth-token'] = getToken();
}
export default http
