import PropTypes from 'prop-types';
import { useAuth } from './context/authContext';
import Loading from '../components/Loading';
// import Signin from '../components/Signin';
import NavBar from '../components/NavBar';
import AuthNavBar from '../components/AuthNavBar';

const ViewDirectorBasedOnUserAuthStatus = ({ component: Component, pageProps }) => {
  const { user, userLoading } = useAuth();

  // if user state is null, then show loader
  if (userLoading) {
    return <Loading />;
  }

  // what the user should see if they are logged in
  if (user) {
    console.warn('USER: ', user);
    return (
      <>
        <AuthNavBar /> {/* NavBar only visible by admin users that are logged in */}
        <div className="container"> <Component {...pageProps} /></div>
      </>
    );
  }

  return (
    <>
      <NavBar />  {/* NavBar visible by non-authenticated users */}
      <div className="container"> <Component {...pageProps} /></div>
    </>
  );
};

export default ViewDirectorBasedOnUserAuthStatus;

ViewDirectorBasedOnUserAuthStatus.propTypes = {
  component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
