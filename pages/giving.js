import { useState, useEffect } from 'react';
import Head from 'next/head';
import { getAllCategories } from '../api/categoryData';

const Giving = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getAllCategories().then(setCategoryList);
  }, []);
  console.warn(categoryList);

  // const getCount = () => {

  // };

  return (
    <>
      <Head>
        <title>Giving</title>
      </Head>

      <h1 className="mt-3">Giving</h1>

    </>
  );
};

export default Giving;
