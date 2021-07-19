import {BASE_URL} from '../constants/apiEndPoints';
const axios = require('axios');

export const getHeader = () => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
};

export const callGetApi = async (componentName = '', apiUrl) => {
  return new Promise(async (resolve, reject) => {
    let URL = BASE_URL + apiUrl;

    axios
      .get(URL, {
        headers: getHeader(),
        timeout: 10000,
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
export const callPostApi = async (componentName = '', apiUrl, bodyParams) => {
  return new Promise(async (resolve, reject) => {
    let URL = BASE_URL + apiUrl;
    axios
      .post(URL, bodyParams, {
        headers: getHeader(),
        timeout: 10000,
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
