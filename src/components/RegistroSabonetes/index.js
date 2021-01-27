import styled from 'styled-components';
import PropTypes from 'prop-types';
import { uuid } from 'uuidv4';
import soapDB from '../../../soap.json';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Titulo = styled.h2`
  font-size: 50px;
  font-weight: 300;
  display: flex;
  justify-content: center;
`;

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

  h2 {
    color: white;
    max-width: 80%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-weight: 200;
    line-height: 40px;
  }
`;

export default function RegistroSabonetes({ router }) {
  const soaps = soapDB.soup;
  let id;
  let date;
  let quantity;
  return (
    <>
      <Background>
        <Titulo>Registro de Sabonetes</Titulo>
        <Registro>
          <form>
            <div>
              <h3>Data de Compra</h3>
              <input
                placeholder="15/01/2021"
                type="date"
                onChange={eventInfo => {
                  date = eventInfo.target.value.toString();
                }}
              />
            </div>
            <div>
              <h3>Quantidade de Lote</h3>
              <input
                placeholder="5"
                type="number"
                onChange={eventInfo => {
                  quantity = parseInt(eventInfo.target.value, 10);
                }}
              />
            </div>
            <button
              type="button"
              onClick={eventInfo => {
                eventInfo.preventDefault();
                id = uuid();
                const soap = { id, date, quantity };
                soaps.push(soap);
                console.log(soaps);
                const soapIndex = soaps.findIndex(
                  soapItem => soap.id === soapItem.id
                );
                if (soapIndex >= 0) {
                  alert('Sabonete Cadastrado com Sucesso');
                } else if (soapIndex < 0) {
                  alert('Houve um erro no cadastro. Tente novamente!');
                }
              }}
              // disabled={date === undefined || quantity === undefined}
            >
              Registrar
            </button>
          </form>
        </Registro>
        <AlteraRegistro>
          <h2>Clique aqui para ver os sabonetes registrados</h2>
        </AlteraRegistro>
      </Background>
    </>
  );
}

RegistroSabonetes.propTypes = {
  router: PropTypes.func.isRequired,
};
