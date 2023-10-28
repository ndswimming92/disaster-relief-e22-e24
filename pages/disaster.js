import React, { useEffect, useState } from 'react';
import { getAllDisasters } from '../api/disasterData';
import DisasterCard from '../components/DisasterCard';

export default function ShowDisasters() {
  const [disasters, setDisasters] = useState([]);

  const getAllTheDisasters = () => {
    getAllDisasters().then(setDisasters);
  };
  console.warn(getAllTheDisasters);
  useEffect(() => {
    getAllTheDisasters();
  }, []);

  return (
    <>
      <div className="text-center my-4">
        {disasters.map((disaster) => <DisasterCard key={disaster.id} disasterObj={disaster} onUpdate={getAllTheDisasters} />)}
      </div>
    </>
  );
}
