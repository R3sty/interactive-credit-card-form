import { GlobalButton } from './button.model';

const Button: React.FC<GlobalButton> = ({ type, buttonText, onClick }) => {
	return (
		<button type={type} onClick={onClick}>
			{buttonText}
		</button>
	);
};

export default Button;
