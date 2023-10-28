const getAllDisasters = () => new Promise((resolve, reject) => {
  fetch('https://localhost:7287/disaster/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleDisaster = (Id) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7287/api/disaster/${Id}`, {
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
  fetch(`https://localhost:7287/api/disaster/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const createDisaster = (payload) => new Promise((resolve, reject) => {
  fetch('https://localhost:7287/api/disaster/', {
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

const updateOrder = (Id, payload) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7011/api/disaster/${Id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  // .then((response) => response.json())
  // .then((data) => resolve(data))
    .then(resolve)
    .catch(reject);
});

export {
  getAllDisasters,
  getSingleDisaster,
  createDisaster,
  deleteSingleDisaster,
  updateOrder,
}
