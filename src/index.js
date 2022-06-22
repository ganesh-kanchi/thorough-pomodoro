import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { TasksProvider } from './contexts/tasksContext';

const root = document.getElementById('root');
ReactDOM.render(
  <Router>
    <TasksProvider>
      <App />
    </TasksProvider>
  </Router>, root
);
