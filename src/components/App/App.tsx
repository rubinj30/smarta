import * as React from "react"
import {
  ChakraProvider,
  theme,
  useDisclosure,
} from "@chakra-ui/react"
import { Sidebar } from "../Sidebar/Sidebar"
import { Header } from "../Header/Header"
import { HiMenu } from 'react-icons/hi'
import { Homepage } from "../Homepage/Homepage"
import { usePosition } from "use-position"
import axios from 'axios';

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    latitude,
    longitude,
  } = usePosition(false);
  
  React.useEffect(() => {
    // get bus and train routes and add to state to distribute to components
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Homepage longitude={longitude} latitude={latitude} />
      <HiMenu size="2em" style={{ margin: '10px' }} onClick={onOpen} />
      <Sidebar open={isOpen} onOpen={onOpen} onClose={onClose} />
    </ChakraProvider>
  )
}
