import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ListSubheader from '@material-ui/core/ListSubheader';

 

export default function Menu(){

    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };

    return(
        <div>
            <List component="nav" aria-label="main mailbox folders" >
            <ListSubheader component="div" id="nested-list-subheader">
                Groups
            </ListSubheader>
                <ListItem button selected={selectedIndex === 0} onClick={event => handleListItemClick(event, 0)} >
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Group1" />
                </ListItem>
                <ListItem button selected={selectedIndex === 1} onClick={event => handleListItemClick(event, 1)} >
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Group2" />
                </ListItem>
            </List>
        </div>

    );



}