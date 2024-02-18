import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';

// import 'antd/dist/reset.css';

// ReactDOM.render(
//     <Router>
//         <App />
//     </Router>
//      , document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>      
    {/* wrap this app in provider because how every component in App have access to store variable */}
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
