import { FaHome, FaConciergeBell, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../components/Footer';
import SubTitle from '../components/SubTitle';
import MenuItem from '../components/MenuItem';
import DiningDashLogo from '../components/DiningDashLogo';

const RestaurantPage: React.FC = () => {
  const menuItems = [
    {
      name: 'Grilled Chicken',
      description: 'Juicy grilled chicken marinated with herbs and spices.',
      ingredients: 'Chicken, herbs, spices',
      price: 25000, // Price in UGX
    },
    {
      name: 'Margherita Pizza',
      description:
        'Classic pizza topped with tomato sauce, mozzarella cheese, and basil.',
      ingredients: 'Tomato sauce, mozzarella cheese, basil',
      price: 18000, // Price in UGX
    },
    {
      name: 'Beef Burger',
      description:
        'Delicious beef patty burger with lettuce, tomato, cheese, and pickles.',
      ingredients: 'Beef patty, lettuce, tomato, cheese, pickles',
      price: 15000, // Price in UGX
    },
    {
      name: 'Vegetable Stir-Fry',
      description: 'Assorted vegetables stir-fried in soy sauce and garlic.',
      ingredients: 'Assorted vegetables, soy sauce, garlic',
      price: 12000, // Price in UGX
    },
    {
      name: 'Pasta Carbonara',
      description:
        'Classic Italian pasta dish with spaghetti, bacon, eggs, and Parmesan cheese.',
      ingredients: 'Spaghetti, bacon, eggs, Parmesan cheese',
      price: 20000, // Price in UGX
    },
    {
      name: 'Fish and Chips',
      description:
        'Crispy fish fillet served with potato fries and tartar sauce.',
      ingredients: 'Fish fillet, potato fries, tartar sauce',
      price: 22000, // Price in UGX
    },
  ];

  return (
    <>
      {/* Navigation menu */}
      <nav className='flex items-center justify-between px-8 py-8 bg-gray-100'>
        <DiningDashLogo />

        <a href='/' className='text-xl text-gray-600'>
          <FaHome />
        </a>
      </nav>

      {/* Header section */}
      <header className='relative z-10 w-full h-[65vh]'>
        <div className='absolute z-20 w-full h-full bg-[url("/images/header-background.jpg")] bg-cover bg-center'></div>
        <div className='absolute z-30 w-full h-full bg-black opacity-70'></div>
        <div className='absolute z-40 w-full h-full flex items-center justify-center'>
          <div className='space-y-6'>
            <h1 className='font-semibold text-4xl text-center text-gray-50'>
              Restaurant Name
            </h1>
            <div className='flex items-center justify-center space-x-6 text-white'>
              <span className='flex items-center'>
                <FaMapMarkerAlt color='red' />
                <span className='ml-1'>Location</span>
              </span>
              <span className='flex items-center'>
                <FaConciergeBell color='orange' />
                <span className='ml-1'>Cuisine</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main section */}
      <main className='w-full h-auto bg-white py-10'>
        {/* Section title */}
        <SubTitle text='Menu' />

        <div className='w-full h-auto mt-5 p-4 grid grid-cols-1 justify-items-center gap-4  md:grid-cols-2 md:w-[60%] md:bg-gray-50 md:mx-auto md:mt-10'>
          {menuItems.map((dish, index) => (
            <MenuItem key={index} dish={dish} />
          ))}
        </div>
      </main>

      {/* Footer section */}
      <Footer />
    </>
  );
};

export default RestaurantPage;
