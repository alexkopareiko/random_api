import React, {Component} from 'react';
import Start from '../containers/Start';

export default class App extends Component {


showList() {
  return (
    <div className="div_main">
      <h3>Random API</h3>
      <Start />
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
