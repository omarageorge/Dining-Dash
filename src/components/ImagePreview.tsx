type ImagePreviewProps = {
  src: string;
};

const ImagePreview: React.FC<ImagePreviewProps> = ({ src }) => {
  return (
    <img
      src={src}
      alt='Selected'
      className='block w-full h-32 rounded-md shadow-md object-cover overflow-hidden'
    />
  );
};

export default ImagePreview;
