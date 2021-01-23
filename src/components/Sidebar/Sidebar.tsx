import { Box, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import React from 'react';
import { FC, useState } from 'react';
import { FaTrain, FaWindowClose } from 'react-icons/fa';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { DrawerFooterStyled, DrawerHeaderStyled, FadeStyled, SettingsIconStyled, SidebarTextItem } from './SidebarStyles';

export interface SidebarProps {
    open: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { open, onClose } = props;
    const [settingsOpen, setSettingsOpen] = useState<boolean>(false)
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
                        <h3>Transit</h3>
                        <FaWindowClose onClick={onClose} className="close-icon" />
                    </DrawerHeaderStyled>
                    <DrawerBody>
                        <SidebarTextItem fontSize="xl">Map</SidebarTextItem>
                        <SidebarTextItem fontSize="xl">Favorites</SidebarTextItem>
                        <SidebarTextItem fontSize="xl">Service Status</SidebarTextItem>
                    </DrawerBody>
                    <DrawerFooterStyled>
                        <SettingsIconStyled onClick={() => setSettingsOpen(!settingsOpen)} />
                        <FadeStyled in={settingsOpen}>
                            <Box
                                p="5px"
                                w="100%"
                                h="100px"
                                borderTop="1px solid #E2E8F0"
                            >
                                <ColorModeSwitcher justifySelf="flex-end" />
                            </Box>
                        </FadeStyled>
                    </DrawerFooterStyled>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
}
