import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { AuthContentProvider } from './context/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContentProvider>
        <App />
    </AuthContentProvider>
);
