"use client";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { getUsers } from "..";
import { useAppContext } from "../AppContext";

const page = () => {
  const { posts } = useAppContext()!;
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    if (posts.length > 0) {
      setLoad(false);
    }
  }, []);
  console.log("cstmers", posts);
  return (
    <div className="flex flex-col items-center justify-center gap-8 w-[100vw]">
      <h2 className="text-center text-black text-2xl mt-5">USERS</h2>
      <TableContainer width="auto">
        <Table
          variant="striped"
          maxWidth="full"
          size="sm"
          colorScheme="teal"
          overflowX="hidden"
        >
          <Thead bg="teal.700" color="white">
            <Tr className="text-white">
              <Th color="white">Image</Th>

              <Th color="white">First Name</Th>
              <Th color="white">Last Name</Th>
              <Th color="white">User Name</Th>
              <Th color="white" isNumeric>
                Email
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {posts.map((post: any) => (
              <Tr>
                <Td>{post.id}</Td>
                <Td>{post.title}</Td>
                <Td>{post.reactions}</Td>
                <Td className="flex items-center gap-2 text-sm font-bold">
                  {post.tags.map((tag: string) => (
                    <h6>{tag}</h6>
                  ))}
                </Td>
                <Td>{post.userId}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default page;
