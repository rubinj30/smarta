import React, { FC } from "react";
import { Box, Heading, Center } from "@chakra-ui/react";
import { HiMenuStyled } from "./HeaderStyles";
import { FaBus, FaTrain } from "react-icons/fa";

interface HeaderProps {
  onOpen: () => void;
  btnRef: any;
}

export const Header: FC<HeaderProps> = (props) => {
  const { onOpen, btnRef } = props;
  return (
    <Box w="100%" h={70} display="flex" alignItems="center">
      <Center flex="1" height={{ base: "3rem", md: "4rem", lg: "5rem" }}>
        <Box ref={btnRef} position="absolute" left={0}>
          <HiMenuStyled
            cursor="pointer"
            data-testid="hamburger-icon"
            size="2em"
            onClick={onOpen}
          />
        </Box>
        <Heading as="h1" size="xl" display="flex" alignItems="center">
          <FaTrain />
          <span style={{ paddingRight: 10, paddingLeft: 10 }}>SMARTA</span>{" "}
          <FaBus />
        </Heading>
      </Center>
    </Box>
  );
};
