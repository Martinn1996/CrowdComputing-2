import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, HashRouter } from 'react-router-dom';
import Task1 from './components/Tasks/Task1';
import Task2 from './components/Tasks/Task2';
import Task3 from './components/Tasks/Task3';
import Task4 from './components/Tasks/Task4';
import Task5 from './components/Tasks/Task5';
import Home from './components/Home/Home';

ReactDOM.render(
	<React.StrictMode>
		<HashRouter >
			<Route exact path="/" component={Home} />
			<Route exact path="/task1" component={Task1} />
			<Route exact path="/task2" component={Task2} />
			<Route exact path="/task3" component={Task3} />
			<Route exact path="/task4" component={Task4} />
			<Route exact path="/task5" component={Task5} />
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
