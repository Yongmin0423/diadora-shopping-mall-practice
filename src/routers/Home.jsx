import { useEffect, useState } from "react";
import { getProducts } from "../api";
import { AnimatePresence, motion } from "motion/react";
import Card from "../components/Card";
import styles from "./Home.module.css";

const imgs = ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg"];

export default function Home() {
  const [productList, setProductList] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const data = await getProducts();
      console.log(data);
      setProductList(data);
    };
    getData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % imgs.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const bannerVariants = {
    initial: {
      // opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      // opacity: 0,
      x: -100,
    },
    transition: {
      duration: 0.8,
      type: "tween",
    },
  };
  return (
    <>
      <div className={styles.banner}>
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={imgs[index]}
            variants={bannerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </AnimatePresence>
      </div>
      <div>
        <h3 className={styles.highlight}>Highlight</h3>
      </div>
      <Card productList={productList} />
    </>
  );
}
