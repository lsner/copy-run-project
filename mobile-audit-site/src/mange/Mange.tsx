import * as React from 'react';
import styled from "styled-components";
import { merge } from 'lodash';

export class Manage extends React.Component<any, any> {

  constructor() {
    super()
    this.state = {
      loading: false,
    }
  }

  render() {
    const {list,columns } = this.state

    return (
      <Page>
        <h1>hhhh</h1>
      </Page>
    )
  }
}
const Page = styled.div`// styled
  &{
    height: 100%;
    h1{
      color: #1a4a98;
    }
  }
`;
