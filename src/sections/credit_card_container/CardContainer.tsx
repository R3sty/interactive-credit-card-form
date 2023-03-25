import { useContext } from 'react';
import { CardInfoGlobalContext } from '../../context/cardInfoContext';

const CardContainer = () => {
	const { cardHolderName, cardNumber, cardMMExp, cardYYExp, cardCvv } =
		useContext(CardInfoGlobalContext);

	const formatCcNumber = (num: string): string => {
		const formatted = num.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
		return formatted;
	};

	return (
		<div>
			<div>
				<svg
					width='84'
					height='47'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<ellipse cx='23.478' cy='23.5' rx='23.478' ry='23.5' fill='#fff' />
					<path
						d='M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z'
						stroke='#fff'
					/>
				</svg>
				<div>
					<p>
						{!cardNumber ? '0000 0000 0000 0000' : formatCcNumber(cardNumber)}
					</p>
					<h1>
						<p>{!cardHolderName ? 'Jane Appleseed' : cardHolderName}</p>
						<p>
							<span>{!cardMMExp ? '00/' : <span>/</span> + cardMMExp}</span>
							<span>{!cardYYExp ? '00' : cardYYExp}</span>
						</p>
					</h1>
				</div>
			</div>

			<div>
				<p>{!cardCvv ? '000' : cardCvv}</p>
			</div>
		</div>
	);
};

export default CardContainer;
