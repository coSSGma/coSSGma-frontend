import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
//import { worker } from './mocks/browsers.ts';

//worker.start().then(() => {
  createRoot(document.getElementById('root')!).render(
    <App />
  );
//});
