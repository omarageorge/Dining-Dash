import { FaPlus } from 'react-icons/fa';
import AdminPageTitle from '../../components/AdminPageTitle';
import Dish from '../../components/Dish';

const RestaurantMenu = () => {
  const dishes = [
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
    <div className='w-full pb-5'>
      <AdminPageTitle title='Menu' />

      <div className='flex items-center justify-end'>
        <button className='flex items-center justify-center space-x-2 bg-slate-500 hover:bg-slate-600 border-8 border-slate-400 rounded-md py-2 px-4 text-white'>
          <span>
            <FaPlus />
          </span>
          <span>Add Menu Item</span>
        </button>
      </div>

      {/* Menu Items */}
      <div className='mt-8 w-4/5 mx-auto grid grid-cols-2 gap-4 justify-items-center'>
        {dishes.map((dish, index) => (
          <Dish key={index} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
