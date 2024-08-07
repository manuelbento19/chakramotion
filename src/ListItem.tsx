import {Button, Text} from '@chakra-ui/react';
import { Reorder, Variants } from 'framer-motion';
import { Item } from './types';
import { memo } from 'react';

type Props = {
    data: Item;
    removeCallback: (id:string) => void;
}

const itemVariants: Variants = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
    transition: {transitionDuration: "3s"},
    exit: {}
}

const ListItem: React.FC<Props> = ({data,removeCallback}) => {
  
    return (
        <Reorder.Item value={data} variants={itemVariants} initial="hidden" animate="visible" style={{
            border: "1px solid #ddd",
            borderRadius:4,
            display: "flex",
            alignItems: "center",
            padding: "10px 6px"
        }}>
            <Text flex={1}>{data.name}</Text>
            <Button onClick={()=>removeCallback(data.id)} colorScheme="gray" size={"sm"} fontSize={13}>Delete</Button>
        </Reorder.Item>

    )
}

export default memo(ListItem)
