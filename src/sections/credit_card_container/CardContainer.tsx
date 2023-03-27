import { useContext } from 'react';
import { CardInfoGlobalContext } from '../../context/cardInfoContext';
import cardFront from '../../assets/images/bg-card-front.png';

const CardContainer = () => {
	const { cardHolderName, cardNumber, cardMMExp, cardYYExp, cardCvv } =
		useContext(CardInfoGlobalContext);

	const formatCcNumber = (num: string): string => {
		const formatted = num.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
		return formatted;
	};

	return (
		<main className='__main'>
			<div className='__card-front'>
				<svg
					className='__card-logo'
					viewBox='0 0 84 47'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<ellipse cx='23.478' cy='23.5' rx='23.478' ry='23.5' fill='#fff' />
					<path
						d='M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z'
						stroke='#fff'
					/>
				</svg>
				<div className='__card-details'>
					<p className='__card-number'>
						{!cardNumber ? '0000 0000 0000 0000' : formatCcNumber(cardNumber)}
					</p>
					<div className='__card-holder'>
						<p>{!cardHolderName ? 'Jane Appleseed' : cardHolderName}</p>
						<p className='__card-expiry'>
							{!cardMMExp ? <span>00/</span> : <span>{cardMMExp}/</span>}
							<span>{!cardYYExp ? '00' : cardYYExp}</span>
						</p>
					</div>
				</div>
			</div>

			<div className='__card-back'>
				<p className='__card-cvv'>{!cardCvv ? '000' : cardCvv}</p>
			</div>
		</main>
	);
};

export default CardContainer;
