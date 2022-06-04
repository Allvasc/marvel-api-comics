import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MapProvider } from './context/MapContext'
import { ComicProvider } from './context/ComicContext'
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MapProvider>
      <ComicProvider>
        <App />
      </ComicProvider>
    </MapProvider>
  </React.StrictMode>
);

