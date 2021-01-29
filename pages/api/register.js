import usersDB from '../../users.json';

export default (request, response) => {
  const { idSoap, idUser, date, quantity } = request.body;
  const soap = { idSoap, idUser, date, quantity };
  const { users } = usersDB;
  const userIndex = users.findIndex(user => user.id === idUser);
  const user = users[userIndex];
  user.soaps.push(soap);
  return response.json(user);
};
