import { useContext } from 'react';
import { CardInfoGlobalContext } from '../../context/cardInfoContext';
import Button from '../../components/Button/Button';
import checkMark from '../../../public/assets/images/icon-complete.svg';

const Confirmation = () => {
	const {
		setFormSubmission,
		setCardHolderName,
		setCardNumber,
		setCardMMExp,
		setCardYYExp,
		setCardCvv,
	} = useContext(CardInfoGlobalContext);

	return (
		<main>
			<img src={checkMark} alt='check mark'></img>
			<h1>Thank you!</h1>
			<h2>We've added your card details</h2>
			<Button
				type={'button'}
				buttonText={'Continue'}
				onClick={() => {
					setFormSubmission(false);
					setCardHolderName('');
					setCardNumber('');
					setCardMMExp('');
					setCardYYExp('');
					setCardCvv('');
				}}
			></Button>
		</main>
	);
};

export default Confirmation;
