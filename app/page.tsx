"use client";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdEditCalendar } from "react-icons/md";
import { BiSolidCommentDots } from "react-icons/bi";
import DoughnutChart from "./components/Dougnut";
import LineChart from "./components/LineChart";
import { useAppContext } from "./AppContext";
export default function Home() {
  const { posts, customers } = useAppContext()!;
  const cardsData = [
    { category: "Users", icon: <FaUserAlt />, count: customers.length },
    { category: "Posts", icon: <MdEditCalendar />, count: posts.length },
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
      <Text
        color="gray.500"
        fontSize="3xl"
        fontWeight="medium"
        marginBottom="10"
      >
        DASHBOARD
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
            height="36"
            boxShadow="lg"
          >
            <Box mr="4" fontSize="3xl" color="blueviolet">
              {card.icon}
            </Box>
            <Box textAlign="center">
              <Text fontSize="2xl">{card.category}</Text>
              <Text fontSize="xl" color="gray.600">
                {card.count}
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        marginTop="50px"
        width="full"
        gap="60px"
        height="300px"
      >
        <Box
          height="full"
          p="4"
          m="2"
          borderWidth="1px"
          borderRadius="lg"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          width="80"
          boxShadow="lg"
        >
          <DoughnutChart />
        </Box>
        <Box
          height="full"
          p="4"
          m="2"
          borderWidth="1px"
          borderRadius="lg"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          width="80"
          boxShadow="lg"
        >
          <LineChart />
        </Box>
      </Flex>
    </Flex>
  );
}
