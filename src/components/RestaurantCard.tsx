import { FaConciergeBell, FaMapMarkerAlt } from 'react-icons/fa';

type Restaurant = {
  name: string;
  location: string;
  imageSrc: string;
  cuisine: string;
};

type RestaurantCardProps = {
  restaurant: Restaurant;
};

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <a href='/restaurant'>
      <div className='rounded-md overflow-hidden shadow-md'>
        <img
          src={restaurant.imageSrc}
          alt={restaurant.name}
          className='w-full h-44 object-cover'
        />
        <div className='bg-whites text-gray-800 p-4'>
          <span className='font-semibold '>{restaurant.name}</span>

          <div className='w-full h-auto flex items-center justify-between mt-1 text-sm '>
            <span className='flex items-center'>
              <FaConciergeBell color='orange' />
              <span className='ml-1'>{restaurant.cuisine}</span>
            </span>
            <span className='flex items-center'>
              <FaMapMarkerAlt color='red' />
              <span className='ml-1'>{restaurant.location}</span>
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default RestaurantCard;
