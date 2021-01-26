import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FC, useState } from "react";
import { FaBus } from "react-icons/fa";
import {
  DrawerFooterStyled,
  DrawerHeaderStyled,
  FaWindowCloseStyled,
} from "./SidebarStyles";
import { SidebarBody } from "./SidebarBody/SidebarBody";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { SettingsIcon } from "@chakra-ui/icons";

export interface SidebarProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  btnRef: any;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { open, onClose, btnRef } = props;

  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  return (
    <Drawer
      isOpen={open}
      onClose={onClose}
      onOverlayClick={onClose}
      isFullHeight={true}
      placement="left"
      finalFocusRef={btnRef}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeaderStyled borderBottomWidth="1px" height={120}>
            <FaBus size={40} />
            <Heading as="h1" size="xl" display="flex" alignItems="center">
              SMARTA
            </Heading>
            <FaWindowCloseStyled
              onClick={onClose}
              className="close-icon"
              cursor="pointer"
              size={40}
            />
          </DrawerHeaderStyled>
          <SidebarBody onClose={onClose} />
          <DrawerFooterStyled fontSize="xl">
            <Flex
              alignSelf="flex-end"
              alignItems="center"
              onClick={() => setSettingsOpen(!settingsOpen)}
              cursor="pointer"
            >
              <Text marginRight={2}>Settings</Text>
              <SettingsIcon />
            </Flex>
            {settingsOpen ? (
              <Box w="100%">
                <Box p="5px" w="100%" h="100px" borderTop="1px solid #E2E8F0">
                  <ColorModeSwitcher justifySelf="flex-end" />
                </Box>
              </Box>
            ) : null}
          </DrawerFooterStyled>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
