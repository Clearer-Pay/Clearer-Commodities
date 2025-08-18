import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Logo from "../../../assets/Clearerpay-outsourcing-black---png-white(2).png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import useClickOutside from "../../../hooks/useClickOutside";
import { router } from "../../router/Routes";
import { AppNavigationRoutes } from "../../router/AppRoutes";
import { useParams } from "react-router-dom";
interface NavbarProps {
  setShowIframe: (index: boolean) => void;
  showIframe: boolean;
}
const Navbar = (props: NavbarProps) => {
  const { param } = useParams();
  const { setShowIframe, showIframe } = props;
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const sideNavRef = useRef(null);
  useClickOutside(sideNavRef, () => setOpenMobileNav(false));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={isScrolled ? styles.navbarShadow : ""}>
      <div
        ref={sideNavRef}
        sidebar-vis={openMobileNav ? "true" : "false"}
        className={styles.sideBarNav}
      >
        <div className={styles.ClsBtnHeader}>
          <button onClick={() => setOpenMobileNav(false)}>
            <IoCloseOutline />
          </button>
          <span>Menu</span>
        </div>
        <ul>
          <li>
            <a
              className={param === "import" ? styles.active : ""}
              href={`/${AppNavigationRoutes.moreDetailsRoutes}/import`}
            >
              Import
            </a>
          </li>
          <li>
            <a
              className={param === "export" ? styles.active : ""}
              href={`/${AppNavigationRoutes.moreDetailsRoutes}/export`}
            >
              Export
            </a>
          </li>
          <li>
            <a
              className={param === "distribution" ? styles.active : ""}
              href={`/${AppNavigationRoutes.moreDetailsRoutes}/distribution`}
            >
              Distribution
            </a>
          </li>
          <li>
            <a
              className={param === "supply chain finance" ? styles.active : ""}
              href={`/${AppNavigationRoutes.moreDetailsRoutes}/supply chain finance`}
            >
              Supply Chain Finance
            </a>
          </li>
          <li>
            <a
              className={param === "trade finance" ? styles.active : ""}
              href={`/${AppNavigationRoutes.moreDetailsRoutes}/trade finance`}
            >
              Trade Finance
            </a>
          </li>
          <li>
            <a href={`${AppNavigationRoutes.contact}`}>Contact</a>
          </li>
        </ul>
      </div>

      <div
        onClick={() => {
          // setShowIframe(false);
          router.navigate("/");
        }}
        className={styles.logo}
      >
        <img src={Logo} alt="logo" />
      </div>

      <div className={styles.mainList}>
        <ul>
          <li>
            <a
              className={param === "import" ? styles.active : ""}
              href={`/${AppNavigationRoutes.moreDetailsRoutes}/import`}
            >
              Import
            </a>
          </li>
          <li>
            <a
              className={param === "export" ? styles.active : ""}
              href={`/${AppNavigationRoutes.moreDetailsRoutes}/export`}
            >
              Export
            </a>
          </li>
          <li>
            <a
              className={param === "distribution" ? styles.active : ""}
              href={`/${AppNavigationRoutes.moreDetailsRoutes}/distribution`}
            >
              Distribution
            </a>
          </li>
          <li>
            <a
              className={param === "supply chain finance" ? styles.active : ""}
              href={`/${AppNavigationRoutes.moreDetailsRoutes}/supply chain finance`}
            >
              Supply Chain Finance
            </a>
          </li>
          <li>
            <a
              className={param === "trade finance" ? styles.active : ""}
              href={`/${AppNavigationRoutes.moreDetailsRoutes}/trade finance`}
            >
              Trade Finance
            </a>
          </li>
          <li>
            <a href={`${AppNavigationRoutes.contact}`}>Contact</a>
          </li>
        </ul>

        <button
          className={`${styles.loginBtn} buttonStyles`}
          onClick={() => {
            router.navigate(AppNavigationRoutes.signup);
          }}
        >
          Sign Up
        </button>
        <button
          onClick={() => setOpenMobileNav(true)}
          className={styles.hamburgerBtn}
        >
          <RxHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
