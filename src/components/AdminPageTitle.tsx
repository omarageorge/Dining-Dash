type AdminPageTitleProps = {
  title: string;
};

const AdminPageTitle: React.FC<AdminPageTitleProps> = ({ title }) => (
  <h1 className='font-semibold text-2xl text-slate-800 mb-4'>{title}</h1>
);

export default AdminPageTitle;
