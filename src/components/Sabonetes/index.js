import styled from 'styled-components';
import PropTypes from 'prop-types';
import BackgroundInformation from '../BackgroundInformation';
import TituloInformation from '../TituloInformation';
import usersDB from '../../../users.json';

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

export default function Sabonetes({ id }) {
  const { users } = usersDB;
  const userIndex = users.findIndex(user => user.id === id);
  const user = users[userIndex];
  const { soaps } = user;

  const soapsTable = soaps.map(soap => {
    const { date, quantity } = soap;
    return (
      <tr key={id}>
        <td>{date}</td>
        <td>{quantity}</td>
      </tr>
    );
  });

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
