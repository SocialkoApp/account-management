import axios from 'axios';
import { emailApi } from './email.api';
import { passwordApi } from './password.api';

axios.defaults.baseURL =
  process.env.REACT_APP_API_URL || 'http://localhost:3000';

const api = {
  email: emailApi,
  password: passwordApi,
};

export default api;
