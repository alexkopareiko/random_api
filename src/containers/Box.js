import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Button, Image, List } from 'semantic-ui-react'
import {delete_note, update_note} from '../actions/index';
import { fetch_random } from './fetch.js';


class Box extends Component {

  constructor(props) {
     super(props);

     this.state = {
       msg_rcvd : ""
     }
   }

     handleClickDelete(id, e) {
       e.preventDefault();
       this.props.actions.delete_note (id);
     }

     handleClickUpdate(id, e) {
       e.preventDefault();
       fetch_random()
         .then( data => {
           this.setState({
             msg_rcvd: data
           });
         });
         if(this.state.msg_rcvd[0]!=null)
          {
            let arr = {
              id: id,
              name : this.state.msg_rcvd[0].name,
              age: this.state.msg_rcvd[0].age

            }
              this.props.actions.update_note(arr);

          }
     }

  showList() {
    return this.props.connectState.map ((row) => {
          return (

                  <div className="div_width" key={row.id}>
                    <List selection verticalAlign='middle'>
                      <List.Item>

                        <List.Content floated='right'>
                          <Button onClick={e => this.handleClickDelete(row.id, e)} color="red">X</Button>
                          <Button onClick={e => this.handleClickUpdate(row.id, e)} color="green">U</Button>
                        </List.Content>
                        <List.Content >
                           <List.Header>{row.name} ({row.age})</List.Header>

                        </List.Content>
                      </List.Item>


                    </List>
                 </div>
          );
        });
  }

    render() {
      return (
        <div>
          {this.showList()}
        </div>
      );
    }

}

function mapStateToProps(state) {

  return {
    connectState: state.box
  };

}

function matchDispatchToProps (dispatch) {
  return {
    actions: {
        delete_note: bindActionCreators(delete_note, dispatch),
        update_note: bindActionCreators(update_note, dispatch)
        }
    }
}

export default connect (mapStateToProps, matchDispatchToProps)(Box);
