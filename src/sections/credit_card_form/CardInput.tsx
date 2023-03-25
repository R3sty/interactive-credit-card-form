import CardInputProps from './CardInputModel';
import { useState, ChangeEvent } from 'react';
import { validateInput, handleErrorMessage } from './validateInput';

const CardInput = ({
	type,
	formTitle,
	labelId,
	placeholder,
	maxLength,
	minLength,
	min,
	max,
	list,
	errorMessage,
	onChangeVal,
}: CardInputProps) => {
	const [error, setError] = useState('');

	return (
		<>
			<label htmlFor={labelId}>{formTitle}</label>
			<input
				type={type ?? 'number'}
				id={labelId}
				placeholder={placeholder}
				maxLength={maxLength}
				minLength={minLength}
				onChange={(e) => {
					validateInput(e);
					onChangeVal(e);
					handleErrorMessage(e, setError, errorMessage);
				}}
				required
			/>
			<span>{error}</span>
		</>
	);
};

export default CardInput;
