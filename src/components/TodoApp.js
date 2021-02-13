import React, { useState } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import { TodoList } from './TodoList';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';

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
        <div>
            <div className="App">
                <form onSubmit={handleSubmit} className="todo-form">

                    <Typography variant="h2">New TODO</Typography>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="text">Text:</InputLabel>
                        <Input id="text" name="text" autoFocus onChange={handleTextChange} />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="number">Priority:</InputLabel>
                        <Input id="priority" name="priority" autoFocus onChange={handlePriorityChange} />
                    </FormControl>
                    <br></br>
                    <br></br>
                    <DatePicker

                        id="due-date"
                        selected={dueDate}
                        placeholderText="Due date"
                        onChange={(dueDate) => handleDateChange(dueDate)}>
                    </DatePicker>
                    <br></br>
                    <br></br>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="submit">
                        Add #{items.length + 1}
                    </Button>
                </form>
                <br></br>
                <br></br>
                <TodoList todoList={items} />
            </div>
        </div>
    )
}

export default TodoApp;
