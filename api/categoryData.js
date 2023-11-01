const dbUrl = 'https://localhost:7287';

const getAllCategories = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/category/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const createCategories = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/category/`, {
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

const deleteSingleCategory = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/category/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const getCategoryCount = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/item/category/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getAllCategories,
  createCategories,
  deleteSingleCategory,
  getCategoryCount,
};
