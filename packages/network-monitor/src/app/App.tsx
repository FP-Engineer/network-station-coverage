import 'normalize.css';
import { feature } from './App.css';
import { useStations } from '../features/monitor';
import { Monitor } from '../features/monitor/components/monitor';

export function App() {

	return (
		<div className={ feature }>
			<Monitor useStations={ useStations } />
		</div>
	);
}

export default App
