const dbUrl = 'https://localhost:7287';

const getAllItems = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/item/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const createItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/item/`, {
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

const deleteSingleItem = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/item/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllItems,
  createItem,
  deleteSingleItem,
};
