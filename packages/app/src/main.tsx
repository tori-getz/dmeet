import { attachLogger } from 'effector-logger';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '~/app';

if (import.meta.env.MODE !== 'production') {
  attachLogger();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
