import * as React from 'react';
import { Route } from 'react-router-dom';
import { Bundle } from './bundleLoader';

export class AsyncRoute extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.getComp = this.getComp.bind(this);
  }

  getComp() {
    const { comp, load, spin = <div>Loading</div> } = this.props;
    return (
      <Bundle load={load}>
        {(mod) => mod ? React.createElement(mod[comp]) : spin}
      </Bundle>
    )
  }

  render() {
    return (
      <Route component={this.getComp} {...this.props}/>
    );
  }
}
