import React from 'react';

export const Todo = ({ text, priority, dueDate }) => {
    return (
            <tr>
                <td>{text}</td>
                <td>{priority}</td>
                <td>{dueDate.format('DD-MM-YYYY')}</td>
            </tr>
    )
}
