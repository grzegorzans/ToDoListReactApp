import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import { LightDarkMode } from './components/LightDarkMode';

function App() {
  return (
    <div className="App">
      <TodoWrapper />
      <LightDarkMode />
    </div>
  );
}

export default App;