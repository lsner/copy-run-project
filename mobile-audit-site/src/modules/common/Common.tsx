import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

export class Common extends React.Component<any, any> {

  constructor(props) {
    super(props)
  }

  render() {
    const theme = {
      primaryColor: '#FF9900',
      primaryTextColor: '#2F2F2F',
      secondaryTextColor: '#787878',
      iconColor: '#B4B4B4',
      borderColor: '#E6E6E6',
      emptyColor: '#F8F8F8',
      tableHeadColor: '#FEF1DD',
      tableCellColor: '#FFFFFF'
    }

    return (
      <Page>
        <ThemeProvider theme={theme}>
          {this.props.children}
        </ThemeProvider>
      </Page>
    )
  }
}

const Page = styled.div`// styled
  & {
    height: 100%;
    > * {
      height: 100%;
    }
  }
`;