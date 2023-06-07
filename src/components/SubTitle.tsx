type SubTitleProps = {
  text: string;
};

const SubTitle: React.FC<SubTitleProps> = ({ text }) => {
  return (
    <h1 className='text-2xl text-slate-800 text-center font-semibold'>
      {text}
    </h1>
  );
};

export default SubTitle;
