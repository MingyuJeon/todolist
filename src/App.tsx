import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import AddTodoItem from './components/AddTodoItem';
import { TodoProvider } from './components/TodoContext';
import { GlobalStyle } from './styles';

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <AddTodoItem />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
