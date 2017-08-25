/**
 * More complex then I originally thought:
 * 1. basically like react-redux connect
 * 2.
 import * as React from 'react';
 import * as mitt from 'mitt';

 export const observe = Component => (props, context) => (
 <Component emit={context.events.emit} {...props} />
 );

 export class ObserveProvider extends React.Component<any, any> {

  private emitter: mitt.Emitter = new mitt();

  getChildContext() {
    return { emitter: this.emitter };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}
 */
