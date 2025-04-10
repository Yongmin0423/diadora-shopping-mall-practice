export const getProducts = async () => {
  const url = `https://my-json-server.typicode.com/Yongmin0423/diadora-shopping-mall-practice/products`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getProductDetail = async (id) => {
  const url = `https://my-json-server.typicode.com/Yongmin0423/diadora-shopping-mall-practice/products/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getProductBySearch = async (q) => {
  const url = `https://my-json-server.typicode.com/Yongmin0423/diadora-shopping-mall-practice/products?q=${q}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};
