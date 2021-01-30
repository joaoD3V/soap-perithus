import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import axios from 'axios';
import SideBar from '../src/components/SideBar';
import BackgroundApp from '../src/components/BackgroundApp';
import RegistroSabonetes from '../src/components/RegistroSabonetes';

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
        <SideBar id={id} router={router} name={name} />
        <RegistroSabonetes router={router} id={id} />
      </BackgroundApp>
    </>
  );
}
