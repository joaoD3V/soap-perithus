import { useRouter } from 'next/router';
import React from 'react';
import SideBar from '../src/components/SideBar';
import BackgroundApp from '../src/components/BackgroundApp';
import RegistroSabonetes from '../src/components/RegistroSabonetes';

export default function App() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <BackgroundApp>
        <SideBar name={name} router={router} />
        <RegistroSabonetes router={router} />
      </BackgroundApp>
    </>
  );
}
