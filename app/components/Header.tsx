"use client";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { Menu, MenuButton, IconButton } from "@chakra-ui/react";
const Header = ({ btnRef, onOpen }: any) => {
  return (
    <div className="bg-teal-700 text-white p-4 flex justify-around">
      <Menu variant="blue">
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          ref={btnRef}
          onClick={onOpen}
          bg="white"
        />
      </Menu>
      <h3 className="text-center">Social Media</h3>
    </div>
  );
};

export default Header;
