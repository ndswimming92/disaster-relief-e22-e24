import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { checkUser } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import hero from '../public/heroimage.jpeg';
import housefire from '../public/housefire.png';
import tornado from '../public/tornado.png';
import wildfire from '../public/wildfire.png';
import flood from '../public/flood.png';

function Home() {
  const { user } = useAuth();
  const [authUser, setAuthUser] = useState({});

  useEffect(() => {
    checkUser(user.uid).then((data) => setAuthUser(data));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.warn('AuthUser: ', authUser.uid);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="container">
        <Image
          src={hero}
          fill
        />

        <div className="my-5">
          <p className="fs-3 fw-bold">Disaster relief starts in the community.</p>
          <p className=" fs-6 lh-lg text-black-50">From small house fires to multi-state natural disasters, the TN Disaster Relief goes wherever we are neded, so people can have clean water, safe shelter and hot meals when they need them most.
          </p>
          <ul className="text-black-50 mb-5">
            <li>We respond to an average of more than 10,000 disasters every year</li>
            <li>95% of our disaster relief workers are volunteers</li>
            <li>The vast majority of disasters we respond to are home fires</li>
          </ul>
        </div>
        <div className="my-5">
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold' }} className="mt-5 text-center">We are there when people need us most</p>
          <p className="fs-3 text-black-50">Our purpose is to meet the immediate disaster-caused needs of individuals, families, and communities. Explore how we respond to disasters big and small, across the state of Tennessee.</p>
        </div>
        <div className="d-flex justify-content-between flex-wrap">
          <div>
            <Image
              src={tornado}
              width={200}
              height={200}
            />
            <p className="fs-4 text-black-50 fw-semibold text-center">Tornado Relief</p>
          </div>
          <div>
            <Image
              src={housefire}
              width={200}
              height={200}
            />
            <p className="fs-4 text-black-50 fw-semibold text-center">House Fire</p>
          </div>
          <div>
            <Image
              src={flood}
              width={200}
              height={200}
            />
            <p className="fs-4 text-black-50 fw-semibold text-center">Flood Relief</p>
          </div>
          <div>
            <Image
              src={wildfire}
              width={200}
              height={200}
            />
            <p className="fs-4 text-black-50 fw-semibold text-center">Wildfire Relief</p>
          </div>
        </div>

      </div>
    </>

  );
}

export default Home;
