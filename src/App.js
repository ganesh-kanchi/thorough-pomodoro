import './App.css';
import { Homepage } from './pages/Homepage/Homepage';
import {Routes,Route} from 'react-router-dom';
import {TasksPage} from './pages/TasksPage/TasksPage'
import { Pomodoro } from './pages/Pomodoro/Pomodoro';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='/pomodoro' element={<Pomodoro />} />
      </Routes>
    </div>
  );
}

export default App;