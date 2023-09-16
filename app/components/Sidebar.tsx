"use client";
import { AiFillDashboard, AiFillFacebook } from "react-icons/ai";
import { SiWalletconnect } from "react-icons/si";
import { ImUsers } from "react-icons/im";
import { BsFillPostcardFill } from "react-icons/bs";
import { FaCopyright } from "react-icons/fa";
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
          <DrawerHeader
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "30px",
              gap: "10px",
              width: "100%",
              paddingRight: "60px",
            }}
          >
            <SiWalletconnect />
            <h4>DASHBOARD</h4>
          </DrawerHeader>

          <DrawerBody
            bgGradient="linear(to-t, teal.400,teal.700)"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              gap: "60px",
            }}
          >
            <Link
              href="/"
              className="w-full pl-6  flex items-center gap-4 text-white text-2xl"
            >
              <AiFillDashboard />
              <p>Dashboard</p>
            </Link>
            <Link
              href="/users"
              className="w-full pl-6  flex items-center gap-4 text-white text-2xl"
            >
              <ImUsers />
              <p>Users</p>
            </Link>

            <Link
              href="/posts"
              className="w-full pl-6  flex items-center gap-4 text-white text-2xl"
            >
              <BsFillPostcardFill />
              <p>Posts</p>
            </Link>
          </DrawerBody>

          <DrawerFooter
            style={{ display: "flex", justifyContent: "center", gap: "50px" }}
          >
            <FaCopyright /> CopyRights Reserved
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
