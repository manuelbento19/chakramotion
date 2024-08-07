import { Box, Button, Flex, Heading, IconButton, Input, Stack, UnorderedList, useColorMode, useColorModeValue, useToast} from "@chakra-ui/react"
import {Sun,Moon} from '@phosphor-icons/react';
import { useState } from "react";
import { Item } from "./types";
import ListItem from "./ListItem";
import { Reorder } from "framer-motion";

function App() {
  const {colorMode,toggleColorMode} = useColorMode();
  const containerForm = useColorModeValue("ButtonFace","#2b2b2b");
  const bgForm = useColorModeValue("white","#333333");
  const [items,setItems] = useState<Item[]>([]);
  const toast = useToast();

  const addItem = (name:string) => {
    const id = crypto.randomUUID();
    setItems(prev=>[...prev,{id,name}]);
  }
  const removeItem = (id:string) => {
    setItems(prev=>prev.filter(item=>item.id!==id))
  }

  const onSubmit = (e:React.FormEvent<HTMLFormElement> & {target:HTMLInputElement[]}) => {
    e.preventDefault();
    const [input] = e.target;
    
    if(!input.value) 
    return toast({
      description: "Empty field",
      status: 'warning',
      isClosable: true,
      position: "top"
    });
    addItem(input.value);
    input.value = "";
  }

  return (
    <Flex bg={containerForm} h={"100vh"} position={"relative"}>
      <IconButton aria-label="theme-switcher" onClick={toggleColorMode} position={"fixed"} top={2} right={2} icon={colorMode=="light" ? <Moon size={22}/> :<Sun size={22}/>}/>
      <Stack spacing={3} w={"100%"} maxW={"md"} h={"fit-content"} bg={bgForm} mx={"auto"} mt={"10%"} px={6} py={4} rounded={8} boxShadow={"lg"}>
        <form onSubmit={onSubmit}>
          <Heading size={"lg"} my={6} fontSize={22} fontWeight={"500"}>Shopping List</Heading>
          <Flex gap={2}>
            <Input flex={1} placeholder='Add an item' />
            <Button type="submit" colorScheme="orange" fontSize={"1rem"}>Add</Button>
          </Flex>
        </form>
        <Box maxH={300} overflow={"auto"}>
          <UnorderedList styleType={"none"} m={0}>
            <Reorder.Group as={"ul"}
              axis="y" values={items} onReorder={setItems}
              style={{listStyle: "none",margin:0,display: "flex",flexDirection:"column",gap: 6,padding: 2}}
            > 
              {items.map(item=><ListItem key={item.id} data={item} removeCallback={removeItem}/>)}
            </Reorder.Group>
          </UnorderedList>
        </Box>
      </Stack>
    </Flex>
  )
}
export default App
