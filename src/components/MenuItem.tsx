type RestaurantDish = {
  name: string;
  description: string;
  ingredients: string;
  price: number;
};

type MenuItemProps = {
  dish: RestaurantDish;
};

const MenuItem: React.FC<MenuItemProps> = ({ dish }) => {
  return (
    <div className='w-full bg-gray-100 rounded-sm shadow-sm p-4 sm:w-[80%] md:w-96'>
      <h2 className='text-xl font-semibold'>{dish.name}</h2>
      <p className='text-gray-600 mb-2'>{dish.description}</p>
      <p>
        <span className='text-gray-800 font-semibold'>Ingredients:</span>
        <span className='text-gray-700 ml-1'>{dish.ingredients}</span>
      </p>
      <p>
        <span className='text-gray-800 font-semibold'>Price:</span>
        <span className='text-gray-700 ml-1'>{dish.price} UGX</span>
      </p>
    </div>
  );
};

export default MenuItem;
