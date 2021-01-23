import { Box, HStack, theme } from '@chakra-ui/react';
import React from 'react';
import { FC } from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

export const Header: FC = () => {
    console.log(theme)
    return (
        <HStack spacing="24px">
            Header
        </HStack>
    )
}