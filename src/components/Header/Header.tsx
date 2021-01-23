import { Box, HStack, theme } from '@chakra-ui/react';
import React from 'react';
import { FC } from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

export const Header: FC = () => {
    console.log(theme)
    return (
        <HStack spacing="24px" background="red">
            <Box w="30px" h="30px" bg={theme.colors.transparent}>
                <ColorModeSwitcher justifySelf="flex-end" />
            </Box>
            <Box w="30px" h="30px" bg="yellow.200">
                <ColorModeSwitcher justifySelf="flex-end" />
            </Box>
        </HStack>
    )
}