import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import AddTodoItem from './components/AddTodoItem';
import { TodoContextProvider } from './components/TodoContext';
import { GlobalStyle } from './styles';

function App() {
  return (
    <TodoContextProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <AddTodoItem />
      </TodoTemplate>
    </TodoContextProvider>
  );
}

export default App;
