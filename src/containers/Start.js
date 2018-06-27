import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {add} from '../actions/index';
import { Button } from 'semantic-ui-react';

class Start extends Component {

  constructor(props) {
     super(props);
     this.btnHandlerSend = this.btnHandlerSend.bind(this);

     this.state = {

     }
   }

   btnHandlerSend(e) {
     e.preventDefault();
     if(this.refs._ref.value!='')
      this.props.actions.add(this.refs._ref.value);
      this.refs._ref.value = '';
      this.refs._ref.focus();

  }

  showList() {
    return (
      <div>
        <div className="ui form">

          {console.log(this.props)}
          <div className="field">
            <label></label>
            <textarea rows="2" ref='_ref' placeholder="Feel free to write..."></textarea>
          </div>

          <Button onClick={e => this.btnHandlerSend(e)}>Send</Button>
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
    connectState: state.box
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
