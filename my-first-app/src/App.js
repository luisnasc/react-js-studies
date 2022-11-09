import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';


function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' />
      <Todo text='Develop Navigation Setup' />

    </div>
  );
}

export default App;
