import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import React from 'react';
import { uuid } from 'uuidv4';
import BackgroundInformation from '../BackgroundInformation';
import TituloInformation from '../TituloInformation';

const Registro = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  form {
    display: flex;
    flex-direction: row;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
  }

  h3 {
    font-size: 25px;
    font-weight: 400;
    text-align: center;
  }

  input {
    height: 50px;
    font-size: 20px;
    text-align: center;
  }

  button {
    padding: 0 30px;
    height: 60px;
    font-size: 20px;
    margin-top: 80px;
    background-color: #000;
    color: white;
  }
`;

const AlteraRegistro = styled.button`
  margin-top: 50px;
  height: 150px;
  width: 50%;
  background-color: #000;
  display: flex;
  justify-content: center;
  color: white;
  max-width: 80%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  font-weight: 200;
  line-height: 40px;
`;

export default function RegistroSabonetes({ router, id }) {
  const [date, setDate] = React.useState('');
  const [quantity, setQuantity] = React.useState(0);

  async function handleRegister(event) {
    event.preventDefault();
    const response = await axios.post('/api/register', {
      idSoap: uuid(),
      idUser: id,
      date,
      quantity,
    });
    if (response) {
      alert('Sabonete Cadastrado com Sucesso');
    } else {
      alert('Houve um erro no cadastro. Tente novamente!');
    }
  }

  return (
    <>
      <BackgroundInformation>
        <TituloInformation>Registro de Sabonetes</TituloInformation>
        <Registro>
          <form>
            <div>
              <h3>Data de Compra</h3>
              <input
                placeholder="15/01/2021"
                type="date"
                onChange={eventInfo => {
                  setDate(eventInfo.target.value.toString());
                }}
              />
            </div>
            <div>
              <h3>Quantidade de Lote</h3>
              <input
                placeholder="5"
                type="number"
                onChange={eventInfo => {
                  setQuantity(parseInt(eventInfo.target.value, 10));
                }}
              />
            </div>
            <button
              type="button"
              onClick={eventInfo => {
                handleRegister(eventInfo);
              }}
              // disabled={date === undefined || quantity === undefined}
            >
              Registrar
            </button>
          </form>
        </Registro>
        <AlteraRegistro
          onClick={eventInfo => {
            eventInfo.preventDefault();
            router.push(`/soaps?id=${id}`);
          }}
        >
          Clique aqui para ver os sabonetes registrados
        </AlteraRegistro>
      </BackgroundInformation>
    </>
  );
}

RegistroSabonetes.propTypes = {
  router: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
