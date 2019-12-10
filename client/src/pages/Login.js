import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
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
        },
        error: {
            backgroundColor: theme.palette.error.dark,
        },        
    });

class Login extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            error:false,
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
                    <Snackbar open={this.state.error}>
                        <SnackbarContent className={classes.error} message="User not found !" />                        
                    </Snackbar>
                </form>
            </Container>
        );

    }

    async login(event){

        const status = await UserController.userLogin(this.state.username,this.state.password);
        
        if(status){
            {window.location.href="home"}
        }else{
            this.setState({error:true});
        }
        
    }
 
}

export default withStyles(useStyle)(Login)