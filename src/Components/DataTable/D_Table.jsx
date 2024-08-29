import React, { useRef, useState } from "react"

// for data table
import { Button, Input, Space, Table, Popconfirm } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import Highlighter from 'react-highlight-words';

export default function D_Table() {
    
  // data table code

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  // const modifiedData = appointments.map(({ body, index, ...item }) => ({
  //   ...item,
  //   key: item.id,
  //   comment: body
  // }))

  // console.log("modify", modifiedData);

  // pagination purpose
  const [currentPage, setcurrentPage] = useState(1)

  let pageSize = 10

  const columns = [
    {
      title: "ID",
      key: "index",
      render: (text, record, index) => (currentPage - 1) * pageSize + index + 1,
      width: '0.3%',
      align: "center",
      
    }, {
      title: "Doctor Name",
      key: "doctor",
      render: (text, record, index) => "",
      width: '0.8%',
      align: "center",
 
    }, {
      title: "Date",
      dataIndex: "date",
      key: "date",
      ...getColumnSearchProps('date'),
      width: '0.9%',
      align: "center",
 
    }, {
      title: "Status",
      dataIndex: "status",
      key: "status",
      ...getColumnSearchProps('status'),
      width: '0.4%',
      align: "center",
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.status > b.status,
    }, {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => <button className="btn btn-primary action" onClick={()=>{}} data-toggle="modal" data-target="#doctorModal">Change Status</button>,
      width: '0.5%',
      align: "center"
    }
  ]
  return (
    <div>
          <Table
              columns={columns}
              dataSource={""}
              rowKey={"_id"}
              bordered
              pagination = {
                {
                  // pageSize : pageSize,
                  current : currentPage,
                  onChange : (page) => setcurrentPage(page)
                }
              }
              scroll={{y : 500}}
            />
    </div>
  )
}