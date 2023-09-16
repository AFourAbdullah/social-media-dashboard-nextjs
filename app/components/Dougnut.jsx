import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useAppContext } from "../AppContext";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
  const { posts, customers } = useAppContext();

  const data = {
    labels: ["Customers", "Posts"],
    datasets: [
      {
        label: "Total Count",
        data: [customers.length, posts.length],
        backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
}
