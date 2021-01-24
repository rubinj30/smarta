import React, { FC } from "react";
import { Box, Heading, Flex, Center } from "@chakra-ui/react";
import { HiMenuStyled } from "./HeaderStyles";
import { FaTrain } from "react-icons/fa";

interface HeaderProps {
  onOpen: () => void;
}

export const Header: FC<HeaderProps> = (props) => {
  const { onOpen } = props;
  return (
    <Box w="100%">
      <Center flex="1" height="3rem">
        <HiMenuStyled
          data-testid="hamburger-icon"
          size="2em"
          onClick={onOpen}
        />
        <Heading as="h3" size="lg" display="flex" alignItems="center">
          <span style={{ paddingRight: 10 }}>SMARTA</span> <FaTrain />
        </Heading>
      </Center>
    </Box>
  );
};
