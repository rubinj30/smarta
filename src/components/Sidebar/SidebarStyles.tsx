import { SettingsIcon } from "@chakra-ui/icons";
import { DrawerFooter, DrawerHeader, Fade, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const DrawerHeaderStyled = styled(DrawerHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .close-icon {
    justify-self: flex-end;
  }
`;

export const DrawerFooterStyled = styled(DrawerFooter)`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
`;

export const SettingsStyled = styled.div`
  width: 95%;
  background: #e2e8f0;
  border: 1px solid #e2e8f0;
  height: 100px;
  padding: 1.5rem;
`;

export const SettingsIconStyled = styled(SettingsIcon)`
  align-self: flex-end;
`;

export const FadeStyled = styled(Fade)`
  width: 100%;
`;

export const SidebarTextItem = styled(Text)`
  cursor: pointer;
  &:hover {
    font-weight: 500;
    transition: 0.2s;
  }
`;
