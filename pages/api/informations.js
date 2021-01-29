import informationsDB from '../../informations.json';

export default (request, response) => {
  return response.json(informationsDB);
};
