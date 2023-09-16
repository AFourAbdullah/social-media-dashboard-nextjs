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
  const { customers } = useAppContext()!;
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    if (customers.length > 0) {
      setLoad(false);
    }
  }, []);
  console.log("cstmers", customers);
  return (
    <div className="flex flex-col items-center justify-center gap-8 w-[100vw]">
      <h2 className="text-center text-black text-2xl mt-5">USERS</h2>
      <TableContainer width="full">
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
            {customers.map((person: any) => (
              <Tr>
                <Td>
                  <img
                    src={person.image}
                    alt="profie image"
                    className="h-8 w-8 object-cover"
                  />
                </Td>
                <Td>{person.firstName}</Td>
                <Td isNumeric>{person.lastName}</Td>
                <Td isNumeric>{person.username}</Td>
                <Td isNumeric>{person.email}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default page;
