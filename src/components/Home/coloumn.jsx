import { useMemo } from 'react'
import EditIcon from '../../Shared/EditIcon'
import DeleteIcon from '../../Shared/DeleteIcon'
const CourseColumn = ({ datas, setOpen, setUpdateData, getList }) => {
  const update = (row) => {
    setOpen(true)
    setUpdateData(row)
  }
  const columns = useMemo(
    () => [
      {
        Header: 'SL.NO',
        accessor: 'index', // accessor is the "key" in the data,
        style: {
          width: 42,
          minWidth: 42,
        },
        Cell: ({ row }) => {
          return <p>{parseInt(row?.id) + 1}</p>
        },
      },

      {
        Header: 'Course Title',
        accessor: 'c_name', // accessor is the "key" in the data
      },
      {
        Header: 'Course Description',
        accessor: 'c_description',
      },
      {
        Header: 'Course Price',
        accessor: 'c_price',
      },
      {
        Header: 'Action',
        accessor: 'action',
        style: {
          width: 100,
          minWidth: 100,
        },
        Cell: ({ row }) => {
          return (
            <div className="flex ">
              <EditIcon className="cursor-pointer" onClick={() => update(row)} />
              <DeleteIcon
                className="mx-3 cursor-pointer"
                id={row?.original?._id}
                getList={getList}
              />
            </div>
          )
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [datas]
  )

  return {
    columns,
  }
}

export default CourseColumn
