import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';

const root = ReactDOM.createRoot(document.getElementById('root')!);

if (import.meta.env.MODE === 'mock') {
	const { default: worker } = await import('./mocks/browser.ts');
	worker.start();
}

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
