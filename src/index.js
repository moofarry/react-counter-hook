import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp'
import './css/index.css'

const divRoot = document.querySelector('#root');

const inicio = 0;


ReactDOM.render( <CounterApp value={inicio} />, divRoot );