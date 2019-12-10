import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';
import UserController from '../controller/UserController';

const useStyle= theme =>
    ({
        form:{
            marginTop:theme.spacing(8),
        },
        space:{
            marginTop:theme.spacing(2),
        },
        error: {
            backgroundColor: theme.palette.error.dark,
        },        
    });

class Register extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            firstName:"",
            lastName:"",
            email:"",
        }
    }
    
    render() {
     
        const { classes } = this.props;
        
        return (
            <Container maxWidth="xs" component="main">
                <form className={classes.form}>
                    <TextField variant="outlined" label="username" fullWidth autoFocus className={classes.space}  onChange={event => {this.setState({username:event.target.value})}} />
                    <TextField variant="outlined" label="password" fullWidth className={classes.space} onChange={event => {this.setState({password:event.target.value})}}/>
                    <TextField variant="outlined" label="first name" fullWidth className={classes.space} onChange={event => {this.setState({firstName:event.target.value})}}/>
                    <TextField variant="outlined" label="last name" fullWidth className={classes.space} onChange={event => {this.setState({lastName:event.target.value})}}/>
                    <TextField variant="outlined" label="email" fullWidth className={classes.space} onChange={event => {this.setState({email:event.target.value})}}/>
                    <Button variant="contained" color="primary" fullWidth className={classes.space} onClick={this.register.bind(this)}>Register</Button>
                    <Box className={classes.space}>
                        <Link href="/login">Login</Link>
                    </Box>
                    <Snackbar open={this.state.error}>
                        <SnackbarContent className={classes.error} message="User not found !" />                        
                    </Snackbar>
                </form>
            </Container>
        );

    } 

    register(event){
        event.preventDefault();
        const user = {
            username:this.state.username,
            password:this.state.password,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
        }
        UserController.userRegister(user);
    }
}

export default withStyles(useStyle)(Register)