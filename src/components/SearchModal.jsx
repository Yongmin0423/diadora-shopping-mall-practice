import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import styles from "./SearchModal.module.css";
import { AnimatePresence, motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState();
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${keyword}`);
    toggleModal();
  };

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
        <form onSubmit={(e) => handleSubmit(e)} className={styles.searchArea}>
          <input placeholder="Search" onChange={(e) => handleChange(e)} />
          <FaMagnifyingGlass className={styles.maginfy} />
        </form>

        <IoCloseOutline onClick={toggleModal} className={styles.x} />
      </motion.div>
    </AnimatePresence>
  );
}
