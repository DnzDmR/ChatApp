import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import VpnKey from '@material-ui/icons/VpnKey';
import FindReplace from '@material-ui/icons/FindReplace';
import UserController from '../controller/LoginController';

const useStyle= theme =>
    ({
        form:{
            marginTop:theme.spacing(8),
            
        },
        space:{
            marginTop:theme.spacing(2),
        }        
    });
 
class Login extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
        }
    }
    
    render() {

        const { classes } = this.props;
        
        return (
            <Container maxWidth="xs" component="main">
                <form className={classes.form}>
                    <TextField variant="outlined" label="username" fullWidth autoFocus className={classes.space}  onChange={event => {this.setState({username:event.target.value})}} />
                    <TextField variant="outlined" label="password" fullWidth type="password" className={classes.space} onChange={event => {this.setState({password:event.target.value})}}/>
                    <Button variant="contained" color="primary" fullWidth className={classes.space} onClick={this.login.bind(this)}>Login</Button>
                    <Box className={classes.space}>
                        <VpnKey style={{ fontSize: 20 }} />
                        <Link> Register Me !</Link>
                    </Box>
                    <Box className={classes.space}>
                        <FindReplace style={{ fontSize: 20 }} />
                        <Link> Forgot My Account</Link>
                    </Box>
                </form>
            </Container>
        );

    }

    login(event){

        UserController.userLogin(this.state.username,this.state.password);
        event.preventDefault();
    }
 
}

export default withStyles(useStyle)(Login)