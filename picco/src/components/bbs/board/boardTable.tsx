import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useRouter } from 'next/navigation'
import React from 'react'
interface DataType {
  key: React.Key
  id: number
  title: String
  author: String
  createdAt: String
  views: String
  recommend: String
}
const BoardTable = () => {
  const router = useRouter()
  const columns: ColumnsType<DataType> = [
    {
      title: '번호',
      dataIndex: 'id',
      width: 90,
      align: 'center',
    },
    {
      title: '제목',
      dataIndex: 'title',
      width: 480,
    },
    {
      title: '작성자',
      dataIndex: 'author',
      width: 105,
    },
    {
      title: '작성일',
      dataIndex: 'createdAt',
      width: 90,
      align: 'center',
    },
    {
      title: '조회수',
      dataIndex: 'views',
      width: 80,
      align: 'center',
    },
    {
      title: '추천',
      dataIndex: 'recommend',
      width: 80,
      align: 'center',
    },
  ]

  const data: DataType[] = [
    {
      key: '1',
      id: 1,
      title: `New York No. 1 Lake Park`,
      author: '쿠라에',
      createdAt: '2023.12.22',
      views: '0',
      recommend: '0',
    },
    {
      key: '2',
      id: 2,
      title: '222222222 Lake Park',
      author: '쿠라에',
      createdAt: '2023.12.22',
      views: '0',
      recommend: '0',
    },
    {
      key: '3',
      id: 3,
      title: '33333333 Park',
      author: '쿠라에',
      createdAt: '2023.12.22',
      views: '0',
      recommend: '0',
    },
    {
      key: '4',
      id: 4,
      title: `New York No. 1 Lake Park`,
      author: '쿠라에',
      createdAt: '2023.12.22',
      views: '0',
      recommend: '0',
    },
    {
      key: '5',
      id: 5,
      title: '222222222 Lake Park',
      author: '쿠라에',
      createdAt: '2023.12.22',
      views: '0',
      recommend: '0',
    },
    {
      key: '6',
      id: 6,
      title: '33333333 Park',
      author: '쿠라에',
      createdAt: '2023.12.22',
      views: '0',
      recommend: '0',
    },
  ]
  return (
    <Table
      style={{ cursor: 'pointer', margin: '-16px 0 0  0' }}
      columns={columns}
      dataSource={data}
      size="small"
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) => {
            router.push(`/bbs/bluearchive/${record.id}`)
            console.log('rowIndex', rowIndex)
          },
        }
      }}
    />
  )
}

export default BoardTable
