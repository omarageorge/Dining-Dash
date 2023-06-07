import RestaurantCard from '../components/RestaurantCard';

const HomePage: React.FC = () => {
  const restaurants = [
    {
      name: 'Restaurant 1',
      location: 'Wakiso',
      imageSrc: '/images/header-background.jpg',
      cuisine: 'Italian',
    },
    {
      name: 'Restaurant 2',
      location: 'Kampala',
      imageSrc: '/images/header-background.jpg',
      cuisine: 'Mexican',
    },
    {
      name: 'Restaurant 3',
      location: 'Gulu',
      imageSrc: '/images/header-background.jpg',
      cuisine: 'Chinese',
    },
    {
      name: 'Restaurant 4',
      location: 'Entebbe',
      imageSrc: '/images/header-background.jpg',
      cuisine: 'Indian',
    },
    {
      name: 'Restaurant 5',
      location: 'Jinja',
      imageSrc: '/images/header-background.jpg',
      cuisine: 'Thai',
    },
    {
      name: 'Restaurant 6',
      location: 'Mbarara',
      imageSrc: '/images/header-background.jpg',
      cuisine: 'American',
    },
  ];

  return (
    <>
      {/* Header */}
      <header className='relative w-full h-[90vh]'>
        <div className='absolute z-10 w-full h-full bg-[url("/images/header-background.jpg")] bg-top bg-cover'></div>
        <div className='absolute z-10 w-full h-full bg-black opacity-60'></div>
        <div className='absolute z-30 w-full h-full flex  items-center justify-center'>
          <div className='text-center space-y-6'>
            <h1 className='text-4xl italic space-x-1'>
              <span className='text-orange-400'>Dining</span>
              <span className='text-yellow-400'>Dash</span>
            </h1>

            <form className='' action=''>
              <input
                type='search'
                placeholder='Search by cuisine, location, or restaurant name...'
                className='w-72 bg-gray-100 px-4 py-2 rounded-sm outline-none text-green placeholder:text-md placeholder:text-slate-500 placeholder:italic md:w-[40rem]'
              />
            </form>

            <h2 className='text-md text-gray-200'>
              Explore Our Exquisite Restaurant Listings
            </h2>
          </div>
        </div>
      </header>

      {/* Restaurant Listings */}
      <main className='w-full py-10 bg-gray-100'>
        {/* Section title */}
        <h1 className='text-2xl text-slate-800 text-center font-semibold'>
          Featured Restaurants
        </h1>

        <div className='w-full m-auto mt-8 px-4'>
          <div className='w-full grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
            {restaurants.map((restaurant, index) => (
              <RestaurantCard key={index} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer section */}
      <footer className='w-full py-6 bg-slate-800 flex items-center justify-center'>
        <span className='text-gray-200'>
          Copyright &copy; 2023 DiningDash. All rights reserved.
        </span>
      </footer>
    </>
  );
};

export default HomePage;
