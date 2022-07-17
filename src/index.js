import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { TasksProvider } from './contexts/tasksContext';
import { ThemeProvider } from './contexts/themeContext';

const root = document.getElementById('root');
ReactDOM.render(
  <Router>
    <ThemeProvider>
      <TasksProvider>
        <App />
      </TasksProvider>
    </ThemeProvider>
  </Router>, root
);
