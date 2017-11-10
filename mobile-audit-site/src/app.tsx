import * as React from "react";
import { browserHistory, Route, Router } from 'react-router';
import mitt from 'mitt';
import { Manage } from './mange/Mange';

export const emitter: mitt.Emitter = new mitt();

export class App extends React.Component<any, any> {
  constructor() {
    super();
  }

  update = async () => {
    emitter.emit('router-update');
  };

  render() {
    return (
      <Router history={browserHistory} onUpdate={this.update}>
        <Route path="/manage" component={Manage}/>
      </Router>
    );
  }
}
