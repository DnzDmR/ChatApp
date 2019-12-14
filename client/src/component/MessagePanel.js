import React,{useEffect,useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

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




useEffect(() => {
    const socket = new WebSocket("ws://192.168.1.8:9090/socket/ws");
    
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
    };
 
    function sendMessage(msg) {
        socket.send(msg);
    }

    socket.onclose = function (evet) {
        console.log("Closed");
    }

});


    return(
        <div>
            <Box height={window.innerHeight-75} width="100%">
            <Box bgcolor="grey.300" height="90%" width="100%" display="inline-block">
                <div id="messages">
                <ul>
                    {message.map(item => (
                    <p><Chip avatar={<Avatar>M</Avatar>} size="small" label={item.message} color="secondary"/></p>
                    ))}
                </ul> 
                </div>
            </Box>
            <Box bgcolor="grey.500" height="35px" width="100%" display="inline-block">
                <p>Type a message and hit send:</p>
                <TextField width="21px" id="message"/>
                <Button id="send" />
            </Box>
            </Box>
        </div>

    );

}