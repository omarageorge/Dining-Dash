const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();

  return (
    <footer className='w-full py-6 bg-slate-800 flex items-center justify-center'>
      <span className='text-gray-200 text-sm text-center md:text-md'>
        Copyright &copy; {year} DiningDash. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
