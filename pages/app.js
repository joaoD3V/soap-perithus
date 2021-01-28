import { useRouter } from 'next/router';
import styled from 'styled-components';
import SideBar from '../src/components/SideBar';
import BackgroundApp from '../src/components/BackgroundApp';
import usersDB from '../users.json';

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

  const { users } = usersDB;
  const userIndex = users.findIndex(user => user.id === id);
  const user = users[userIndex];
  const nameUser = user.name;

  return (
    <>
      <BackgroundApp>
        <SideBar name={nameUser} router={router} id={id} />
      </BackgroundApp>
    </>
  );
}
