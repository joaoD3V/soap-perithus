import styled from 'styled-components';
import React from 'react';
import { useRouter } from 'next/router';
import Logo from '../src/components/Logo';
import InputLogin from '../src/components/InputLogin';
import LoginButton from '../src/components/LoginButton';
import usersDB from '../users.json';

const Information = styled.h2`
  margin-top: 0;
  font-size: 30px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
`;

const FormCreate = styled.form`
  margin-top: 30px;
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Create() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <>
      <Logo>Soap</Logo>
      <Information>Seja um de nossos distribuidores,</Information>
      <Information>Cadastre-se agora mesmo!</Information>
      <FormCreate
        onSubmit={eventInfo => {
          const { users } = usersDB;
          users.push({ name, email, password });
          console.log(users);
          eventInfo.preventDefault();
          router.push(`/app?name=${name}`);
        }}
      >
        <InputLogin
          onChange={eventInfo => {
            setName(eventInfo.target.value);
          }}
          placeholder="Digite o seu nome..."
        />
        <InputLogin
          onChange={eventInfo => {
            setEmail(eventInfo.target.value);
          }}
          placeholder="Digite o seu email..."
          type="email"
        />
        <InputLogin
          onChange={eventInfo => {
            setPassword(eventInfo.target.value);
          }}
          placeholder="Digite a sua senha..."
          type="password"
        />
        <LoginButton
          type="submit"
          disabled={
            name.length === 0 || email.length === 0 || password.length === 0
          }
        >
          Cadastrar
        </LoginButton>
      </FormCreate>
    </>
  );
}
