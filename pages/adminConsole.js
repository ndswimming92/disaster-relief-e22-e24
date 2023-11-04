import { useState, useEffect } from 'react';
import Head from 'next/head';
import CategoryForm from '../components/Forms/CategoryForm';
import DisasterForm from '../components/Forms/DIsasterForm';
import { getAllCategories } from '../api/categoryData';
import CategoryList from '../components/CategoryList';

const AdminConsole = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    getAllCategories().then(setCategories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <Head>
        <title>Admin Console</title>
      </Head>
      {/* <h1 className="mt-3">Admin Console</h1> */}
      <div className="mt-5">
        <h2>Create Disaster Entry</h2>
        <DisasterForm />
      </div>
      <div className="my-5">
        <h2 className="mb-4">Create Category Entry</h2>
        <p className="fw-semibold fs-5">Existing Categories</p>
        <table className="w-100 rounded-3 mb-3 border-2 border-dark-subtle shadow">
          <thead>
            <th className="ps-3">Category</th><th className="ps-3">Description</th>
          </thead>
          {categories.map((category) => <CategoryList key={category.id} categoryObj={category} onUpdate={getCategories} />)}
        </table>
        <CategoryForm onUpdate={getCategories} />
      </div>
    </>

  );
};

export default AdminConsole;
