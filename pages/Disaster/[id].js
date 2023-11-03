/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleDisaster } from '../../api/disasterData';
import { createItem } from '../../api/itemData';
import ItemForm from '../../components/Forms/ItemForm';

export default function disasterDetails() {
  const router = useRouter();
  const [singleDetails, setDisasterDetails] = useState({});
  const [items, setItems] = useState([]);
  const { id } = router.query;

  useEffect(() => {
    getSingleDisaster(id).then(setDisasterDetails);
  }, [id]);

  const handleItemSubmit = (item) => {
    createItem(id, item)
      .then((data) => {
        setItems([...items, data]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <div className="body2" class="c2">
        <div className="b2">
          <span />
          <div class="c3">
            <h1>Disaster Name: {singleDetails.disasterName}</h1>
            <h4>Description: {singleDetails.description} </h4>
            <h4>Location: {singleDetails.location} </h4>
            <h4> Severity: {singleDetails.severity}</h4>
          </div>
          <div className="mt-5">
        <h5>Your Donation</h5>
        <ItemForm obj={{}} disasterId={id} onSubmit={handleItemSubmit} />
      </div>
        </div>
      </div>
    </div>
  );
}
