import { useState } from 'react';
import { FcAddImage } from 'react-icons/fc';
import { FaSave } from 'react-icons/fa';
import { Button, Input } from '../../components/Input';
import AdminPageTitle from '../../components/AdminPageTitle';
import ImagePreview from '../../components/ImagePreview';

const RestaurantAddForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    cuisine: '',
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormData({ ...formData, name: '', location: '', cuisine: '' });
  };

  return (
    <div className='w-full'>
      <div className='md:w-4/5 md:mx-auto md:pt-4'>
        <AdminPageTitle title='Add New Restaurant' />
      </div>

      <div className='w-full md:w-4/5 md:mx-auto'>
        <form onSubmit={handleSubmit} className='space-y-8'>
          <div>
            <span className='block text-lg text-slate-500 text-semibold mb-4'>
              Select restaurant image:
            </span>
            <label htmlFor='imageSrc'>
              <input
                type='file'
                name='imageSrc'
                id='imageSrc'
                accept='image/*'
                onChange={handleImageChange}
                className='hidden'
              />
              <div className=''>
                {/* Upload button */}

                {selectedImage === null && (
                  <div className='w-full h-32 text-5xl border-2 border-slate-400 border-dashed rounded-md flex items-center justify-center cursor-pointer hover:text-green-500'>
                    <FcAddImage />
                  </div>
                )}

                {/* Preview */}
                {selectedImage !== null && <ImagePreview src={selectedImage} />}
              </div>
            </label>
          </div>

          <Input
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter restaurant name'
          />

          <Input
            name='location'
            value={formData.location}
            onChange={handleChange}
            placeholder='Restaurant location'
          />

          <Input
            name='cuisine'
            value={formData.cuisine}
            onChange={handleChange}
            placeholder='Cuisine type'
          />

          <Button icon={FaSave}>Save</Button>
        </form>
      </div>
    </div>
  );
};

export default RestaurantAddForm;
