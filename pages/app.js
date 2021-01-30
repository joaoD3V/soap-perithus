import { useRouter } from 'next/router';
import axios from 'axios';
import React, { useEffect } from 'react';
import SideBar from '../src/components/SideBar';
import BackgroundApp from '../src/components/BackgroundApp';
import Resumo from '../src/components/Resumo';

export default function App() {
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
        <Resumo id={id} />
      </BackgroundApp>
    </>
  );
}
