"use client";
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
} from "@chakra-ui/react";
import React from "react";

export default function Sidebar() {
  const { isOpen = true, onOpen, onClose } = useDisclosure();
  const btnRef = React.createRef<HTMLButtonElement>();

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="teal"
        className="bg-black"
        onClick={onOpen}
        alignSelf="left"
        left="10"
        position="absolute"
        top="3"
      >
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
