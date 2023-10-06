import { createRoot } from 'react-dom/client';
import { App } from '/src/pages/App.js';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
