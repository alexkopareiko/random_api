import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Button, Image, List } from 'semantic-ui-react'
import {delete_note} from '../actions/index';



class Box extends Component {

  constructor(props) {
     super(props);

     this.state = {

     }
   }

     handleClickDelete(id, e) {
       e.preventDefault();
       this.props.actions.delete_note (id);
       console.log(this.props);
     }


  showList() {
    console.log(this.props)
    return this.props.connectState.map ((row) => {
          return (

                  <div className="div_width" key={row.id}>
                    <List selection verticalAlign='middle'>
                      <List.Item>

                        <List.Content floated='right'>
                          <Button onClick={e => this.handleClickDelete(row.id, e)}>X</Button>
                        </List.Content>
                        <List.Content >
                          {row.name} ({row.age})
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
        delete_note: bindActionCreators(delete_note, dispatch)
        }
    }
}

export default connect (mapStateToProps, matchDispatchToProps)(Box);
