
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
//   onNavigate?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  title,
  children,
//   onNavigate,
  ...props
}) => {
    const handleNavigate = () =>{
        window.scroll(0,0)
    }
  return (
    <button {...props} onClick={handleNavigate}>
      {children}
    </button>
  );
};

export default Button;
