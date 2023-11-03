import axios from 'axios';

export const passwordApi = {
  resetPassword(code: string, newPassword: string) {
    const body = {
      code,
      password: newPassword,
    };

    return axios.put('/password/reset', body);
  },
};
