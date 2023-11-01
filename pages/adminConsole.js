import Head from 'next/head';
import DisasterForm from '../components/Forms/DisasterForm';
import CategoryForm from '../components/Forms/CategoryForm';

const AdminConsole = () => (
  <>
    <Head>
      <title>Admin Console</title>
    </Head>
    {/* <h1 className="mt-3">Admin Console</h1> */}
    <div className="mt-5">
      <h2>Create Disaster Entry</h2>
      <DisasterForm />
    </div>
    <div className="my-5">
      <h2 className="mb-4">Create Category Entry</h2>
      <CategoryForm />
    </div>
  </>

);

export default AdminConsole;
