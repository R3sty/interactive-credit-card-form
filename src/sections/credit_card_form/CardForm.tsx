import CardInput from './CardInput';
import { errorMessages } from './validateInput';
import { useCardInfoContext } from '../../context/cardInfoContext';
import FormContainer from './CardFormContainer';
import Button from '../../components/Button/Button';
import '../../scss/styles.scss';
import Confirmation from '../confirmation/Confirmation';

const errors = errorMessages();

const CardForm = () => {
	const {
		setCardHolderName,
		setCardNumber,
		setCardMMExp,
		setCardYYExp,
		setCardCvv,
		formSubmission,
		cardHolderName,
		cardNumber,
		cardCvv,
		cardYYExp,
		cardMMExp,
	} = useCardInfoContext();
	return (
		<main className='form-container'>
			{(!formSubmission && (
				<FormContainer>
					<CardInput
						type='text'
						formTitle={'Cardholder name'}
						labelId={'card-holder-name'}
						placeholder={'e.g. Jane Appleseed'}
						minLength={2}
						maxLength={40}
						errorMessage={errors.nameError}
						onChangeVal={(e) => {
							setCardHolderName(e.target.value.trim());
							console.log('cardholder name:', cardHolderName);
						}}
					/>
					<CardInput
						type='tel'
						formTitle={'Card number'}
						labelId={'card-number'}
						placeholder={'e.g. 1234 5678 9123 0000'}
						minLength={13}
						maxLength={16}
						errorMessage={errors.cardNumberError}
						onChangeVal={(e) => {
							setCardNumber(e.target.value.replaceAll('', ''));
							console.log('card number:', cardNumber);
						}}
					/>

					<div className='__card-details'>
						<div className='__card-input'>
							<p>EXP. DATE (MM/YY)</p>
							<div className='__mmyy'>
								<div>
									<CardInput
										formTitle={''}
										labelId={'month'}
										placeholder={'MM'}
										min={1}
										max={12}
										errorMessage={errors.monthError}
										onChangeVal={(e) => {
											setCardMMExp(e.target.value);
										}}
									/>
								</div>
								<div>
									<CardInput
										formTitle={''}
										labelId={'year'}
										placeholder={'YY'}
										min={new Date().getFullYear() - 2000}
										errorMessage={errors.yearError}
										onChangeVal={(e) => {
											setCardYYExp(e.target.value);
										}}
									/>
								</div>
							</div>
						</div>

						<div className='__card-input-2'>
							<CardInput
								type='tel'
								formTitle={'CVC'}
								labelId={'cvc'}
								placeholder={'e.g. 123'}
								min={3}
								max={4}
								errorMessage={errors.cvvError}
								onChangeVal={(e) => {
									setCardCvv(e.target.value);
								}}
							/>
						</div>
					</div>
					<Button type={'submit'} buttonText={'Confirm'}></Button>
				</FormContainer>
			)) ||
				(formSubmission && (
					<div className='__confirmation'>
						<Confirmation />
					</div>
				))}
		</main>
	);
};

export default CardForm;
