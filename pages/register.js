import { useRouter } from 'next/router';
import React from 'react';
import SideBar from '../src/components/SideBar';
import BackgroundApp from '../src/components/BackgroundApp';
import RegistroSabonetes from '../src/components/RegistroSabonetes';
import usersDB from '../users.json';

export default function Register() {
  const router = useRouter();
  const { id } = router.query;

  const { users } = usersDB;
  const userIndex = users.findIndex(user => user.id === id);
  const user = users[userIndex];
  const nameUser = user.name;

  return (
    <>
      <BackgroundApp>
        <SideBar id={id} name={nameUser} router={router} />
        <RegistroSabonetes router={router} id={id} index={userIndex} />
      </BackgroundApp>
    </>
  );
}
