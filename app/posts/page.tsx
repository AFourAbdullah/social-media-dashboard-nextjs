"use client";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { BiSolidLike } from "react-icons/bi";
import { AiFillTags } from "react-icons/ai";

import React, { useContext, useEffect, useState } from "react";
import { getUsers } from "..";
import { useAppContext } from "../AppContext";

const page = () => {
  const { posts } = useAppContext()!;
  const [load, setLoad] = useState(false);
  const [data, setdata] = useState<{}[]>([]);
  useEffect(() => {
    setLoad(true);
    if (posts.length > 0) {
      setLoad(false);
      setdata(posts.slice(0, 10));
    }
  }, [posts]);
  console.log("cstmerszz", data);
  console.log("cstmers", posts);
  return (
    <div className="flex flex-col items-center justify-center gap-8 w-[100vw]">
      <Text color="gray.500" fontSize="3xl" fontWeight="medium" marginTop="20">
        POSTS
      </Text>
      {load && (
        <div className="animate-spin h-20 w-20 rounded-full mx-auto border-r-2 border-l-2 border-slate-900"></div>
      )}
      {data.length > 0 && (
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
                <Th color="white">ID</Th>

                <Th color="white">Title</Th>
                <Th color="white">Reactions</Th>
                <Th color="white">Tags</Th>
                <Th color="white" isNumeric>
                  Posted By
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((post: any) => (
                <Tr>
                  <Td>{post.id}</Td>
                  <Td>{post.title}</Td>
                  <Td textAlign="center">{post.reactions}</Td>
                  <Td className="flex items-center gap-2 text-sm font-bold">
                    {post.tags.map((tag: string) => (
                      <h6>{tag}</h6>
                    ))}
                  </Td>
                  <Td>User:#{post.userId}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default page;
