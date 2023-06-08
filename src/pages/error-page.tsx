import { FaArrowLeft, FaSadTear } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // return to previous page
    navigate(-1);
  };

  return (
    <main className='w-full h-screen flex items-center justify-center'>
      <div className='text-center space-y-2'>
        <h1 className='text-2xl flex items-center justify-center'>
          <span className='font-bold text-red-400 mr-2'>Oops!</span>
          <FaSadTear color='orange' />
        </h1>
        <p className='text-gray-600'>Sorry, an expected error has occurred.</p>
        <button
          onClick={goBack}
          className='flex items-center space-x-1 mx-auto underline text-blue-600 hover:text-blue-400 transition-colors delay-100 ease-linear font-semibold p-4'
        >
          <FaArrowLeft />
          <span>Go Back</span>
        </button>
      </div>
    </main>
  );
};

export default ErrorPage;
