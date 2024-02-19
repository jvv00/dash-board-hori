import { Card, Icon, Text } from "@chakra-ui/react"
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../../../assets/css/Calendar.css';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const CalendarCustom = (props) => {
    const { selectRange, ...rest } = props;
    const [value, onChange] = useState(new Date());
    return(
    <Card
      align='center'
      direction='column'
      w='100%'
      // maxW='max-content'
      p='20px 15px'
      h='100%'
      {...rest}>
      <Calendar
        onChange={onChange}
        value={value}
        selectRange={selectRange}
        view={"month"}
        tileContent={<Text color='brand.500'></Text>}
        prevLabel={<Icon as={MdChevronLeft} w='24px' h='24px' mt='4px' />}
        nextLabel={<Icon as={MdChevronRight} w='24px' h='24px' mt='4px' />}
        prev2Label={null}
        next2Label={null}
      />
    </Card>
    )
}

export default CalendarCustom