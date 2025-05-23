import styles from "./Nav.module.css";
import { FaShoppingBag } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLogout } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";
import SearchModal from "./SearchModal";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavVariants = {
  initial: {
    color: "rgb(255, 255, 255)",
    backgroundColor: "rgba(225, 255, 255, 0)",
  },
  hover: {
    color: "RGB(0, 0, 0)",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
};

const LogoVariants = {
  initial: {
    fill: "rgb(255,255,255)",
  },
  hover: {
    fill: "rgb(0,0,0)",
  },
};

const sidebarVariants = {
  hidden: {
    x: "-100%",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    x: "-100%",
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

export default function Nav({ authenticate, setAuthenticate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Check if screen is mobile size
  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    // Initial check
    checkSize();

    // Add event listener
    window.addEventListener("resize", checkSize);

    // Clean up
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleLogout = () => {
    setAuthenticate(false);
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          variants={NavVariants}
          initial="initial"
          whileHover="hover"
          className={styles.container}
        >
          {isMobile && (
            <div className={styles.hamburger}>
              <GiHamburgerMenu onClick={toggleSidebar} />
            </div>
          )}

          <Link to="/" className={isMobile ? styles.centerLogo : ""}>
            <svg
              className={styles.logo}
              viewBox="114.96999999999994 202.91 2605.07 895.34"
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="100"
            >
              <motion.g variants={LogoVariants}>
                <path d="M547.05 202.91c-10.4 0-18.9 8.51-18.9 18.9v536.68c-39.13-64.11-109.73-106.92-190.34-106.92-123.07 0-222.84 99.77-222.84 222.84s99.77 222.84 222.84 222.84c80.61 0 151.21-42.81 190.34-106.92v89.01c0 10.4 8.51 18.9 18.9 18.9 10.4 0 18.9-8.51 18.9-18.9V221.81c0-10.39-8.51-18.9-18.9-18.9zM662.01 650.57h-11.07c-7.35 0-13.37 6.01-13.37 13.37v420.93c0 7.35 6.01 13.37 13.37 13.37h11.07c7.35 0 13.37-6.01 13.37-13.37V663.94c0-7.35-6.02-13.37-13.37-13.37zM1153.45 650.57h-11.07c-7.35 0-13.37 6.01-13.37 13.37v96.81c-38.84-65.36-110.12-109.18-191.67-109.18-123.07 0-222.84 99.77-222.84 222.84s99.77 222.84 222.84 222.84c81.55 0 152.83-43.82 191.67-109.18v96.81c0 7.35 6.01 13.37 13.37 13.37h11.07c7.35 0 13.37-6.01 13.37-13.37V663.94c-.01-7.35-6.02-13.37-13.37-13.37zM2706.68 650.57h-11.07c-7.35 0-13.36 6.01-13.36 13.37v99.65c-38.45-66.92-110.58-112.02-193.3-112.02-123.07 0-222.84 99.77-222.84 222.84s99.77 222.84 222.84 222.84c82.71 0 154.85-45.1 193.3-112.02v99.65c0 7.35 6.01 13.37 13.36 13.37h11.07c7.35 0 13.36-6.01 13.36-13.37V663.94c0-7.35-6.01-13.37-13.36-13.37zM657.72 236.73h-2.49c-9.71 0-17.66 7.95-17.66 17.66v81.57c0 9.71 7.95 17.66 17.66 17.66h2.49c9.71 0 17.66-7.95 17.66-17.66v-81.57c0-9.71-7.95-17.66-17.66-17.66zM1623.43 202.91c-10.4 0-18.9 8.51-18.9 18.9v534.05c-39.44-62.64-109.17-104.29-188.65-104.29-123.07 0-222.84 99.77-222.84 222.84s99.77 222.84 222.84 222.84c79.49 0 149.21-41.65 188.65-104.29v86.38c0 10.4 8.51 18.9 18.9 18.9s18.9-8.51 18.9-18.9V221.81c0-10.39-8.51-18.9-18.9-18.9z" />
                <path d="M2343.01 626.32c76.05-45.45 166.45-43.86 167.33-43.87 9.98.16 18.3-7.63 18.56-17.63.26-9.99-7.64-18.3-17.63-18.56-4.09-.11-101.55-1.98-186.82 48.98-52.81 31.55-88.23 73.42-111.09 109.41v-40.72c0-7.35-6.01-13.37-13.36-13.37h-11.07c-7.35 0-13.37 6.01-13.37 13.37v420.93c0 7.35 6.01 13.37 13.37 13.37H2200c7.35 0 13.36-6.01 13.36-13.37V786.33c7.23-20.73 41.91-107.58 129.65-160.01z" />
                <ellipse
                  cx="1894.71"
                  cy="874.41"
                  rx="222.84"
                  ry="222.84"
                  transform="rotate(-45.001 1894.706 874.432)"
                />
                <path d="M2042.24 571.98h171.11c-47.75-86.55-182.05-192-182.05-192 119.38-13.93 182.05-66.65 182.05-66.65l-128.33-75.61s-66.65 55.71-161.16 55.71-219.85-46.76-219.85-46.76l-19.9 18.9c260.64 64.68 358.13 306.41 358.13 306.41z" />
              </motion.g>
            </svg>
          </Link>

          {!isMobile && (
            <ul className={styles.menu}>
              <li className={styles.orange}>#Run</li>
              <li>Men</li>
              <li>Women</li>
              <li>Shoes</li>
              <li>Acc.</li>
              <li>Sport</li>
              <span>|</span>
              <li>Outlet</li>
              <li>Promotion</li>
              <li>Lookbook</li>
            </ul>
          )}

          <div className={styles.searchArea}>
            <FaMagnifyingGlass onClick={toggleModal} />
            {!isMobile && (
              <>
                <FaShoppingBag />
                {!authenticate && <FiLogIn onClick={goToLogin} />}
                {authenticate && (
                  <>
                    <IoPerson />
                    <MdOutlineLogout onClick={handleLogout} />
                  </>
                )}
              </>
            )}
          </div>
        </motion.div>

        {isOpen && <SearchModal isOpen={isOpen} toggleModal={toggleModal} />}

        {/* Sidebar for mobile view */}
        <AnimatePresence>
          {isSidebarOpen && (
            <>
              <motion.div
                className={styles.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleSidebar}
              />
              <motion.div
                className={styles.sidebar}
                variants={sidebarVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className={styles.sidebarHeader}>
                  <button
                    className={styles.closeButton}
                    onClick={toggleSidebar}
                  >
                    &times;
                  </button>
                  <h2>Menu</h2>
                </div>

                {/* User actions section in sidebar for mobile */}
                {isMobile && (
                  <div className={styles.sidebarUserActions}>
                    <div className={styles.sidebarIcon}>
                      <FaShoppingBag />
                      <span>Cart</span>
                    </div>

                    {!authenticate ? (
                      <div className={styles.sidebarIcon} onClick={goToLogin}>
                        <FiLogIn />
                        <span>Login</span>
                      </div>
                    ) : (
                      <>
                        <div className={styles.sidebarIcon}>
                          <IoPerson />
                          <span>Account</span>
                        </div>
                        <div
                          className={styles.sidebarIcon}
                          onClick={handleLogout}
                        >
                          <MdOutlineLogout />
                          <span>Logout</span>
                        </div>
                      </>
                    )}
                  </div>
                )}

                <ul className={styles.sidebarMenu}>
                  <li className={styles.orange}>#Run</li>
                  <li>Men</li>
                  <li>Women</li>
                  <li>Shoes</li>
                  <li>Acc.</li>
                  <li>Sport</li>
                  <li>Outlet</li>
                  <li>Promotion</li>
                  <li>Lookbook</li>
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </AnimatePresence>
    </>
  );
}
