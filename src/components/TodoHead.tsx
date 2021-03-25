import { useTodoState } from './customHooks';
import { TodoHeadBlock } from '../styles';

function TodoHead() {
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);
    const today = new Date();
    const dateString = today.toLocaleDateString('en', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('en', { weekday: 'long' });

    return (
        <TodoHeadBlock>
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
            <div className="tasks-left">To do: {undoneTasks.length} left</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;