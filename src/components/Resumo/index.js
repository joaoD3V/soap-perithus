import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import React, { useEffect } from 'react';
import BackgroundInformation from '../BackgroundInformation';

const LucroMensal = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: #000;
    font-size: 50px;
    font-weight: 400;
  }

  div {
    background-color: #000;
    width: 30%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      color: white;
      font-weight: 400;
    }
  }
`;

const Vendas = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    background-color: #000;
    width: 20%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      color: white;
    }
  }
`;

const Despesas = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const DespesasProdutos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 30px;

  h3 {
    color: #000;
    font-size: 25px;
    font-weight: 400;
  }

  div {
    background-color: #000;
    width: 60%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      color: white;
      font-size: 30px;
      font-weight: 300;
    }
  }
`;

export default function Resumo({ id }) {
  const [informations, setInformations] = React.useState({
    compraPorLote: '',
    quantidaPorLote: '',
    precoPorLote: '',
    precoPorUnidade: '',
    salarioMinimo: '',
    impostoMarca: '',
    impostoMei: '',
  });

  useEffect(() => {
    axios.get('/api/informations').then(response => {
      setInformations(response.data);
    });
  }, []);

  const [soaps, setSoaps] = React.useState([
    {
      idSoap: '',
      idUser: '',
      date: '',
      quantity: 0,
    },
  ]);

  const [lotes, setLotes] = React.useState(0);
  const [lucro, setLucro] = React.useState(0);
  const [impostoMarca, setImpostoMarca] = React.useState(0);
  const [impostoMei, setImpostoMei] = React.useState(0);
  const [despesasImposto, setDespesasImposto] = React.useState(0);
  const [compra, setCompra] = React.useState(0);

  useEffect(() => {
    axios.get('/api/users').then(response => {
      const { users } = response.data;
      const userIndex = users.findIndex(user => user.id === id);
      const user = users[userIndex];
      setSoaps(user.soaps);
    });

    const total = soaps.reduce((sum, soap) => {
      // eslint-disable-next-line no-param-reassign
      sum += soap.quantity;
      return sum;
    }, 0);
    setLotes(total);

    setImpostoMarca(
      (total % 100) *
        ((informations.precoPorLote * informations.impostoMarca) / 100)
    );
    setImpostoMei((informations.salarioMinimo * informations.impostoMei) / 100);
    setDespesasImposto(impostoMarca + impostoMei);
    setCompra(total * informations.compraPorLote);
    // eslint-disable-next-line prettier/prettier
    setLucro((total * informations.precoPorLote - impostoMarca) - impostoMei);
  }, soaps);

  return (
    <>
      <BackgroundInformation>
        <LucroMensal>
          <h1>Lucro Mensal</h1>
          <div>
            <h1>{lucro}</h1>
          </div>
        </LucroMensal>
        <Vendas>
          <h1>Total de Vendas</h1>
          <div>
            <h1>{lotes}</h1>
          </div>
        </Vendas>
        <Despesas>
          <DespesasProdutos>
            <h3>Despesas com Produtos</h3>
            <div>
              <h1>{compra}</h1>
            </div>
          </DespesasProdutos>
          <DespesasProdutos>
            <h3>Despesas com Impostos</h3>
            <div>
              <h1>{despesasImposto}</h1>
            </div>
          </DespesasProdutos>
        </Despesas>
      </BackgroundInformation>
    </>
  );
}

Resumo.propTypes = {
  id: PropTypes.string.isRequired,
};
