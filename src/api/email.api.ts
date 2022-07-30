import axios from 'axios';

export const emailApi = {
  confirmEmail(token: string) {
    const body = {
      token: token,
    };
    return axios.post('/email-confirmation', body);
  },
};
