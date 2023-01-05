interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}
const Input: React.FC<InputProps> = ({ placeholder, ...props }) => {
  return <input {...props}></input>;
};

export default Input;
