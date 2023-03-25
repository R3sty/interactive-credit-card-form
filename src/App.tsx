import CardForm from './sections/credit_card_form/CardForm';
import CardContainer from './sections/credit_card_container/CardContainer';
import { CardInfoContextProvider } from './context/cardInfoContext';

function App() {
	return (
		<div className='app'>
			<CardInfoContextProvider>
				<CardContainer />
				<CardForm />
			</CardInfoContextProvider>
		</div>
	);
}

export default App;
