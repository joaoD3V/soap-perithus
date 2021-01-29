import usersDB from '../../users.json';

export default (request, response) => {
  return response.json(usersDB);
};
