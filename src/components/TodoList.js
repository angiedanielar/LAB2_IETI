import React from 'react';
import { Todo } from './Todo';

export const TodoList = ({ todoList }) => {

    const lista = todoList.map((todo, i) => {
        return (
            <Todo key={i} text={todo.text} priority={todo.priority} dueDate={todo.dueDate} />
        );
    });

    return (
        <div>
            <table>
                <thead>
                    <th>Task</th>
                    <th>Priority</th>
                    <th>Due Date</th>
                </thead>
                <tbody>
                {lista}
                </tbody>
            </table>
        </div>
    )
}
