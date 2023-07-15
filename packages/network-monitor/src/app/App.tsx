import 'normalize.css';
import './App.css';
import { useStations } from '../features/monitor';
import { Monitor } from '../features/monitor/components/monitor';

export function App() {

	return <Monitor useStations={useStations} />;
}

export default App
