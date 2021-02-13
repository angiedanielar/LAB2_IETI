import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css';

export const Login = ({correct,incorrect}) => {

    //Read data
    localStorage.getItem('user');
    localStorage.getItem('pass');

    const [user, setuser] = useState("")
    const [pass, setpass] = useState("")

    const handleUserChange = (e) =>{
        setuser(e.target.value)
    }

    const handlePassChange = (e) =>{
        setpass(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(user === localStorage.getItem("user") && pass === localStorage.getItem("pass")){
            correct();
        } else {
            incorrect();
        }
    }


    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form className="form" onSubmit={handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus onChange={handleUserChange}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={handlePassChange}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        </div>
    )
}


