import './App.css';
import { AddTodo } from './components/todo/Addtodo';
import TodoList from './components/todo/todoList';
import { Footer } from './components/visibilityFilter/Footer';

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
