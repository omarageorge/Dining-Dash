import { FaTimes } from 'react-icons/fa';

type RestaurantDish = {
  name: string;
  description: string;
  ingredients: string;
  price: number;
};

type DishProps = {
  dish: RestaurantDish;
};

const Dish: React.FC<DishProps> = ({ dish }) => {
  return (
    <div className='w-full border-8 border-gray-50 bg-gray-100 p-3 rounded-md md:w-96'>
      <div className='w-full flex items-center justify-end hover:text-red-600 cursor-pointer'>
        <FaTimes />
      </div>

      <h2 className='text-sm font-semibold md:text-lg'>{dish.name}</h2>
      <p className='text-sm text-gray-600 mb-2  md:text-md'>
        {dish.description}
      </p>
      <p>
        <span className='text-sm text-gray-800 font-semibold  md:text-md'>
          Ingredients:
        </span>
        <span className='text-sm text-gray-700 ml-1  md:text-md'>
          {dish.ingredients}
        </span>
      </p>
      <p>
        <span className='text-sm text-gray-800 font-semibold  md:text-md'>
          Price:
        </span>
        <span className='text-sm text-gray-700 ml-1 md:text-md'>
          {dish.price} UGX
        </span>
      </p>
    </div>
  );
};

export default Dish;
