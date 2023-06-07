const HomePage: React.FC = () => {
  return (
    <main className='w-full'>
      <header className='relative w-full h-[80vh]'>
        <div className='absolute z-10 w-full h-full bg-[url("/images/header-background.jpg")] bg-top bg-cover'></div>
        <div className='absolute z-10 w-full h-full bg-black opacity-60'></div>
        <div className='absolute z-30 w-full h-full flex  items-center justify-center'>
          <div className='text-center space-y-4'>
            <h1 className='text-4xl pb-2 italic space-x-1'>
              <span className='text-orange-400'>Dining</span>
              <span className='text-yellow-400'>Dash</span>
            </h1>

            <form className='' action=''>
              <input
                type='search'
                placeholder='Search by cuisine, location, or restaurant name...'
                className='w-80 bg-gray-100 px-4 py-2 rounded-sm outline-none text-green placeholder:text-md placeholder:text-slate-500 placeholder:italic md:w-[40rem]'
              />
            </form>

            <h2 className='text-md text-gray-200'>
              Explore Our Exquisite Restaurant Listings
            </h2>
          </div>
        </div>
      </header>
    </main>
  );
};

export default HomePage;
