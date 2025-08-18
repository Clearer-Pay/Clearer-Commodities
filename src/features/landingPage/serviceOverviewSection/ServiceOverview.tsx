import { AppNavigationRoutes } from "../../../app/router/AppRoutes";
import { router } from "../../../app/router/Routes";
import styles from "./styles.module.css";

const ServiceOverview = () => {
  return (
    <div className={styles.serviceOverviewContainer}>
      <div className={styles.serviceOverviewC}>
        <h1>
          Cross border <span>On desk procurement/Sourcing & Logistics</span>{" "}
          with the best of technological models
        </h1>

        <p>
          We maximize the potential value of nations and its businesses by
          providing comparative advantage in commerce
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
