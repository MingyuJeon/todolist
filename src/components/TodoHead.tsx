import { useTodoState } from './TodoContext';
import { TodoHeadBlock } from '../styles';

function TodoHead() {
    const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const _date: Date = new Date();
    const month: number = _date.getMonth();
    const date: number = _date.getDate();
    const year: number = _date.getFullYear();
    const day: string = days[_date.getDay()];
    const todayDate: string = `${month} / ${date} / ${year}`;

    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);

    return (
        <TodoHeadBlock>
            <h1>{todayDate}</h1>
            <div className="day">{day}</div>
            <div className="tasks-left">To do: {undoneTasks.length} left</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;