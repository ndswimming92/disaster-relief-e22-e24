import React, { useState, useEffect } from 'react';
import { getAllCategories } from '../api/categoryData';
import { getAllItems } from '../api/itemData';
import { getAllDisasters } from '../api/disasterData';

const Giving = () => {
  const [disasterCategoryCounts, setDisasterCategoryCounts] = useState({});

  useEffect(() => {
    const fetchCategoryCounts = async () => {
      // Fetch all categories
      const categories = await getAllCategories();

      // Fetch all donation items
      const items = await getAllItems();

      // Fetch all disasters
      const disasters = await getAllDisasters();

      // Create an empty object to store category counts for each disaster
      const disasterCounts = {};

      // Initialize the disaster counts with zeros
      disasters.forEach((disaster) => {
        disasterCounts[disaster.id] = {};
        disasterCounts[disaster.id].disasterName = disaster.disasterName;

        categories.forEach((category) => {
          disasterCounts[disaster.id][category.categoryName] = 0;
        });
      });

      // Calculate category counts for each disaster
      items.forEach((item) => {
        if (item.category && item.category.categoryName) {
          const { disasterId } = item;
          const { categoryName } = item.category;
          disasterCounts[disasterId][categoryName] = (disasterCounts[disasterId][categoryName] || 0) + 1;
        }
      });

      // Set the state variable with the counts
      setDisasterCategoryCounts(disasterCounts);
    };

    // Call the function to fetch category counts on component mount
    fetchCategoryCounts();
  }, []);

  return (
    <>
      <h1 className="mt-3">Thank you for your Giving!</h1>
      <div>
        <h2>Category Counts</h2>
        <ul>
          {Object.entries(disasterCategoryCounts).map(([disasterId, disasterData]) => (
            <li key={disasterId}>
              {disasterData.disasterName}:
              <ul>
                {Object.entries(disasterData).map(([categoryName, count]) => {
                  if (categoryName !== 'disasterName') {
                    return (
                      <li key={categoryName}>
                        {categoryName}: {count}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Giving;
