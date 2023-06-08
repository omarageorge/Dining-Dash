import {
  FaUserCircle,
  FaSignOutAlt,
  FaUtensils,
  FaCoffee,
  FaHamburger,
} from 'react-icons/fa';
import { SidebarLinks, SidebarLink } from './SidebarLinks';

const AdminSideBar = () => {
  return (
    <aside className='w-1/6 h-screen top-0 fixed bg-slate-800 shadow-md flex flex-col justify-between md:w-64'>
      {/* Header */}
      <div>
        {/* Sidebar Header */}
        <div className='w-full h-auto py-5 flex flex-col items-center justify-center space-y-2 bg-gray-900 md:py-6 md:flex-row md:space-y-0 md:space-x-2 select-none'>
          <span className='text-4xl text-white md:text-3xl'>
            <FaUserCircle />
          </span>
          <span className='text-white md:text-xl'>Admin</span>
        </div>

        {/* Links */}
        <SidebarLinks>
          <SidebarLink icon={FaUtensils} label='Restaurants' />
          <SidebarLink icon={FaCoffee} label='Restaurants' />
          <SidebarLink icon={FaHamburger} label='Restaurants' />
        </SidebarLinks>
      </div>

      {/* Logout Button */}
      <div className='bg-gray-700 hover:bg-red-600 transition-all delay-100 ease-in py-5 cursor-pointer flex items-center justify-center select-none'>
        <span className='text-white text-xl'>
          <FaSignOutAlt />
        </span>
        <span className='hidden text-white text-md ml-2 md:block'>Logout</span>
      </div>
    </aside>
  );
};

export default AdminSideBar;
