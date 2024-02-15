import { mode } from "@chakra-ui/theme-tools";
export const tableStyles = {
    components: {
        Table: {
            baseStyle: {
                thead: {
                    th: {
                        fontSize: '12px',
                        color: '#a0aec0',
                        borderBottom: '1px solid ',
                        borderColor: 'gray.200',
                    },
                    td: {
                        fontSize: "12px",
                        borderColor: "transparent",
                    }
                },
                
            },
        }
    }
}