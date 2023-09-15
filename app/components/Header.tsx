"use client";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { Menu, MenuButton, IconButton } from "@chakra-ui/react";
const Header = ({ btnRef, onOpen }: any) => {
  return (
    <div className="bg-teal-700 text-white p-4">
      <Menu variant="blue">
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          ref={btnRef}
          onClick={onOpen}
        />
      </Menu>
    </div>
  );
};

export default Header;
