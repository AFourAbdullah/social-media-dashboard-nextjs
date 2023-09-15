import React, { createContext, useContext, useState, useEffect } from "react";
import { getOrders, getInventory, getUsers } from "./index"; // Import your API functions here

type ContextType = {
  orders: number;
  setOrders: React.Dispatch<React.SetStateAction<number>>;
  inventory: number;
  setInventory: React.Dispatch<React.SetStateAction<number>>;
  customers: number;
  setCustomers: React.Dispatch<React.SetStateAction<number>>;
  revenue: number;
  setRevenue: React.Dispatch<React.SetStateAction<number>>;
};
const AppContext = createContext<ContextType | null>(null);

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res: any) => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then((res: any) => {
      setInventory(res.total);
    });
    getUsers().then((res: any) => {
      setCustomers(res.total);
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        orders,
        setOrders,
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
