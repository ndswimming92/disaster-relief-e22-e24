import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useAuth } from '../utils/context/authContext';
import { getAllDisasters } from '../api/disasterData';
import DisasterCard from '../components/DisasterCard';
import { checkUser } from '../utils/auth';

export default function ShowDisasters() {
  const [disasters, setDisasters] = useState([]);
  const { user } = useAuth();
  const [authUser, setAuthUser] = useState({});

  const getAllTheDisasters = () => {
    getAllDisasters().then(setDisasters);
  };

  useEffect(() => {
    getAllTheDisasters();
    checkUser(user.uid).then((data) => setAuthUser(data));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Disasters</title>
      </Head>
      <div className="text-center my-4 d-flex gap-3 flex-column">
        {disasters.map((disaster) => <DisasterCard key={disaster.id} disasterObj={disaster} onUpdate={getAllTheDisasters} adminUser={authUser} />)}
      </div>
    </>
  );
}
