import React from 'react';
import ReactDOM from 'react-dom/client';
import Provider from './context';
import App from './components/app/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
