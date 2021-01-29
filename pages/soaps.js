import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import axios from 'axios';
import BackgroundApp from '../src/components/BackgroundApp';
import SideBar from '../src/components/SideBar';
import Sabonetes from '../src/components/Sabonetes';

export default function Register() {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = React.useState('');

  useEffect(() => {
    axios.get('/api/users').then(response => {
      const { users } = response.data;
      const userIndex = users.findIndex(user => user.id === id);
      const user = users[userIndex];
      setName(user.name);
    });
  }, []);

  return (
    <>
      <BackgroundApp>
        <SideBar router={router} id={id} name={name} />
        <Sabonetes id={id} />
      </BackgroundApp>
    </>
  );
}
