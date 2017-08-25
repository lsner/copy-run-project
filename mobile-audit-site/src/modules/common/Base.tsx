import * as React from 'react';
import { Dialog, Toast } from 'react-weui';
import { merge } from 'lodash';

export  class Base extends React.Component<any, any> {

  constructor() {
    super()
    this.state = {
      loading: false,
      showAlert: false,
      alert: {
        buttons: [
          {
            label: '关闭',
          }
        ]
      }
    }
  }

  render() {
    const { loading, showAlert, alertMsg, alert } = this.state

    return (
      <div>
        hahahaahah
      </div>
    )
  }
}
