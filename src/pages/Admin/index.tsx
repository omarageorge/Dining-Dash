import { Outlet } from 'react-router-dom';
import AdminSideBar from '../../components/AdminSideBar';

const AdminRoot: React.FC = () => {
  return (
    <div className='flex'>
      {/* Sidebar */}
      <AdminSideBar />

      {/* Main content */}
      <main className='flex-grow overflow-y-auto ml-[16%] p-5 space-y-4 md:ml-64'>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminRoot;
