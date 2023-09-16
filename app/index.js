
export const getRevenue = () => {
  return fetch("https://dummyjson.com/carts").then((res) => res.json());
};

export const getInventory = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};
export const getUsers = () => {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
};
export const getPosts = () => {
  return fetch("https://dummyjson.com/posts").then((res) => res.json());
};
