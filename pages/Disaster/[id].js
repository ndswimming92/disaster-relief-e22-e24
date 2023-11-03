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
  let disasterItems = [];

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


 if  (Object.keys(singleDetails).includes("items")) {
    disasterItems = singleDetails.items;
} else {
    console.log("No items pledges for this disaster");
}


  return (
    <div>
      <div>
        <div>
          <span />
          <div >
            <h1 className="my-5">{singleDetails.disasterName}</h1>
            <p className="fs-6"><span className="fw-semibold me-3">Description:</span> {singleDetails.description} </p>
            <p><span className="fw-semibold me-3">Location:</span> {singleDetails.location} </p>
            <p> <span className="fw-semibold me-3">Severity:</span> {singleDetails.severity}</p>
          </div>
          <div className="mt-5">
        <p className="fs-4 fw-semibold">Your Pledge</p>
        <ItemForm obj={{}} disasterId={id} onSubmit={handleItemSubmit} />
      </div>
      <div className="m-4">
        <p className="fs-4">Items Pledged</p>
        <ul className="text-decoration-none">
          {disasterItems.map((item) => <li key={item.id}>{item.itemName}</li>)}
        </ul>
        
      </div>
        </div>
      </div>
    </div>
  );
}
