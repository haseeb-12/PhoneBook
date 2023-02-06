import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextHelper } from './Context/ContextHelper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextHelper>
    <App/>
  </ContextHelper>
);
