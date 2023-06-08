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
  route: string;
  label: string;
  icon: IconType;
};

export const SidebarLink: React.FC<SidebarLinkProps> = ({
  route,
  label,
  icon: Icon,
}) => {
  return (
    <div>
      <Link to={route}>
        <li className='mx-2 px-3 py-4 bg-gray-700 hover:bg-gray-400 transition delay-100 ease-in rounded-md text-white hover:text-yellow-300 flex items-center justify-center space-x-2 cursor-pointer select-none md:py-3 md:mx-4'>
          <span>{<Icon />}</span>
          <span className='hidden md:block'>{label}</span>
        </li>
      </Link>
    </div>
  );
};
