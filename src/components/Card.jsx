import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { motion } from "motion/react";

const CardVariants = {
  initial: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1,
    y: -10,
  },
};

export default function Card({ productList }) {
  if (!productList) return;
  return (
    <div className={styles.container}>
      {productList.slice(0, 8).map((product) => (
        <Link to={`/product/${product.id}`}>
          <motion.div
            variants={CardVariants}
            initial="initial"
            whileHover="hover"
            key={product.id}
            className={styles.cardContainer}
          >
            <div
              className={styles.card}
              style={{
                backgroundImage: `url(${product.img.replace(/^\//, "")})`,
              }}
            ></div>
            <div className={styles.info}>
              <p>{product.new ? "new" : ""}</p>
              <p>{product.title}</p>
              <p>{product.price} KRW</p>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
