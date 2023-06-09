import DiningDashLogo from '../components/DiningDashLogo';

const SignUpPage: React.FC = () => {
  return (
    <div className='w-full h-screen bg-slate-200 flex items-center justify-center'>
      <div className='w-3/4 sm:w-2/4 md:w-1/4'>
        <div className='w-full flex flex-col items-center justify-center mb-6 space-y-2'>
          <DiningDashLogo />
          <span className='text-md text-slate-600 font-semibold'>
            Create an account
          </span>
        </div>

        <form className='space-y-5'>
          <input
            type='username'
            name='username'
            placeholder='Choose a username'
            className='w-full border-2 border-slate-600 rounded-md p-3 focus:outline-slate-800 focus:shadow-lg'
            required
          />
          <input
            type='password'
            name='password'
            placeholder='Choose a password'
            className='w-full border-2 border-slate-600 rounded-md p-3 focus:outline-slate-800 focus:shadow-lg'
            required
          />

          <button
            type='submit'
            className='w-full bg-slate-800 hover:bg-slate-700 rounded-md shadow-sm p-3 text-white font-semibold transition delay-100 ease-in'
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
