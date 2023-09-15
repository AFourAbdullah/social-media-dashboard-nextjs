export const getOrders = () => {
  return fetch("https://dummyjson.com/carts/2").then((res) => res.json());
};
export const getRevenue = () => {
  return fetch("https://dummyjson.com/carts").then((res) => res.json());
};

export const getInventory = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};
export const getUsers = () => {
  return fetch("https://dummyapi.io/data/v1/user").then((res) => res.json());
};
export const getComments = () => {
  return fetch("https://dummyjson.com/comments").then((res) => res.json());
};