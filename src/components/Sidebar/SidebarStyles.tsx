import { DrawerFooter, DrawerHeader, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const DrawerHeaderStyled = styled(DrawerHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 120px;
  .close-icon {
    justify-self: flex-end;
  }
`;

export const DrawerFooterStyled = styled(DrawerFooter)`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  margin-bottom: 70px;
`;

export const SettingsStyled = styled.div`
  width: 95%;
  background: #e2e8f0;
  border: 1px solid #e2e8f0;
  height: 100px;
  padding: 1.5rem;
`;

export const SidebarTextItem = styled(Text)`
  cursor: pointer;
  margin: 20px 4px;
  &:hover {
    transition: 0.1s;
  }
`;
