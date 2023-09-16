"use client";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { TiSocialInstagramCircular } from "react-icons/ti";

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
      <div className="w-[96%] flex items-center justify-center">
        <h3 className="text-2xl flex justify-center gap-2 items-center text-white font-bold italic">
          <TiSocialInstagramCircular /> Social Media
        </h3>
      </div>
    </div>
  );
};

export default Header;
