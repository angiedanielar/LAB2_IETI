import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Login } from './components/Login';
import TodoApp from './components/TodoApp';
import Swal from 'sweetalert2';

const App = () => {

    //Save data
    localStorage.setItem('user', "daniela@gmail.com");
    localStorage.setItem('pass', "hola123");

    //localStorage.setItem("isLoggedIn", "false");

    let isLogged = localStorage.getItem("isLoggedIn");

    if (isLogged === "false") {
        isLogged = false;
    }

    else if (isLogged === "true") {
        isLogged = true;
    }

    const [isLoggedIn, setisLoggedIn] = useState(isLogged);

    const handleSuccessfullyLogin = (e) => {
        Swal.fire({
            title: 'Yei!',
            text: 'Welcome',
            timer: 2000,
            timerProgressBar: false,
            icon: 'success',
            showConfirmButton: false
        })
        setisLoggedIn(true);
        localStorage.setItem("isLoggedIn", 'true');
    }

    const handleFailedLogin = (e) => {
        Swal.fire({
            title: 'Error!',
            text: 'Data incorrect',
            icon: 'error',
            showConfirmButton: true
        })
        setisLoggedIn(false);
        localStorage.setItem("isLoggedIn", 'false');
    }

    const LoginView = () => (
        <Login correct={handleSuccessfullyLogin} incorrect={handleFailedLogin} />
    );

    const TodoAppView = () => (
        <TodoApp />
    );

    return (
        <Router>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">TODO React App</h1>
            </header>

            <div>
                <Route exact path="/todo" component={TodoAppView}/>
                {!isLoggedIn && (<Route path="/" component={LoginView}/>)}
                {isLoggedIn && (<Route path="/" component={TodoAppView}/>)}
            </div>
        </div>
    </Router>
    );

}

export default App;
