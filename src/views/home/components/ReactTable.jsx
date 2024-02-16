import { Card, CardHeader, Checkbox, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useSortBy, useTable } from "react-table";
import { tableDataCheck } from "../../../variables/tables";

const ReactTable = () => {
  const data = React.useMemo(
    () => tableDataCheck, [
    //   {
    //     checked: false,
    //     name: "Horizon Ui Pro", 
    //     progress: "17.5%", 
    //     quantity: "2458", 
    //     date: "12 Jan 2021",
    //   },
    //   {
    //     checked: true,
    //     name: "Horizon UI Free", 
    //     progress: "10.8%", 
    //     quantity: "1485", 
    //     date: "21 Feb 2021",
    //   },
    //   {
    //     checked: true,
    //     name: "Weekly Update", 
    //     progress: "21.3%", 
    //     quantity: "1024", 
    //     date: "13 Mar 2021"
    //     },
    //   {
    //     checked: true,
    //     name: "Venus 3D Asset", 
    //     progress: "31.5%", 
    //     quantity: "858", 
    //     date: "24 Jan 2021"
    //     },
    //   {
    //     checked: false,
    //     name: "Marketplace", 
    //     progress: "12.2%", 
    //     quantity: "258", 
    //     date: "24 Oct 2022"
    //     },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "checked",
        disableSortBy: true,
        Cell : ({ value }) => <Checkbox isChecked={value}/>
      },
      {
        Header: "NAME",
        accessor: "name",
      },
      {
        Header: "PROGRESS",
        accessor: "progress",

      },
      {
        Header: "QUANTITY",        
        accessor: "quantity",

      },
      {
        Header: "DATE",
        accessor: "date",

      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <Card>
            <CardHeader>Check Table</CardHeader>
            <TableContainer>
                <Table variant="simple" {...getTableProps()}>
                    <Thead>
                        {/* 헤더 그룹 렌더링 */}
                        {headerGroups.map((headerGroup) => (
                            // 헤더 그룹에 필요한 props
                            <Tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <Th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        isNumeric={column.isNumeric}
                                    >
                                        {column.render('Header')}
                                        {/* 정렬 방향 표시 */}
                                        {column.isSorted ? column.isSortedDesc ? <FaAngleDown /> : <FaAngleUp /> : ''}
                                    </Th>
                                ))}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row)
                            return (
                                <Tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                                                {cell.render('Cell')}
                                            </Td>
                                        )
                                    })}
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </Card>
  );
};

export default ReactTable;
