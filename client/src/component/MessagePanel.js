import React,{useEffect,useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
 
const socket = new WebSocket("ws://192.168.1.8:9090/socket/ws");




export default function MessagePanel(){

    const [message, setMessage] = useState([]);

    const addItem = (name,msg) => {
        setMessage([
        ...message,
        {
          username:name,
          message: msg
        }
      ]);
    };

    const useStyles = makeStyles(theme => ({
        button: {
          margin: theme.spacing(1),
        },
      
      }));
      



useEffect(() => {

    const sMessage = document.getElementById("message");
    const sendButton = document.getElementById("send");

    socket.binaryType = "arraybuffer";
    

    socket.onopen = function (event) {
        console.log("Connected");
    };
 
    socket.onmessage = function (event) {        
        
        var obj = JSON.parse(event.data);
        addItem(obj.username,obj.message);
    };
 
    sendButton.onclick = function (event) {
        event.preventDefault();
        var msg = {username:"",message:""}
        msg.message=sMessage.value;
        msg.username=localStorage.getItem("username");
        sendMessage(JSON.stringify(msg));
        sMessage.value="";
    };
 
    function sendMessage(msg) {
        socket.send(msg);
    }

    socket.onclose = function (evet) {
        console.log("Closed");
    }

});

    const classes = useStyles();

    return(
        <Box>
            <Box height={window.innerHeight-75} width="100%">
            <Box bgcolor="grey.300" height="90%" width="100%" display="inline-block" style={{overflow: 'auto'}}>
                {message.map((item,i) => (
                    <li key={i} style={{ listStyleType: "none", marginTop:"10px", marginLeft:"10px" }}>
                        <Chip avatar={<Avatar></Avatar>} label={item.username +" : "+ item.message} size="medium" color="secondary"/>
                    </li>   
                ))}
            </Box>
            <Box  height="auto" width="100%" display="inline-block" >
                <Box width="85%" display="inline-block">
                    <TextField id="message" fullWidth placeholder="send message"/>
                </Box>
                <Box width="10%" display="inline-block">
                    <Button id="send" fullWidth variant="contained" color="primary" className={classes.button} endIcon={<SendIcon></SendIcon>}>Send</Button>
                </Box>
                
                
            </Box>
            </Box>
        </Box>

    );

}