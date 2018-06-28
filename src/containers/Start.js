import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {add} from '../actions/index';
import { Button } from 'semantic-ui-react';
import { fetch_random } from './fetch.js';

class Start extends Component {

  constructor(props) {
     super(props);
     this.btnHandlerSend = this.btnHandlerSend.bind(this);

     this.state = {
       msg_rcvd : ""

     }
   }



   btnHandlerSend(e) {
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
            id: Date.now().toString(),
            name : this.state.msg_rcvd[0].name,
            age: this.state.msg_rcvd[0].age

          }
            this.props.actions.add(arr);

        }
  }

  showList() {
    return (
      <div>
        <div className="ui form">

          <Button onClick={e => this.btnHandlerSend(e)}>Get from API</Button>
          {}
        </div>
      </div>
    );
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
    connectState: state
  };

}

function matchDispatchToProps (dispatch) {
  return {//bindActionCreators({select: select}, dispatch)
    actions: {
        add: bindActionCreators(add, dispatch),
        }
    }
}

export default connect (mapStateToProps, matchDispatchToProps)(Start);
