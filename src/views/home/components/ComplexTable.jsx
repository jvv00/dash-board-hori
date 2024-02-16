import { Box, Card, CardHeader, Flex, Icon, Progress, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import React, { useMemo } from "react"
import { tableDataComplex } from "../../../variables/tables"
import { useSortBy, useTable } from "react-table"
import { FaCircleCheck, FaCircleExclamation, FaCircleXmark, } from "react-icons/fa6";
import { TitleH2 } from "../../../components/common/Title";

const ComplexTable = () => {
    const data = React.useMemo(
        () => tableDataComplex, [])
        
        const columns = React.useMemo(
            () => [
              {
                Header: "NAME",
                accessor: "name",
              },
              {
                Header: "STATUS",        
                accessor: "status",
                Cell: ({ value }) => (
                    <Box display="flex" alignItems="center">
                        {value === 'Approved' && <Icon as={FaCircleCheck} color="green.400" fontSize="1.2rem" />}
                        {value === 'Disable' && <Icon as={FaCircleXmark} color="red.400" fontSize="1.2rem" />}
                        {value === 'Error' && <Icon as={FaCircleExclamation} color="orange" fontSize="1.2rem" />}
                        <span style={{ marginLeft: '10px' }}>{value}</span>
                    </Box>
                ),
              },
                {
                    Header: "DATE",
                    accessor: "date",
                    
                },
                {
                  Header: "PROGRESS",
                  accessor: "progress",
                  Cell : ({ value }) => <Progress value={value} variant='table'
                  colorScheme='brandScheme'
                  h='8px'
                  w='108px'/>
          
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
        <CardHeader><TitleH2>Complex Table</TitleH2></CardHeader>
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
                                    {/* {column.isSorted ? column.isSortedDesc ? <FaAngleDown /> : <FaAngleUp /> : ''} */}
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
    )
}


export default ComplexTable