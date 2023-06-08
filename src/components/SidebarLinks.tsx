import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

type SidebarLinksProps = {
  children: ReactNode;
};

export const SidebarLinks: React.FC<SidebarLinksProps> = ({ children }) => (
  <ul className='pt-2 space-y-2 md:pt-8  md:space-y-6'>{children}</ul>
);

type SidebarLinkProps = {
  label: string;
  icon: IconType;
};

export const SidebarLink: React.FC<SidebarLinkProps> = ({
  icon: Icon,
  label,
}) => {
  return (
    <li className='mx-2 px-3 py-4 bg-gray-700 hover:bg-gray-400 transition delay-100 ease-in rounded-md text-white hover:text-yellow-300 flex items-center justify-center cursor-pointer md:py-3 md:mx-4'>
      <Link to='/admin'>
        <div className='flex items-center space-x-2 text-md'>
          <span>{<Icon />}</span>
          <span className='hidden md:block'>{label}</span>
        </div>
      </Link>
    </li>
  );
};
