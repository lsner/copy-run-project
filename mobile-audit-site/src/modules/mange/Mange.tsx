import * as React from 'react';
import { merge } from 'lodash';
import { Table} from '../component/Table'

export class Manage extends React.Component<any, any> {

  constructor() {
    super()
    this.state = {
      loading: false,
      showAlert: false,
      list:[],
      columns:[{
        field: "productName",
        title: "产品名称"
      },
        {
          field: "manufacturerCode",
          title: "逻辑仓库",
          width:100,
        },
        {
          field: "userName",
          title: "申请人"
        },
        {
          field: "submitDate",
          title: "退库日期"
        }]
    }
  }

  render() {
    const {list,columns } = this.state

    return (
      <div>
        <Table  data={list} columns={columns} height={400} responsive={true}/>
      </div>
    )
  }
}
