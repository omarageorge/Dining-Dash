import { Link } from 'react-router-dom';
import AdminPageTitle from '../../components/AdminPageTitle';

const RestaurantsList: React.FC = () => {
  const restaurants = [
    {
      name: 'Restaurant 1',
      location: 'Wakiso',
      cuisine: 'Italian',
    },
    {
      name: 'Restaurant 2',
      location: 'Kampala',
      cuisine: 'Mexican',
    },
    {
      name: 'Restaurant 3',
      location: 'Gulu',
      cuisine: 'Chinese',
    },
    {
      name: 'Restaurant 4',
      location: 'Entebbe',
      cuisine: 'Indian',
    },
    {
      name: 'Restaurant 5',
      location: 'Jinja',
      cuisine: 'Thai',
    },
    {
      name: 'Restaurant 6',
      location: 'Mbarara',
      cuisine: 'American',
    },
  ];

  return (
    <div className='w-full'>
      <AdminPageTitle title='Restaurant Information' />

      <table>
        <caption className='hidden'>Restaurant Information</caption>
        <thead>
          <tr>
            <th>Restaurant</th>
            <th>Location</th>
            <th>Cuisine</th>
            <th className='md:text-center'>Options</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant, index) => (
            <tr key={index}>
              <td data-cell='Restaurant:'>{restaurant.name}</td>
              <td data-cell='Location:'>{restaurant.location}</td>
              <td data-cell='Cuisine:'>{restaurant.cuisine}</td>
              <td
                data-cell='Options:'
                className='md:flex md:items-center md:justify-center'
              >
                <div className='space-x-3'>
                  {/* Details */}
                  <Link to='/admin/restaurants/edit'>
                    <span className='rounded-sm border-4 border-slate-50 p-1 bg-slate-100 hover:bg-slate-300 transition-all delay-100 ease-in text-slate-600'>
                      <span>Details</span>
                    </span>
                  </Link>

                  {/* Menu */}
                  <Link to='/admin/restaurants/edit'>
                    <span className='rounded-sm border-4 border-green-50 p-1 bg-green-100 hover:bg-green-300 transition-all delay-100 ease-in text-green-600'>
                      <span>Menu</span>
                    </span>
                  </Link>

                  {/* Delete */}
                  <button className='rounded-sm border-4 border-red-50 p-1 bg-red-100 hover:bg-red-300 transition-all delay-100 ease-in text-red-600'>
                    <span>Delete</span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantsList;
