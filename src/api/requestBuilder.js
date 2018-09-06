import axios from 'axios';
import config from '../configs/env.config';
import { CANCEL } from 'redux-saga';

const CancelToken = axios.CancelToken;

const BASE_URL = config.base_url;

let api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function setHeaderToken(token) {
  axios.defaults.params = {};
  axios.defaults.params.cookie = token;
}

setHeaderToken();

// Implement request cancel
function get(url, config = {}) {
  let cancel;
  const apiConfig = {
    ...config,
    cancelToken: new CancelToken((c) => (cancel = c)),
  };
  const request = api
    .get(url, apiConfig)
    .then((res) => {
      return mapData(res);
    })
    .catch(mapError);
  request[CANCEL] = () => cancel();
  return request;
}

// tslint:disable-next-line:no-any
function post(url, body, config = {}) {
  let cancel;
  const apiConfig = {
    ...config,
    cancelToken: new CancelToken((c) => (cancel = c)),
  };
  const request = api
    .post(url, body, apiConfig)
    .then((res) => {
      return mapData(res);
    })
    .catch(mapError);
  request[CANCEL] = () => cancel();
  return request;
}

// tslint:disable-next-line:no-any
function put(url, body, config = {}) {
  let cancel;
  const apiConfig = {
    ...config,
    cancelToken: new CancelToken((c) => (cancel = c)),
  };
  const request = api
    .put(url, body, apiConfig)
    .then((res) => {
      return mapData(res);
    })
    .catch(mapError);
  request[CANCEL] = () => cancel();
  return request;
}

// tslint:disable-next-line:no-any
function patch(url, body, config = {}) {
  let cancel;
  const apiConfig = {
    ...config,
    cancelToken: new CancelToken((c) => (cancel = c)),
  };
  const request = api
    .patch(url, body, apiConfig)
    .then((res) => {
      return mapData(res);
    })
    .catch(mapError);
  request[CANCEL] = () => cancel();
  return request;
}

function _delete(url, config = {}) {
  let cancel;
  const apiConfig = {
    ...config,
    cancelToken: new CancelToken((c) => (cancel = c)),
  };
  const request = api
    .delete(url, apiConfig)
    .then((res) => {
      return mapData(res);
    })
    .catch(mapError);
  request[CANCEL] = () => cancel();
  return request;
}

// tslint:disable-next-line:no-any
function sendWithFile(url, method, bodyData, files) {
  method = method.toLowerCase();
  let formData = new FormData();
  if (files && files.length > 0) {
    for (let i = 0; i < files.length; i++) {
      for (let j = 0; j < files[i].files.length; j++) {
        formData.append(
          files[i].name,
          files[i].files[j],
          // tslint:disable-next-line:align
          files[i].files[j] ? files[i].files[j].name : '__upload_file',
        );
      }
    }
  }
  for (let property of bodyData) {
    appendRecursive(formData, bodyData[property], property);
  }
  return axios[method](`${BASE_URL}${url}`, formData)
    .then((res) => {
      return mapData(res);
    })
    .catch(mapError);
}

// tslint:disable-next-line:no-any
function appendRecursive(fData, data, prop) {
  if ('object' === typeof data) {
    for (let p of data) {
      appendRecursive(fData, data[p], `${prop}`);
    }
  } else {
    fData.append(prop, data);
  }
}

function mapData(res) {
  const data = res.data;
  return data;
}

function mapError(err) {
  // TODO Log out when session expire
  if (__DEV__) {
    console.log(err.response);
    console.log(err.request);
  }
  throw err;
}

const API = {
  get,
  post,
  patch,
  put,
  delete: _delete,
  sendWithFile,
};

export default API;
