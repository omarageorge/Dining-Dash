import { useState } from 'react';
import { FcAddImage } from 'react-icons/fc';
import { Button, FormGroup, Input, Label } from '../../components/Input';
import AdminPageTitle from '../../components/AdminPageTitle';
import ImagePreview from '../../components/ImagePreview';

const RestaurantEditForm: React.FC = () => {
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
        <AdminPageTitle title='Update Restaurant Information' />
      </div>

      <div className='w-full md:w-4/5 md:mx-auto'>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <Label text='Click below to select a new image:' />
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

          <FormGroup>
            <Label text='Restaurant name:' />
            <Input name='name' value={formData.name} onChange={handleChange} />
          </FormGroup>

          <FormGroup>
            <Label text='Restaurant location:' />
            <Input
              name='location'
              value={formData.location}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label text='Cuisine type:' />
            <Input
              name='cuisine'
              value={formData.cuisine}
              onChange={handleChange}
            />
          </FormGroup>

          <Button>Update</Button>
        </form>
      </div>
    </div>
  );
};

export default RestaurantEditForm;
