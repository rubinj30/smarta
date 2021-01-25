import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FC, useState } from "react";
import { FaBus, FaWindowClose } from "react-icons/fa";
import {
  DrawerFooterStyled,
  DrawerHeaderStyled,
  FadeStyled,
} from "./SidebarStyles";
import { SidebarBody } from "./SidebarBody/SidebarBody";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { SettingsIcon } from "@chakra-ui/icons";

export interface SidebarProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { open, onClose } = props;
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  return (
    <Drawer
      isOpen={open}
      onClose={onClose}
      onOverlayClick={onClose}
      isFullHeight={true}
      placement="left"
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeaderStyled borderBottomWidth="1px">
            <FaBus />
            <h3>Transit</h3>
            <FaWindowClose onClick={onClose} className="close-icon" />
          </DrawerHeaderStyled>
          <SidebarBody onClose={onClose} />
          <DrawerFooterStyled>
            <Flex
              alignSelf="flex-end"
              alignItems="center"
              onClick={() => setSettingsOpen(!settingsOpen)}
            >
              <Text marginRight={2}>Settings</Text>
              <SettingsIcon />
            </Flex>
            <FadeStyled in={settingsOpen}>
              <Box p="5px" w="100%" h="100px" borderTop="1px solid #E2E8F0">
                <ColorModeSwitcher justifySelf="flex-end" />
              </Box>
            </FadeStyled>
          </DrawerFooterStyled>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
