import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css';
import { Provider } from "react-redux";
import ConfigureStore from "./store/configurestore";

 const store=ConfigureStore();

ReactDOM.render(
<Provider store={store}>
<App  />
</Provider>,
document.getElementById('root')
);





