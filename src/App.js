import React, { Component } from 'react';
import MainList from './views/MainList';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar style={{paddingLeft:'0', justifyContent:'center'}}>
            <Typography variant="h6" color="inherit">
              Thatz My Ride
            </Typography>
          </Toolbar>
        </AppBar>

        <MainList></MainList>
      </div>
    );
  }
}

export default App;
