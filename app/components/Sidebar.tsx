"use client";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerHeader,
  DrawerCloseButton,
  DrawerFooter,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuItem,
  IconButton,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Sidebar({ isOpen, onClose, onOpen, btnRef }: any) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>DASHBOARD</DrawerHeader>

          <DrawerBody>
            <Link href="/">Dashboard</Link>
          </DrawerBody>

          <DrawerFooter>Social Media</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
