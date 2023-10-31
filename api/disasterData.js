const dbUrl = 'https://localhost:7287';

const getAllDisasters = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/disaster/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleDisaster = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/disaster/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteSingleDisaster = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/disaster/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const createDisaster = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/disaster/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// Fix
const updateDisaster = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/disaster/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllDisasters,
  getSingleDisaster,
  createDisaster,
  deleteSingleDisaster,
  updateDisaster,
};
