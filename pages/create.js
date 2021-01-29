import styled from 'styled-components';
import React from 'react';
import { useRouter } from 'next/router';
import { uuid } from 'uuidv4';
import axios from 'axios';
import Logo from '../src/components/Logo';
import InputLogin from '../src/components/InputLogin';
import LoginButton from '../src/components/LoginButton';

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

  async function handleCreateUser(eventInfo) {
    const id = uuid();
    const response = await axios.post('/api/create', {
      id,
      name,
      email,
      password,
      soaps: [],
    });
    if (response) {
      eventInfo.preventDefault();
      router.push(`/app?id=${id}`);
    } else {
      alert('Erro ao cadastrar usuário!');
    }
  }
  return (
    <>
      <Logo>Soap</Logo>
      <Information>Seja um de nossos distribuidores,</Information>
      <Information>Cadastre-se agora mesmo!</Information>
      <FormCreate
        onSubmit={eventInfo => {
          eventInfo.preventDefault();
          handleCreateUser(eventInfo);
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
          // onClick={eventInfo => {
          //   eventInfo.preventDefault();
          //   router.push('/app');
          // }}
          onKeyPress={eventInfo => {
            if (eventInfo.which === 13 || eventInfo.keyCode === 13) {
              return false;
            }
            return true;
          }}
        >
          Cadastrar
        </LoginButton>
      </FormCreate>
    </>
  );
}
