import { Box, Button, Flex, Heading, Input, ListItem, Stack, Text, UnorderedList, useColorMode, useColorModeValue } from "@chakra-ui/react"

function App() {
  const {colorMode,toggleColorMode} = useColorMode();
  const containerForm = useColorModeValue("ButtonFace","#2b2b2b");
  const bgForm = useColorModeValue("white","#333333");

  return (
    <Flex bg={containerForm} h={"100vh"} position={"relative"}>
      <Button onClick={toggleColorMode} position={"fixed"} top={2}right={2}>
        {colorMode=="light" ? "Dark" :"Light"}
      </Button>
      <Stack spacing={3} w={"100%"} maxW={"md"} h={"fit-content"} bg={bgForm} mx={"auto"} mt={"10%"} px={6} py={4} rounded={8} boxShadow={"lg"}>
        <form action="">
          <Heading size={"lg"} my={6} fontSize={22} fontWeight={"500"}>Shopping List</Heading>
          <Flex gap={2}>
            <Input flex={1} placeholder='Add an item' />
            <Button colorScheme="orange" fontSize={"1rem"}>Add</Button>
          </Flex>
        </form>
        <Box maxH={300} overflow={"auto"}>
          <UnorderedList styleType={"none"} m={0} display={"flex"} flexDirection={'column'} gap={2} px={2} py={2}>
            {Array.from({length: 4}).map((_,index)=>(
              <ListItem key={index} border={"1px"} borderColor={"gray.200"} display={"flex"} alignItems={"center"} px={2} py={2.5} rounded={4}>
                <Text flex={1}>I'm item {index+1}</Text>
                <Button colorScheme="gray" size={"sm"} fontSize={13}>Delete</Button>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Stack>
    </Flex>
  )
}

export default App
