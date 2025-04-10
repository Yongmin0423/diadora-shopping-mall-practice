import { useSearchParams } from "react-router-dom";
import { getProductBySearch } from "../api";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import styles from "./Search.module.css";

export default function Search() {
  const [query] = useSearchParams();
  const [product, setProduct] = useState();
  const searchQuery = query.get("q") || "";
  console.log(searchQuery);

  useEffect(() => {
    const getData = async () => {
      const data = await getProductBySearch(searchQuery);
      console.log("Ddd", data);
      setProduct(data);
    };
    getData();
  }, [searchQuery]);

  return (
    <>
      <div className={styles.empty}></div>
      <div>{<Card productList={product} />}</div>
    </>
  );
}
