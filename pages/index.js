import styled from 'styled-components';
import { useRouter } from 'next/router';
import React from 'react';
import Logo from '../src/components/Logo';
import FormLogin from '../src/components/FormLogin';
import InputLogin from '../src/components/InputLogin';
import LoginButton from '../src/components/LoginButton';
import usersDB from '../users.json';

const CriarConta = styled.h4`
  margin-top: 0;
  font-size: 15px;
  font-weight: 300;

  button {
    font-weight: 500;
    cursor: pointer;
    background-color: white;
    border: none;
    font-size: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <>
      <Logo>Soap</Logo>
      <FormLogin
        onSubmit={eventInfo => {
          const { users } = usersDB;
          const userIndex = users.findIndex(
            user => user.email === email && user.password === password
          );
          if (userIndex >= 0) {
            eventInfo.preventDefault();
            router.push(`/app?name=${users[userIndex].name}`);
          } else {
            alert('Usuário inexistente! Por favor crie uma conta');
          }
        }}
      >
        <InputLogin
          onChange={eventInfo => {
            setEmail(eventInfo.target.value);
          }}
          placeholder="Digite o seu e-mail..."
          type="email"
        />
        <InputLogin
          onChange={eventInfo => {
            setPassword(eventInfo.target.value);
          }}
          placeholder="Digite a sua senha..."
          type="password"
        />
        <CriarConta>
          Não possui uma conta?
          <button
            type="button"
            onClick={eventInfo => {
              eventInfo.preventDefault();
              router.push('/create');
            }}
          >
            {' '}
            Clique aqui
          </button>
        </CriarConta>
        <LoginButton
          type="submit"
          disabled={email.length === 0 || password.length === 0}
        >
          Entrar
        </LoginButton>
      </FormLogin>
    </>
  );
}
