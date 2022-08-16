import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api.client';
import Loader from 'react-spinners/HashLoader';
import '../assets/Style.css';

export const EmailConfirm: FC = () => {
  const { token } = useParams();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    async function confirmEmail() {
      if (token) {
        try {
          const response = await api.email.confirmEmail(token);

          setMessage(response.data.message);
          setIsLoading(false);
        } catch (err: any) {
          setMessage(err.response.data.message);
          setIsLoading(false);
        }
      }
    }

    confirmEmail();
  }, [token]);

  if (isLoading) {
    return (
      <div className="home">
        <Loader size={150} color={'white'} loading={true} />
      </div>
    );
  }

  return (
    <div className="home">
      <h1 className="title">{message}</h1>
    </div>
  );
};
