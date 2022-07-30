import { FC, useEffect, useState } from 'react';

export const PasswordReset: FC = () => {
  const [token, setToken] = useState<string>();

  useEffect(() => {
    console.log(window.location.href);
    setToken(window.location.href);
  }, []);

  return <></>;
};
