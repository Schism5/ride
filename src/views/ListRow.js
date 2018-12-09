import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AccountIcon from '@material-ui/icons/AccountCircle';
import DoneIcon from '@material-ui/icons/DoneOutline';

class ListRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem
                style={{padding:'25px 10px 25px 10px', borderBottom:'1px rgba(0,0,0,0.2) solid'}} 
                button 
                onClick={()=>console.log('lol k')}
            >
                <ListItemAvatar>
                    <Avatar>
                        <AccountIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={this.props.item.name} secondary={this.props.item.tag}/>
                <ListItemSecondaryAction onClick={() => {console.log(this);this.props.removeSelf(this.props.item) }}>
                    <IconButton aria-label="Delete">
                        <DoneIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default ListRow;