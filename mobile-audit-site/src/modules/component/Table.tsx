import * as React from 'react';
import styled from 'styled-components';
import { AutoSizer, List, MultiGrid, WindowScroller } from 'react-virtualized';
import { get, sumBy } from 'lodash';
import 'react-virtualized/styles.css';
const DEFAULT_COLUMN_WIDTH = 80;
export const TABLE_ROW_HEIGHT = 44;

export class Table extends React.Component<any, any> {
  _onFixedColumnCountChange: Function
  _onFixedRowCountChange: Function
  _onScrollToColumnChange: Function
  _onScrollToRowChange: Function

  constructor() {
    super();
    this.state = {
      // fixedColumnCount: 1,
      fixedRowCount: 1,
      scrollToColumn: 0,
      scrollToRow: 0,
    };

    this._onFixedColumnCountChange = this._createEventHandler('fixedColumnCount');
    this._onFixedRowCountChange = this._createEventHandler('fixedRowCount');
    this._onScrollToColumnChange = this._createEventHandler('scrollToColumn');
    this._onScrollToRowChange = this._createEventHandler('scrollToRow')
  }

  _cellRenderer(columns, data, { columnIndex, key, rowIndex, style }) {
    const { fixedCol = 1 } = this.props
    // render column title
    if (rowIndex < this.state.fixedRowCount) {
      return (
        <HeaderCell
          key={key}
          style={style}
          frozenBorder={columnIndex === fixedCol - 1}
          firstRow={rowIndex === 0}>
          {get(columns, `${columnIndex}.title`)}
        </HeaderCell>
      )
    } else {
      const dataIndex = rowIndex - 1;
      const dataPath = `${dataIndex}.${get(columns, `${columnIndex}.field`)}`;
      let value = get(data, dataPath);
      if (columns[columnIndex].field === '_index') {
        value = rowIndex
      }

      return (
        <BodyCell
          key={key}
          style={style}
          frozenBorder={columnIndex === fixedCol - 1}
          firstRow={rowIndex === 0}>
          <CellText>{value}</CellText>
        </BodyCell>
      )
    }
  }

  _createEventHandler(property) {
    return (event) => {
      const value = parseInt(event.target.value, 10) || 0;

      this.setState({
        [property]: value
      })
    }
  }

  getColumnWidth = (width, { index }) => {
    const { responsive = false, columns } = this.props
    if (responsive) {
      let widthCount = 0
      columns.forEach(c => {
        if (c.width > 0) {
          widthCount++
        }
      })
      return Number(columns[index].width) || (width - sumBy(columns, (c: any) => c.width)) / Math.max(1, columns.length - widthCount) || width / Math.max(1, columns.length)
    } else {
      return Number(columns[index].width) || DEFAULT_COLUMN_WIDTH
    }
  }

  public render() {
    const { columns, data, onRowsRendered, _ref, height, fixedCol = 1, ...props } = this.props;

    return (
      <AutoSizer disableHeight>
        {({ width }) => (
          <StyledGrid
            {...this.state}
            fixedColumnCount={fixedCol}
            ref={_ref}
            onSectionRendered={({
                                  rowOverscanStartIndex,
                                  rowOverscanStopIndex,
                                  rowStartIndex,
                                  rowStopIndex
                                }) => {
              if (onRowsRendered) {
                onRowsRendered({
                  overscanStartIndex: rowOverscanStartIndex,
                  overscanStopIndex: rowOverscanStopIndex,
                  startIndex: rowStartIndex,
                  stopIndex: rowStopIndex
                })
              }
            }}
            cellRenderer={this._cellRenderer.bind(this, columns, data)}
            columnWidth={this.getColumnWidth.bind(this, width)}
            columnCount={columns.length}
            rowHeight={TABLE_ROW_HEIGHT}
            rowCount={data.length + 1}
            height={height}
            width={width}
            {...props}
          />
        )}
      </AutoSizer>
    );
  }
}

const StyledGrid: any = styled(MultiGrid)`// styled
  & {
    outline: none;
  }
`;

const AutoSizerWrapper = styled.div`// styled
  & > div:first-child {
    height: auto !important;
  }
`;

const BodyCell: any = styled.div`// styled
  & {
    display: inline-block;
    text-align: center;
    border: 1px solid ${(props: any) => props.theme.borderColor};
    border-left: none;
    border-right: ${(props: any) => props.frozenBorder ? '1px solid ' + props.theme.primaryColor : 'none'};
    border-top: ${(props: any) => props.firstRow ? '1px solid ' + props.theme.borderColor : 'none'};
    color: ${(props: any) => props.theme.secondaryTextColor};
    background-color: ${(props: any) => props.theme.tableCellColor};
    box-sizing: border-box;
  }
`;

const HeaderCell: any = styled.div`// styled
  & {
    display: inline-block;
    text-align: center;
    font-size: 12px;
    line-height: 44px;
    border-right: ${(props: any) => props.frozenBorder ? '1px solid ' + props.theme.primaryColor : 'none'};
    border-bottom: 1px solid ${(props: any) =>  props.theme.primaryColor};
    background-color: ${(props: any) => props.theme.tableHeadColor};
    box-sizing: border-box;
  }
`;

const CellText = styled.span`// styled
  & {
    width: 100%;
    padding: 0 4px;
    line-height: 44px;
    font-size: 11px;
  }
`;

const CellInput = styled.input`// styled
  & {
    outline: none;
    border: none;
    width: 100%;
    padding: 0 4px;
    height: 100%;
  }
`;
