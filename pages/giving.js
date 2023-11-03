/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { getAllCategories } from '../api/categoryData';

const Giving = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});

  useEffect(() => {
    getAllCategories().then((categories) => {
      setCategoryList(categories);

      // Calculate category counts
      const counts = {};
      categories.forEach((category) => {
        if (counts[category.categoryName]) {
          counts[category.categoryName]++;
        } else {
          counts[category.categoryName] = 1;
        }
      });
      setCategoryCounts(counts);
    });
  }, []);

  return (
    <>
      <h1 className="mt-3">Thank you for your Giving!</h1>
      <div>
        {categoryList.map((category) => (
          <div key={category.id}>
            <Card style={{ width: '15rem' }} className="rounded-0 border-0 w-75">
              <Card.Body>
                <Card.Title>{category.categoryName}</Card.Title>
                <Card.Text>{category.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div>
        <h2>Category Counts</h2>
        <ul>
          {Object.entries(categoryCounts).map(([categoryName, count]) => (
            <li key={categoryName}>{categoryName}: {count}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Giving;
