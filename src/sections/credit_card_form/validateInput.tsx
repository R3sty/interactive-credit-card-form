import { ChangeEvent, Dispatch } from 'react';
import CardInputModel from './CardInputModel';

const getCurrentYear = (): number => new Date().getFullYear();

export const errorMessages = () => ({
	nameError: () => 'Enter your name as it appears in your credit card.',
	cardNumberError: () => 'Enter a valid 16-digit card number.',
	monthError: () => 'Enter a valid month (1-12).',
	yearError: () =>
		`Enter a valid year, equal or greater than ${getCurrentYear()}.`,
	cvvError: () => 'Enter a valid 3-digit CVV code.',
});

export const validateInput = (e: ChangeEvent<HTMLInputElement>) => {
	const target = e.target as HTMLInputElement;
	const value = target.value;
	if (['tel', 'number'].includes(target.type)) {
		const sanitizedValue = value.trim().replace(/[A-ú]/gi, '');
		target.value = sanitizedValue;

		if (target.id === 'month') {
			const monthValue = Number(value);
			if (monthValue < 1 || monthValue > 12) {
				target.value = value.replaceAll(/[0-9]/g, '');
				target.setCustomValidity(
					'Remember numerical months go between 1 and 12'
				);
			} else {
				target.setCustomValidity('');
			}
		}

		if (target.id === 'year' && target.value.length > 2) {
			target.value = value.replace(/[0-9]/g, '');
		}

		if (target.id === 'cvc') {
			target.value = value.replace(/[^0-9]/g, '').substring(0, 3);
		}
	}

	if (target.type === 'text') {
		const sanitizedValue = value.replace(/[0-9]/g, '').replace(/\s+/g, ' ');
		target.value = sanitizedValue;
	}
};

export const handleErrorMessage = (
	e: ChangeEvent<HTMLInputElement>,
	errorSetter: Dispatch<React.SetStateAction<string>>,
	errorMessage: CardInputModel['errorMessage']
) => {
	!e.target.validity.valid ? errorSetter(errorMessage()) : errorSetter('');
};
