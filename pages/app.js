import { useRouter } from 'next/router';
import styled from 'styled-components';
import axios from 'axios';
import React, { useEffect } from 'react';
import SideBar from '../src/components/SideBar';
import BackgroundApp from '../src/components/BackgroundApp';

export const DivLucroAtual = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LucroAtual = styled.h1`
  color: #000;
  font-size: 50px;
  font-weight: 400;
`;

export const ResultadoLucroAtual = styled.div`
  background-color: #0008;
  width: 200px;
  height: 200px;
`;

export default function App() {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = React.useState({ name: '' });

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
      </BackgroundApp>
    </>
  );
}
