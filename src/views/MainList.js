import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import ListRow from './ListRow';
import { Divider } from '@material-ui/core';

class MainList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name:'Matthew Saleeby', tag: '1000'},
                {name:'Bonnie Saleeby', tag: '1001'},
                {name:'Ryan Saleeby', tag: '1002'},
                {name:'Katherine Saleeby', tag: '1003'}
            ],
            modalOpen: false,
            selected: {}
        };

        this.removeItem = this.removeItem.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    render() {
        let text = `Are you sure ${this.state.selected.name} has been successfully picked up?`;
        return (
            <div>
                <List style={{paddingTop:'0'}}>
                    {this.state.data.map(item => <ListRow item={item} removeSelf={this.showModal}></ListRow>)}
                </List>

                <Dialog open={this.state.modalOpen}>
                    <DialogTitle>Student Picked Up</DialogTitle>
                    <DialogContent>
                        <DialogContentText>{text}</DialogContentText>
                    </DialogContent>
                    <Divider></Divider>
                    <DialogActions>
                        <Button onClick={() => this.setState({modalOpen:false, selectedTag:''})} color="primary">
                            Cancel
                        </Button>
                        <Button style={{marginLeft:'25px'}} variant="contained" onClick={this.removeItem} color="primary">
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

    showModal(item) {
        this.setState({
            modalOpen: true,
            selected: item
        });
    }

    removeItem() {
        const tag = this.state.selected.tag;
        this.setState({
            modalOpen: false,
            selectedTag: {},
            data: this.state.data.filter(item => item.tag !== tag)
        });
    }
}
  
export default MainList;