import { Dispatch, SetStateAction } from 'react';

export interface CardInfoContextModel {
	cardHolderName: string;
	setCardHolderName: Dispatch<SetStateAction<string>>;
	cardNumber: string;
	setCardNumber: Dispatch<SetStateAction<string>>;
	cardMMExp: string;
	setCardMMExp: Dispatch<SetStateAction<string>>;
	cardYYExp: string;
	setCardYYExp: Dispatch<SetStateAction<string>>;
	cardCvv: string;
	setCardCvv: Dispatch<SetStateAction<string>>;
	formSubmission: boolean;
	setFormSubmission: Dispatch<SetStateAction<boolean>>;
}
