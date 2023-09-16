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
import React, { useContext, useEffect, useState } from "react";
import { getUsers } from "..";
import { useAppContext } from "../AppContext";

const page = () => {
  const { customers } = useAppContext()!;
  const [load, setLoad] = useState(false);
  const [data, setdata] = useState<{}[]>([]);

  useEffect(() => {
    setLoad(true);
    if (customers.length > 0) {
      setLoad(false);
      setdata(customers.slice(0, 10));
    }
  }, [customers]);
  console.log("cstmers", customers);
  return (
    <div className="flex flex-col items-center justify-center gap-8 w-[100vw]">
      <Text color="gray.500" fontSize="3xl" fontWeight="medium" marginTop="10">
        USERS
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
              {data.map((person: any) => (
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
      )}
    </div>
  );
};

export default page;
