import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { getAllDisasters } from '../api/disasterData';
import DisasterCard from '../components/DisasterCard';

export default function ShowDisasters() {
  const [disasters, setDisasters] = useState([]);

  const getAllTheDisasters = () => {
    getAllDisasters().then(setDisasters);
  };

  useEffect(() => {
    getAllTheDisasters();
  }, []);

  return (
    <>
      <Head>
        <title>Disasters</title>
      </Head>
      <div className="text-center my-4 d-flex gap-3 flex-column">
        {disasters.map((disaster) => <DisasterCard key={disaster.id} disasterObj={disaster} onUpdate={getAllTheDisasters} />)}
      </div>
    </>
  );
}
