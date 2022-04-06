import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

import App from './pages/App';
import { Home } from './pages/Home';

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Routes>
            
      <Route path="/" element={<Home />}/>
      <Route path="/app" element={<App />}/>

    </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
