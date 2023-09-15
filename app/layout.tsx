"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";

import Sidebar from "./components/Sidebar";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen = true, onOpen, onClose } = useDisclosure();
  const btnRef = React.createRef<HTMLButtonElement>();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <Header btnRef={btnRef} onOpen={onOpen} />
          <Sidebar btnRef={btnRef} onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
