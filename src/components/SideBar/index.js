import styled from 'styled-components';
import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import axios from 'axios';

const Aside = styled.aside`
  width: 280px;
  height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const LogoSidebar = styled.h1`
  font-size: 60px;
  font-weight: 200;
  margin-top: 40px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  color: white;
`;

const diaAtual = format(new Date(), "EEEE, dd 'de' MMMM 'de' yyy", {
  locale: ptBR,
});

const SemanaDiaMesAno = styled.h3`
  margin-top: 0;
  text-align: center;
`;

const NomeApresentacao = styled.h3`
  color: white;
  font-weight: 400;
  font-size: 20px;
`;

const Menu = styled.button`
  background-color: white;
  border: none;
  margin-bottom: 10px;
  width: 90%;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
`;

const Information = styled.h3`
  color: white;
  font-size: 18px;
  text-align: center;
`;

export default function Sidebar({ id, router, name }) {
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
  return (
    <>
      <Aside>
        <LogoSidebar>Soap</LogoSidebar>
        <SemanaDiaMesAno>{diaAtual}</SemanaDiaMesAno>
        <NomeApresentacao>{`Olá ${name}!`}</NomeApresentacao>
        <Menu
          type="button"
          onClick={eventInfo => {
            eventInfo.preventDefault();
            router.push(`/app?id=${id}`);
          }}
        >
          Resumo
        </Menu>
        <Menu
          type="button"
          onClick={eventInfo => {
            eventInfo.preventDefault();
            router.push(`/register?id=${id}`);
          }}
        >
          Registrar Sabonetes
        </Menu>
        <Menu
          type="button"
          onClick={eventInfo => {
            eventInfo.preventDefault();
            router.push(`/consult?id=${id}`);
          }}
        >
          Consultar por Mês e Ano
        </Menu>
        {/* <Menu
          type="button"
          onClick={eventInfo => {
            eventInfo.preventDefault();
            router.push(`/list?id=${id}`);
          }}
        >
          Listar Valores
        </Menu> */}
        <Information>{`Compra por lote = ${informations.compraPorLote} reais`}</Information>
        <Information>{`1 lote = ${informations.quantidaPorLote} unidades`}</Information>
        <Information>{`1 lote = ${informations.precoPorLote} reais`}</Information>
        <Information>{`1 unidade = ${informations.precoPorUnidade} reais`}</Information>
        <Information>{`Salário Mínimo = ${informations.salarioMinimo} reais`}</Information>
        <Menu
          type="button"
          onClick={eventInfo => {
            eventInfo.preventDefault();
            router.push(`/`);
          }}
        >
          Sair
        </Menu>
      </Aside>
    </>
  );
}

Sidebar.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  router: PropTypes.func.isRequired,
};
