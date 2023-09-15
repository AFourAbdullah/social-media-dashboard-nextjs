"use client";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdEditCalendar } from "react-icons/md";
import { BiSolidCommentDots } from "react-icons/bi";
export default function Home() {
  const cardsData = [
    { category: "Users", icon: <FaUserAlt />, count: 1 },
    { category: "Posts", icon: <MdEditCalendar />, count: 1 },
    { category: "Comments", icon: <BiSolidCommentDots />, count: 1 },
  ];
  useEffect(() => {}, []);
  return (
    <Flex
      flexWrap="wrap"
      direction="column"
      justifyContent="center"
      alignItems="center"
      m="10"
    >
      <Text color="gray.500" fontSize="3xl" fontWeight="medium">
        Dashboard
      </Text>
      <Flex>
        {cardsData.map((card, index) => (
          <Box
            key={index}
            p="4"
            m="2"
            borderWidth="1px"
            borderRadius="lg"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            width="60"
            height="28"
          >
            <Box mr="4" fontSize="3xl" color="blueviolet">
              {card.icon}
            </Box>
            <Box textAlign="center">
              <Text fontSize="xl">{card.category}</Text>
              <Text fontSize="md" color="gray.600">
                {card.count}
              </Text>
            </Box>
          </Box>
        ))}
        <Box>
          <div></div>
        </Box>
      </Flex>
    </Flex>
  );
}
