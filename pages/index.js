import styled from 'styled-components';
import { useRouter } from 'next/router';
import React from 'react';
import axios from 'axios';
import Logo from '../src/components/Logo';
import FormLogin from '../src/components/FormLogin';
import InputLogin from '../src/components/InputLogin';
import LoginButton from '../src/components/LoginButton';

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

  function handleUserID(event) {
    event.preventDefault();
    // eslint-disable-next-line consistent-return
    axios.get('/api/users').then(response => {
      const { users } = response.data;
      const userIndex = users.findIndex(
        user => user.email === email && user.password === password
      );
      if (userIndex >= 0) {
        const { id } = users[userIndex];
        router.push(`/app?id=${id}`);
      } else {
        alert('Usuário inexistente! Por favor crie uma conta');
      }
    });
  }

  return (
    <>
      <Logo>Soap</Logo>
      <FormLogin
        onSubmit={eventInfo => {
          eventInfo.preventDefault();
          handleUserID(eventInfo);
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
            onKeyPress={eventInfo => {
              if (eventInfo.which === 13 || eventInfo.keyCode === 13) {
                return false;
              }
              return true;
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
