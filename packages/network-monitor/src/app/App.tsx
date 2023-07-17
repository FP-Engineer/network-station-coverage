import 'normalize.css';
import { feature } from './App.css';
import { useStations } from '../features/monitor';
import { useDevices } from '../features/monitor/connectors/devices';
import { Monitor } from '../features/monitor/components/monitor';

export function App() {

	return (
		<div className={ feature }>
			<Monitor
				useStations={ useStations }
				useDevices={ useDevices }
			/>
		</div>
	);
}

export default App
