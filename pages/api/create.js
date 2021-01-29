import usersDB from '../../users.json';

export default (request, response) => {
  const { id, name, email, password, soaps } = request.body;
  const { users } = usersDB;
  users.push({ id, name, email, password, soaps });
  return response.json(users);
};
