import { SidebarTextItem } from "../SidebarStyles";
import React, { FC } from "react";
import { DrawerBody } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const items = [
  {
    text: "Nearest Stops",
    route: "/",
  },
  {
    text: "Service Status",
    route: "/status",
  },
  {
    text: "Map",
    route: "/map",
  },
  // TODO: add backend and save favorites
  // {
  //     text: 'Favorites',
  //     route: '/favorites',
  // },
];

export interface SidebarBodyProps {
  onClose: () => void;
}

export const SidebarBody: FC<SidebarBodyProps> = (props) => {
  const { onClose } = props;
  const { push } = useHistory();

  const onSelectItem = (route: string) => {
    onClose();
    push(route);
  };
  const sidebarItems = items.map((item) => (
    <SidebarTextItem
      key={item.text}
      onClick={() => onSelectItem(item.route)}
      fontSize="xl"
      _hover={{
        color: "teal.500",
      }}
    >
      {item.text}
    </SidebarTextItem>
  ));
  return <DrawerBody>{sidebarItems}</DrawerBody>;
};