type InputProps = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export const Input: React.FC<InputProps> = ({
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      type='text'
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className='w-full border-2 border-slate-500 rounded-md focus:outline-slate-800  focus:shadow-lg p-3'
    />
  );
};

type ButtonProps = {
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button
      type='submit'
      className='bg-slate-800 hover:bg-slate-700 transition delay-100 ease-in px-8 py-4 rounded-md shadow-md text-white font-semibold'
    >
      {children}
    </button>
  );
};

type FormGroupProps = {
  children: React.ReactNode;
};

export const FormGroup: React.FC<FormGroupProps> = ({ children }) => {
  return <div>{children}</div>;
};

type LabelProps = {
  text: string;
};

export const Label: React.FC<LabelProps> = ({ text }) => {
  return (
    <span className='block text-slate-600 text-extrabold mb-2'>{text}</span>
  );
};
