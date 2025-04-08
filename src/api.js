export const getProducts = async () => {
  const url = `http://localhost:5000/products`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
