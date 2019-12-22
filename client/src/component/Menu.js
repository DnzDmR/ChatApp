import React,{useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const socket = new WebSocket("ws://192.168.1.8:9090/socket/online");

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function FolderList() {

  const [online, setOnline] = useState([]);

  useEffect(() => {

    socket.binaryType = "arraybuffer";
    
    socket.onopen = function (event) {      
      var data = {username:localStorage.getItem("username")};
      socket.send(JSON.stringify(data));
    };
 
    socket.onmessage = function (event) {        
    
    var obj = JSON.parse(event.data);
    setOnline(obj);
    console.log(obj)

    };
 
    socket.onclose = function (evet) {
      
    }

});


  const classes = useStyles();

  return (
    <List className={classes.root}>
      {online.map((item,i) => (
        
        <ListItem onClick={test}>
          <ListItemAvatar>
            <Avatar> </Avatar>
          </ListItemAvatar>
            <ListItemText primary={item.firstName+"  "+item.lastName} secondary="Online" />
        </ListItem>  
      ))}    
    </List>
  );
}


function test(){
    alert("test");
}