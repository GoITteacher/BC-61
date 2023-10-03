import axios from 'axios';

const axios2 = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'X-Custom-API-KEY': 'TEST-KEY' },
  params: { apiKey: 'MyKEY' },
});

export class UserAPI {
  getUsers() {
    return axios2.get('/users').then(res => {
      console.log(res);
      return res.data;
    });
  }

  createUser(user) {
    return axios2.post('/users', user).then(res => res.data);
  }

  updateUser({ id, ...user }) {
    return axios2.patch(`/users/${id}`, user).then(res => res.data);
  }

  resetUser({ id, ...user }) {
    return axios2.put(`/users/${id}`, user).then(res => res.data);
  }

  deleteUser(id) {
    return axios.delete(`/users/${id}`);
  }
}

export class UserAPI2 {
  static BASE_URL = 'http://localhost:3000';
  static END_POINT = '/users';

  getUsers() {
    const url = UserAPI.BASE_URL + UserAPI.END_POINT;
    return fetch(url).then(res => res.json());
  }

  createUser(user) {
    const url = UserAPI.BASE_URL + UserAPI.END_POINT;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(user),
    };

    return fetch(url, options).then(res => res.json());
  }
  updateUser({ id, ...user }) {
    const url = UserAPI.BASE_URL + UserAPI.END_POINT + `/${id}`;
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(user),
    };

    return fetch(url, options).then(res => res.json());
  }
  resetUser({ id, ...user }) {
    const url = UserAPI.BASE_URL + UserAPI.END_POINT + `/${id}`;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(user),
    };

    return fetch(url, options).then(res => res.json());
  }
  deleteUser(id) {
    const BASE_URL = 'http://localhost:3000';
    const END_POINT = '/users';
    const url = `${BASE_URL}${END_POINT}/${id}`;

    const options = {
      method: 'DELETE',
    };

    return fetch(url, options);
  }
}
