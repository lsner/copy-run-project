import React from 'react';
import { browserHistory, Route, Router } from 'react-router';
import mitt from 'mitt';
import { Common } from './modules/common/Common'
import { Base } from './modules/common/Base';
import { Manage } from './modules/mange/Mange';

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
        <Route path="/" component={Common}>
          <Route path="/manage" component={Manage}/>
        </Route>
      </Router>
    );
  }
}
