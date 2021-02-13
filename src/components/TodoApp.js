import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import { TodoList } from './TodoList';

const TodoApp = () => {

    const [text, settext] = useState("");
    const [priority, setpriority] = useState(0);
    const [dueDate, setdueDate] = useState(moment());
    const [items, setitems] = useState([]);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!text.length || !priority.length || !dueDate)
            return;

        const newItem = {
            text: text,
            priority: priority,
            dueDate: dueDate,

        };

        setitems([...items, newItem]);
        
        settext('');
        setpriority('');

    }

    const handleTextChange = (e) => {
        settext(e.target.value);
    }

    const handlePriorityChange = (e) => {
        setpriority(e.target.value);
    }

    const handleDateChange = (date) => {
        setdueDate(date);
    }

    return (
        <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TODO React App</h1>
                </header>
                <form onSubmit={handleSubmit} className="todo-form">
                    <h3>New TODO</h3>
                    <label htmlFor="text" className="right-margin">
                        Text:
                    </label>

                    <input
                        id="text"
                        onChange={handleTextChange}
                        value={text}>
                    </input>

                    <br/>
                    <br/>
                    <label htmlFor="priority" className="right-margin">
                        Priority:
                    </label>

                    <input
                        id="priority"
                        type="number"
                        onChange={handlePriorityChange}
                        value={priority}>
                    </input>
                    <br/>
                    <br/>

                    <DatePicker>

                        id="due-date"
                        selected={dueDate}
                        placeholderText="Due date"
                        onChange={(dueDate) => handleDateChange(dueDate)}>
                    </DatePicker>
                    <br/>
                    <button>
                        Add #{items.length + 1}
                    </button>
                </form>
                <br/>
                <br/>
                <TodoList todoList={items}/>
            </div>
    )
}

export default TodoApp;
