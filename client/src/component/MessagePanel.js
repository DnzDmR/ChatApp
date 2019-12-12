import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

export default function MessagePanel(){
 
    return(
        <div>
            <Box height={window.innerHeight-75} width="100%">
            <Box bgcolor="grey.300" height="90%" width="100%" display="inline-block">
                <div id="messages">
                    
                </div>
            </Box>
            <Box bgcolor="grey.500" height="35px" width="100%" display="inline-block">
                <TextField width="21px"/>
            </Box>
            </Box>
        </div>

    );

}