// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import './controllers';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/createStore';

import Greetings from './greetings';

function App() {
  return (
    <>
      <nav>
        <Link to="/greetings">Greetings</Link>
        <Link to="/home">Home</Link>
      </nav>
      <Routes>
        <Route path="/greetings" element={<Greetings />} />
        <Route path="/home" element={<h1>Hello World!</h1>} />
      </Routes>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
