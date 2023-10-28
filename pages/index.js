import { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
import { checkUser } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  const [authUser, setAuthUser] = useState({});

  useEffect(() => {
    checkUser(user.uid).then((data) => setAuthUser(data));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.warn('AuthUser: ', authUser.uid);
  console.warn('User uid: ', user.uid);

  return (
    <>
      <h1>HOME</h1>
      {authUser.uid === user.uid ? <h1>Admin</h1> : <h1>Non-Admin</h1>}
    </>

  );
}

export default Home;
