import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Input, Button } from '../../components/Input';
import AdminPageTitle from '../../components/AdminPageTitle';
import { RestaurantDish } from '../../components/Dish';

const RestaurantAddDish: React.FC = () => {
  const [formData, setFormData] = useState<RestaurantDish>({
    name: '',
    description: '',
    ingredients: '',
    price: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='w-full pt-8'>
      <form className='w-full space-y-6 md:w-4/5 md:mx-auto'>
        <AdminPageTitle title='Add New Dish' />
      </form>

      <div className='mt-8'>
        <form className='w-full space-y-6 md:w-4/5 md:mx-auto'>
          <Input
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Dish name'
          />
          <Input
            name='description'
            value={formData.description}
            onChange={handleChange}
            placeholder='Description'
          />
          <Input
            name='ingredients'
            value={formData.ingredients}
            onChange={handleChange}
            placeholder='Ingredients'
          />
          <Input
            name='price'
            value={formData.price}
            onChange={handleChange}
            placeholder='Price'
          />

          <Button icon={FaPlus}>Add</Button>
        </form>
      </div>
    </div>
  );
};

export default RestaurantAddDish;
