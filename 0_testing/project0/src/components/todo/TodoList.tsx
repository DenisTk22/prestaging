import { ReactElement, useMemo } from 'react';
import { filterTodos } from './utils.js'

export default function TodoList(todos: { id: number, text: string, completed: boolean }[], tab: unknown): ReactElement {
    const visibleTodos = useMemo(
        () => filterTodos(todos, tab),
        [todos, tab]
    );
    return (
        <div>
            <p><b>Note: <code>filterTodos </code> is artificially slowed down!</b > </p>
            <ul>
                {
                    visibleTodos.map((todo: { id: number, text: string, completed: boolean }) => (
                        <li key={todo.id} >
                            {
                                todo.completed ?
                                    <s>{todo.text} </s> :
                                    todo.text
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}