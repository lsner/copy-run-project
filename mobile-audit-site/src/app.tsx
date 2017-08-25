import React from 'react';
import { browserHistory, Route, Router } from 'react-router';
import mitt from 'mitt';
import { Base } from './modules/common/Base';

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
        <Route path="/" component={Base}>
        </Route>
      </Router>
    );
  }
}
