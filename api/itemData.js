const getAllItems = () => new Promise((resolve, reject) => {
  fetch('https://localhost:7287/item/', {
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
  fetch('https://localhost:7287/api/item/', {
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
  fetch(`https://localhost:7287/api/item/${id}`, {
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
