import React, { useState, useContext, useCallback } from 'react'
import { useTable } from 'react-table'

const Table = ({ columns, data, limit, paginator, onPagination, loading }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, usePagination } =
    useTable({
      columns,
      data,
      paginator,
    })

  return (
    <>
      <div className=" bg-white border rounded-lg border-current overflow-auto">
        <div className="relative">
          {/* {loading && <Loader />} */}
          <div className={`h-[calc(100vh-150px)] `}>
            <table className="w-full text-sm" {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        style={column.style}
                        className="text-xs px-3 py-2.5 text-left bg-slate-300 visible 
                    border-b border-r border-current font-semibold whitespace-nowrap sticky top-0 z-10"
                        {...column.getHeaderProps()}
                      >
                        {column.render('Header')}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()} className="overflow-auto">
                {/* {loading && <Loader/>}     */}
                {rows?.length ? (
                  rows.map((row) => {
                    prepareRow(row)
                    return (
                      <tr {...row.getRowProps()} className="border-b border-current">
                        {row.cells.map((cell) => {
                          return (
                            <td
                              className="relative text-xs text-left text-foreground font-medium px-3 py-2.5 border-r border-current whitespace-nowrap"
                              {...cell.getCellProps()}
                            >
                              {cell.render('Cell')}
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })
                ) : (
                  <div className="min-h-20 loader">
                    <div className="w-full font-bold no-data">{false ? ' ' : 'No Data Found'}</div>
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <Pagination className="py-2" onPagination={onPagination} paginator={paginator}  pageIndex={pageIndex} limit={set}/> */}
    </>
  )
}

export default Table
