import React, { createContext, useContext, useState, useEffect } from "react";
import { getOrders, getInventory, getUsers, getPosts } from "./index"; // Import your API functions here

type ContextType = {
  posts: {}[];
  setposts: React.Dispatch<React.SetStateAction<{}[]>>;
  inventory: number;
  setInventory: React.Dispatch<React.SetStateAction<number>>;
  customers: {}[];
  setCustomers: React.Dispatch<React.SetStateAction<{}[]>>;
  revenue: number;
  setRevenue: React.Dispatch<React.SetStateAction<number>>;
};
const AppContext = createContext<ContextType | null>(null);

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setposts] = useState<{}[]>([]);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState<{}[]>([]);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res: any) => {
      setposts(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then((res: any) => {
      setInventory(res.total);
    });
    getUsers().then((res: any) => {
      setCustomers(res.users);
    });
    getPosts().then((res: any) => {
      setposts(res.posts);
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        posts,
        setposts,
        inventory,
        setInventory,
        customers,
        setCustomers,
        revenue,
        setRevenue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
