import { AppNavigationRoutes } from "../../../app/router/AppRoutes";
import { router } from "../../../app/router/Routes";
import styles from "./styles.module.css";

const ServiceOverview = () => {
  return (
    <div className={styles.serviceOverviewContainer}>
      <div className={styles.serviceOverviewC}>
        <h1>
           Bringing<span>African Producers</span>{" "}
          to your markets.
        </h1>

        <p>
          We maximize the potential value of nations and its businesses by
          providing comparative advantage in commodity trading
        </p>

        <button
          className="buttonStyles"
          onClick={() => router.navigate(AppNavigationRoutes.signup)}
        >
          Get Started{" "}
        </button>
      </div>
    </div>
  );
};

export default ServiceOverview;
