import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import styles from "./SearchModal.module.css";
import { AnimatePresence, motion } from "motion/react";

const modalVariants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -50,
  },
};

export default function SearchModal({ toggleModal }) {
  return (
    <AnimatePresence>
      <motion.div
        variants={modalVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: "tween", duration: 0.3 }}
        className={styles.container}
      >
        <div className={styles.searchArea}>
          <input placeholder="Search" />
          <FaMagnifyingGlass className={styles.maginfy} />
        </div>
        <IoCloseOutline onClick={toggleModal} className={styles.x} />
      </motion.div>
    </AnimatePresence>
  );
}
