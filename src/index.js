import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { TasksProvider } from './contexts/tasksContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <TasksProvider>
      <App />
    </TasksProvider>
  </Router>
);
