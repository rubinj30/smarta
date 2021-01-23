import { DrawerHeader } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const DrawerHeaderStyled = styled(DrawerHeader)`
    display: flex;
    align-items: center;
    width: 100%;
    .close-icon {
       justify-self: flex-end;
    }
`