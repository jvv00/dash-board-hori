import { Avatar, Box, Button, Flex, Progress, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import React from "react";
import { tableDataTopCreators } from "../../../variables/tables"
import { useSortBy, useTable } from "react-table";
import { TitleH2 } from "components/common/Title";

const TopCreatorTable = () => {
    const data = React.useMemo(
        () => tableDataTopCreators, [])
        
        const columns = React.useMemo(
            () => [
              {
                Header: "NAME",
                accessor: "name",
                Cell: ({ cell: { value } }) => (
                    <div style={{ display: "flex", alignItems: "center"}}>
                      <Avatar src={value[1]} alt={value[0]} w='30px'
                            h='30px'
                            me='8px' />
                      <span>{value[0]}</span>
                    </div>
                  ),
              },
              {
                Header: "ARTWORKS",        
                accessor: "artworks",
              },
                {
                    Header: "RATING",
                    accessor: "rating",
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
        <>
    <Flex
        align={{ sm: "flex-start", lg: "center" }}
        justify='space-between'
        w='100%'
        px='22px'
        pb='20px'
        mb='10px'
        boxShadow='0px 40px 58px -20px rgba(112, 144, 176, 0.26)'>
        <TitleH2>Top Creators</TitleH2>
        <Button variant='action'>See all</Button>
    </Flex>
    <TableContainer>
    <Table variant='baseStyle' {...getTableProps()}>
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
        {rows.map((row, rowIndex) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()} key={rowIndex} >
              {row.cells.map((cell, cellIndex) => {
                return (
                  <Td {...cell.getCellProps()} key={cellIndex}>
                    {cell.render("Cell")}
                  </Td>
                );
              })}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
    </TableContainer>
        </>
    )
}

export default TopCreatorTable