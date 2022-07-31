import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api.client';
import Loader from 'react-spinners/HashLoader';
import '../assets/Style.css';

export const PasswordReset: FC = () => {
  const { code } = useParams();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [inputError, setInputError] = useState<string | null>(null);

  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  useEffect(() => console.log(code), [code]);

  async function resetPassword() {
    if (!validateLength()) {
      setInputError('Password should be 8 characters or longer.');
      return console.log('Password should be 8 characters or longer.');
    }

    if (!validateMatch()) {
      setInputError('Password do not match.');
      return console.log('Password do not match.');
    }

    if (code && newPassword.length >= 8) {
      setInputError(null);
      setIsLoading(true);
      try {
        const response = await api.password.resetPassword(code, newPassword);

        setMessage(response.data.message);
        setIsLoading(false);
      } catch (err: any) {
        setMessage(err.response.data.message);
        setIsLoading(false);
      }
    }
  }

  function onChange(e: any) {
    setNewPassword(e.target.value);
  }

  function onChangeNewPassConf(e: any) {
    setConfirmNewPassword(e.target.value);
  }

  function validateLength(): boolean {
    if (newPassword.length < 8) {
      return false;
    } else {
      return true;
    }
  }

  function validateMatch(): boolean {
    if (newPassword !== confirmNewPassword) {
      return false;
    } else {
      return true;
    }
  }

  if (isLoading) {
    return (
      <div className="home">
        <Loader size={150} color={'white'} loading={true} />
      </div>
    );
  }

  if (message) {
    return (
      <div className="home">
        <h1 className="title">{message}</h1>
      </div>
    );
  }

  return (
    <div className="home">
      <h1 className="label">New Password</h1>
      <input
        type={passwordVisible ? 'text' : 'password'}
        value={newPassword}
        onChange={onChange}
      />
      <h1 className="label">Confirm new password</h1>
      <input
        type={passwordVisible ? 'text' : 'password'}
        value={confirmNewPassword}
        onChange={onChangeNewPassConf}
      />
      {inputError ? <h2 className="error">{inputError}</h2> : <div></div>}
      <button onClick={() => setPasswordVisible(!passwordVisible)}>{`${
        passwordVisible ? 'Hide' : 'Show'
      } password`}</button>
      <button onClick={() => resetPassword()}>Submit</button>
    </div>
  );
};
