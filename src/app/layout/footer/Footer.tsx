import styles from "./styles.module.css";
import Logo from "../../../assets/Clearerpay-outsourcing-black---png-white(2).png";
import FirsFlagIcon from "../../../assets/footer/nigeria.svg";
import SecondFlag from "../../../assets/footer/secondFlag.svg";
import ThirdFlag from "../../../assets/footer/ghana.svg";
import FourthFlag from "../../../assets/footer/UkFlag.svg";
import TwitterIcon from "../../../assets/footer/twitter.svg";
import LinkedinIcon from "../../../assets/footer/linkedin.svg";
import FacebookIcon from "../../../assets/footer/facebook.svg";
import { AppNavigationRoutes } from "../../router/AppRoutes";
import { router } from "../../router/Routes";

const Footer = () => {
    const footerLinks = [
        {
            category: "Services",
            links: [
                "Import",
                "Export",
                "Distribution",
                "Supply Chain Finance",
                "Trade Finance",
            ]
        },
        {
            category: "Company",
            links: [
                "About us",
                "Careers"
            ]
        },
        {
            category: "Quick Links",
            links: [
                "Login",
                "Sign Up"
            ]
        },
        {
            category: "24/7 Support",
            links: [
                "FAQs",
                "Contact us"
            ]
        },
        {
            category: "Legal",
            links: [
                "Legal",
                "Terms of use",
                "Privacy policy"
            ]
        }
    ];
  return (
    <div className={styles.footerContainer}>
      <img src={Logo} alt="logo" />

      <div className={styles.footer2}>
        {footerLinks.map((linksCont, index) => (
          <div key={index} className={styles.linkList}>
            <h2>{linksCont.category}</h2>
            <ul>
              {linksCont.links.map((link, index) => (
                <li key={index}>
                  <p
                    // href={
                    //   linksCont.category === "Services"
                    //     ? `/${
                    //         AppNavigationRoutes.moreDetailsRoutes
                    //       }/${link.toLowerCase()}`
                    //     : link === "Contact us"
                    //     ? `/${AppNavigationRoutes.contact}`
                    //     : `/${link.toLowerCase().replace(/\s+/g, "-")}`
                    // }
                    onClick={() => {
                      if (linksCont.category === "Services") {
                        router.navigate(
                          `/${
                            AppNavigationRoutes.moreDetailsRoutes
                          }/${link.toLowerCase()}`
                        );
                      }
                      if (link === "Contact us") {
                        router.navigate(AppNavigationRoutes.contact);
                      }
                    }}
                  >
                    {link}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.bottomFlags}>
          <div className={styles.location}>
          <ThirdFlag />
          <p className={styles.locationAddress}>
            5, Agoali Street, Seminary Madina, Greater Accra, Accra, Ghana.
          </p>
        </div>
        <div className={styles.location}>
          <FirsFlagIcon />
          <p className={styles.locationAddress}>
            Property gate Centre, 2 The Rock Drive, CBD, Lekki Phase 1, Lagos,
            Nigeria.
          </p>
        </div>
        
        <div className={styles.location}>
          <FourthFlag />
          <p className={styles.locationAddress}>
            20 Aylestone Drive, Leicester, England, LE2 8QD
          </p>
        </div>
        
      </div>

      <div className={styles.socialmediasP}>
        <div className={styles.socialmediasL}>
          <p>Find us on social media</p>
          <div>
            <button>
              <TwitterIcon />
            </button>
            <button>
              <LinkedinIcon />
            </button>
            <button>
              <FacebookIcon />
            </button>
          </div>
        </div>
        <p className={styles.copyright}>© 2025 Clearer Limited.</p>
      </div>
    </div>
  );
};

export default Footer
