import { useRouter } from 'next/router';
import React from 'react';
import BackgroundApp from '../src/components/BackgroundApp';
import usersDB from '../users.json';
import SideBar from '../src/components/SideBar';
import Sabonetes from '../src/components/Sabonetes';

export default function Register() {
  const router = useRouter();
  const { id } = router.query;

  const { users } = usersDB;
  const userIndex = users.findIndex(user => user.id === id);
  const user = users[userIndex];
  const { name } = user;

  return (
    <>
      <BackgroundApp>
        <SideBar name={name} router={router} id={id} index={userIndex} />
        <Sabonetes id={id} />
      </BackgroundApp>
    </>
  );
}
