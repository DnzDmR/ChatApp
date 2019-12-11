import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SendOutlined from '@material-ui/icons/SendOutlined';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import LoginController from '../controller/LoginController';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Home()
{
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const dialogHandleClose = () => {
        setOpen(false);
    };

    const dialogHandleClickOpen = () => {
        setOpen(true);
    };

    const dialogHandleClickAgree = () => {
        setOpen(false);
        LoginController.logout();
    };
     

    const menuOpen = event => {
        setAnchorEl(event.currentTarget);
    };
    
    const menuClose = () => {
        setAnchorEl(null);
    };


    const [open,setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const classes = useStyles();
    const opens = Boolean(anchorEl);        

        return (

            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <SendOutlined />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Chat App
                        </Typography>
                        <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit" onClick={menuOpen}>
                            <AccountCircle />
                        </IconButton>
                        <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit" onClick={dialogHandleClickOpen} >
                            <ExitToApp />
                        </IconButton>
                        <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={opens}
                onClose={menuClose}
              >
                <MenuItem onClick={menuClose}>Profile</MenuItem>
                <MenuItem onClick={menuClose}>Groups</MenuItem>
                <MenuItem onClick={menuClose}>Settings</MenuItem>
                
              </Menu>
                    </Toolbar>
                </AppBar>
                <Dialog open={open}
                    style={{zIndex:-1000}} 
                    TransitionComponent={Transition} 
                    keepMounted
                    onClose={dialogHandleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description">

                    <DialogTitle id="alert-dialog-slide-title">{"Are you sure ?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Do you want logout ?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={dialogHandleClose} color="primary">
                            Disagree
                        </Button>
                        <Button onClick={dialogHandleClickAgree} color="primary">
                            Agree
                        </Button>
                    </DialogActions>
                    
                </Dialog>
          
            </div>
            
        );
}