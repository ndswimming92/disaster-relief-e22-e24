import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { getDisasters } from '../api/disasterData';
import DisasterCard from '../components/DisasterCard';

export default function ShowDisasters() {
  const [disasters, setDisasters] = useState([]);

  const getAllTheDisasters = () => {
    getDisasters().then(setDisasters);
  };

  useEffect(() => {
    getAllTheDisasters();
  }, []);

  return (
    <>
      <div className="text-center my-4">
        <Link href="/disaster/about" passHref>
          <Button>Details</Button>
        </Link>
        {disasters.map((disaster) => <DisasterCard key={disaster.id} disasterObj={disaster} onUpdate={getAllTheDisasters} />)}
      </div>
    </>
  );
}
