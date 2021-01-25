import { Box, Divider, Flex } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";

export const Legend = () => {
  const { push } = useHistory();
  return (
    <>
      <Divider marginTop={4} marginBottom={4} />
      <Box w={{ base: "100%" }}>
        <Flex
          alignItems="center"
          margin={2}
          onClick={() => push("/buses")}
          cursor="pointer"
          _hover={{
            color: "teal !important",
            backgroundColor: "red",
            fontWeight: 500,
          }}
        >
          <img src={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"} />
          <span>Bus Stops</span>
        </Flex>
        <Flex alignItems="center" margin={2}>
          <img src={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"} />
          <span>Train Stops (coming soon)</span>
        </Flex>
      </Box>
    </>
  );
};
