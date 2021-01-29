import styled from 'styled-components';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import axios from 'axios';
import { BsTrash } from 'react-icons/bs';
import { FiEdit2 } from 'react-icons/fi';
import BackgroundInformation from '../BackgroundInformation';
import TituloInformation from '../TituloInformation';

const Table = styled.table`
  border: 1;
  color: white;
  text-align: center;
  width: 30%;
  font-size: 20px;

  th {
    background-color: black;
  }

  tr {
    background-color: #0009;
  }
`;

const ButtonRemove = styled.td`
  background-color: #000;
  cursor: pointer;
`;

const ButtonEdit = styled.td`
  background-color: #000;
  cursor: pointer;
`;

export default function Sabonetes({ id }) {
  const [soaps, setSoaps] = React.useState([
    {
      idSoap: '',
      idUser: '',
      date: '',
      quantity: 0,
    },
  ]);

  useEffect(() => {
    axios.get('/api/users').then(response => {
      const { users } = response.data;
      const userIndex = users.findIndex(user => user.id === id);
      const user = users[userIndex];
      setSoaps(user.soaps);
    });
  }, []);

  const soapsTable = soaps.map(soap => {
    const { date, quantity } = soap;
    console.log(date, quantity);
    if (date === '' || quantity === '') {
      return '';
    }
    return (
      <tr key={id}>
        <td>{date}</td>
        <td>{quantity}</td>

        <ButtonRemove>
          <BsTrash />
        </ButtonRemove>
      </tr>
    );
  });
  console.log(soaps);

  return (
    <>
      <BackgroundInformation>
        <TituloInformation>Consultar ou Editar</TituloInformation>
        <Table>
          <tr>
            <th>Data</th>
            <th>Quantidade</th>
          </tr>
          {soapsTable}
        </Table>
      </BackgroundInformation>
    </>
  );
}

Sabonetes.propTypes = {
  id: PropTypes.string.isRequired,
};
