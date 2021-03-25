import { ChildrenProps } from './types';
import { TodoTemplateBlock } from '../styles';

function TodoTemplate({ children }: ChildrenProps) {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;