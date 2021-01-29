import usersDB from '../../users.json';

export default (request, response) => {
  if (request.method !== 'POST') {
    response.status(500).end();
    return;
  }
  const { idSoap, idUser, date, quantity } = request.body;
  const soap = { idSoap, idUser, date, quantity };
  const { users } = usersDB;
  const userIndex = users.findIndex(user => user.id === idUser);
  const user = users[userIndex];
  user.soaps.push(soap);
  // eslint-disable-next-line consistent-return
  return response.status(201).json(user);
};
