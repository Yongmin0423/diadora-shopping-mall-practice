import { useEffect, useState } from "react";
import { getProducts } from "../api";
import Card from "../components/Card";

export default function Home() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getProducts();
      console.log(data);
      setProductList(data);
    };
    getData();
  }, []);
  return (
    <>
      <Card productList={productList} />
    </>
  );
}
