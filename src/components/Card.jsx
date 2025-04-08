import styles from "./Card.module.css";
import { motion } from "motion/react";

const CardVariants = {
  initial: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.1,
    y: -20,
  },
};

export default function Card({ productList }) {
  return (
    <div className={styles.container}>
      {productList.map((product) => (
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
              backgroundImage: `url(${product.img})`,
            }}
          ></div>
          <div className={styles.info}>
            <p>{product.new ? "new" : ""}</p>
            <p>{product.title}</p>
            <p>{product.price} KRW</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
