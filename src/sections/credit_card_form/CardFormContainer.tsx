import { FormEvent, PropsWithChildren, useContext } from 'react';
import { CardInfoGlobalContext } from '../../context/cardInfoContext';

const FormContainer = ({ children }: PropsWithChildren) => {
	const {
		setFormSubmission,
		cardHolderName,
		cardNumber,
		cardMMExp,
		cardYYExp,
		cardCvv,
	} = useContext(CardInfoGlobalContext);

	const isFormValid = () => {
		const currentYear = new Date().getFullYear() % 100;
		const isCardHolderNameValid =
			cardHolderName.length > 1 &&
			cardHolderName.length <= 40 &&
			!/\d/.test(cardHolderName);
		const isCardNumberValid =
			cardNumber.length >= 13 &&
			cardNumber.length <= 16 &&
			!isNaN(Number(cardNumber));
		const isCardMMExpValid = Number(cardMMExp) >= 1 && Number(cardMMExp) <= 12;
		const isCardYYExpValid = Number(cardYYExp) >= currentYear;
		const isCardCvvValid =
			cardCvv.length >= 3 && cardCvv.length <= 4 && !isNaN(Number(cardCvv));

		return (
			isCardHolderNameValid &&
			isCardNumberValid &&
			isCardMMExpValid &&
			isCardYYExpValid &&
			isCardCvvValid
		);
	};

	const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (isFormValid()) {
			setFormSubmission(true);
			console.log(
				`${
					cardHolderName.endsWith('s')
						? cardHolderName + "'"
						: cardHolderName + "'s"
				} card data sent to wherever it should be sent`
			);
		} else {
			alert('Please check your credit card details and try again');
			throw new Error(
				'Payment failed. Please check your credit card details and try again'
			);
		}
	};

	return <form onSubmit={handleSubmitForm}>{children}</form>;
};

export default FormContainer;
