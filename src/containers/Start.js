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
      this.props.actions.add(this.state.msg_rcvd);


  }

  showList() {
    return (
      <div>
        <div className="ui form">

          {console.log(this.state)}
          <Button onClick={e => this.btnHandlerSend(e)}>Send</Button>
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
