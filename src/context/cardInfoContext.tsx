import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { CardInfoContextModel } from './CardInfoContextModel';

export const CardInfoGlobalContext = createContext<CardInfoContextModel>({
	cardHolderName: '',
	setCardHolderName: () => {},
	cardNumber: '',
	setCardNumber: () => {},
	cardMMExp: '',
	setCardMMExp: () => {},
	cardYYExp: '',
	setCardYYExp: () => {},
	cardCvv: '',
	setCardCvv: () => {},
	formSubmission: false,
	setFormSubmission: () => {},
});

type CardInfoContextProps = PropsWithChildren<{}>;

export const CardInfoContextProvider = ({
	children,
}: CardInfoContextProps): JSX.Element => {
	const [cardHolderName, setCardHolderName] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	const [cardMMExp, setCardMMExp] = useState('');
	const [cardYYExp, setCardYYExp] = useState('');
	const [cardCvv, setCardCvv] = useState('');
	const [formSubmission, setFormSubmission] = useState(false);

	const contextValue: CardInfoContextModel = {
		cardHolderName,
		setCardHolderName,
		cardNumber,
		setCardNumber,
		cardMMExp,
		setCardMMExp,
		cardYYExp,
		setCardYYExp,
		cardCvv,
		setCardCvv,
		formSubmission,
		setFormSubmission,
	};

	return (
		<CardInfoGlobalContext.Provider value={contextValue}>
			{children}
		</CardInfoGlobalContext.Provider>
	);
};

export const useCardInfoContext = (): CardInfoContextModel =>
	useContext(CardInfoGlobalContext);
