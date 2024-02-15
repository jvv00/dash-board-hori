import { Card,  CardHeader, Checkbox, Table,  TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { tableDataCheck } from "../../../variables/tables"

const CheckTable = () => {

    return (
        <>
        <Card>
            <CardHeader fontSize="20px" fontWeight='700'>Check Table</CardHeader>
            <TableContainer>
                <Table
                 variant='baseStyle' color='gray.500' mb='24px'>
                    <Thead>
                    <Tr>
                        <Th></Th>
                        <Th>NAME</Th>
                        <Th>PROGRESS</Th>
                        <Th>QUANTITY</Th>
                        <Th>DATE</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                        {tableDataCheck.map((row, index) => ( 
                            <Tr key={index}>    
                            <Td><Checkbox colorScheme="brandScheme.500" borderColor={"gray.200"} sx={{'[data-checked]': {borderColor:'#422AFB', background: '#422AFB' }}} defaultChecked={row.checked}/></Td>
                            <Td>{row.name}</Td>
                            <Td> {row.progress}</Td>
                            <Td> {row.quantity}</Td>
                            <Td> {row.date}</Td>
                        </Tr>)
                        )}
                       
                    </Tbody>

                </Table>
            </TableContainer>
        </Card>
        </>
    )
}

export default CheckTable