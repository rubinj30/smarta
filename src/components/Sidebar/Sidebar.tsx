import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { FC, useState } from 'react';
import { FaTrain, FaWindowClose } from 'react-icons/fa';
import { DrawerHeaderStyled } from '../../styles/styles';

export interface SidebarProps {
    open: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { open, onOpen, onClose } = props;
    const color = useColorMode();
    console.log({ color })
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
                        <FaTrain />
                        <h3>Basic Drawer</h3>
                        <FaWindowClose onClick={onClose} className="close-icon" />
                    </DrawerHeaderStyled>
                    <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
}
