import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}
const Button: React.FC<ButtonProps> = ({ title, ...props }) => {
  return (
    <button {...props}>
      {title === "Back" && <ArrowLeftOutlined />}
      {title}
      {title === "Next" && <ArrowRightOutlined />}
    </button>
  );
};

export default Button;
