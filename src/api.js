import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: `https://stark-falls-43055.herokuapp.com/`
  });
};
