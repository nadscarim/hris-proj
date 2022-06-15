import React from 'react'
import { Table } from 'antd'

const HomeContainer = () => {


    const columns = [
        {
          title: 'Log Type',
          width: 100,
          dataIndex: 'log_type',
          key: 'log_type',
          fixed: 'left',
        },
        {
          title: 'Day Type',
          width: 100,
          dataIndex: 'day_type',
          key: 'day_type',
          fixed: 'left',
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: '1',
        },
        {
          title: 'Day',
          dataIndex: 'day',
          key: '2',
        },
        {
          title: 'Column 3',
          dataIndex: 'address',
          key: '3',
        },
        {
          title: 'Column 4',
          dataIndex: 'address',
          key: '4',
        },
        {
          title: 'Column 5',
          dataIndex: 'address',
          key: '5',
        },
        {
          title: 'Column 6',
          dataIndex: 'address',
          key: '6',
        },
        {
          title: 'Column 7',
          dataIndex: 'address',
          key: '7',
        },
        {
          title: 'Column 8',
          dataIndex: 'address',
          key: '8',
        },
        {
          title: 'Action',
          key: 'operation',
          fixed: 'right',
          width: 100,
          render: () => <a>action</a>,
        },
      ]

      const data = [
        {
          key: '1',
          log_type: 'Regular',
          day_type: 'Regular Workday',
          address: 'New York Park',
          date: '2022-06-08'
        },
        {
          key: '2',
          log_type: 'Jim Green',
          day_type: 'Regular Workday',
          address: 'London Park',
        },
      ]
   
    return (
        <>
            <Table
                columns={columns}
                dataSource={data}
                scroll={{
                    x: 1300,
                  }}
                title={() => 'ATTENDANCE'}
            />
        </>
    )
}

export default HomeContainer
