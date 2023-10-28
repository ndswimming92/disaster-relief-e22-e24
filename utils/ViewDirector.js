import PropTypes from 'prop-types';
import { useAuth } from './context/authContext';
import Loading from '../components/Loading';
// import Signin from '../components/Signin';
// import NavBar from '../components/NavBar';
// import authNavBar from '../components/authNavBar';

// import RegisterForm from '../components/RegisterForm';

const ViewDirectorBasedOnUserAuthStatus = ({ component: Component, pageProps }) => {
  const { user, userLoading } = useAuth();

  // if user state is null, then show loader
  if (userLoading) {
    return <Loading />;
  }

  // what the user should see if they are logged in
  if (user) {
    return (
      <>
        <authNavBar /> {/* NavBar only visible if user is logged in and is in every view */}
        <div className="container"> <Component {...pageProps} /></div>
      </>
    );
  }

  return (
    <>
      {/* <NavBar /> */}
      <div className="container"> <Component {...pageProps} /></div>
    </>
  );
};

export default ViewDirectorBasedOnUserAuthStatus;

ViewDirectorBasedOnUserAuthStatus.propTypes = {
  component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
