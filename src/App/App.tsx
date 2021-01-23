import * as React from "react"
import {
  ChakraProvider,
  theme,
  useDisclosure,
  Button,
} from "@chakra-ui/react"
import { Sidebar } from "../components/Sidebar/Sidebar"
import { Header } from "../components/Header/Header"

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Button onClick={onOpen}>Open Drawer</Button>
      <Sidebar open={isOpen} onOpen={onOpen} onClose={onClose} />
    </ChakraProvider>
  )
}
