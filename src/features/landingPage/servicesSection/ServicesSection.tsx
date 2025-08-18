import styles from "./styles.module.css";
import Star from "././../../../assets/landingpage/servicessection/star.svg";
import { router } from "../../../app/router/Routes";
import { AppNavigationRoutes } from "../../../app/router/AppRoutes";

const ServicesSection = () => {
  const services = [
    {
      title: "Trade Services",
      items: [
        "Escrow",
        "Finance",
        "Supplier Verification",
        "Contract Management",
        "Letters of Credit (LCs)",
      ],
    },
    {
      title: "Logistics & Supply Chain",
      items: [
        "Freight Services",
        "Custom Clearance",
        "Warehouse Storage",
        "Import/Export Documentation",
        "Maritime & Shipping Services",
      ],
    },
    {
      title: "Compliance",
      items: [
        "Trade Compliance & Sanctions",
        "Screening",
        "Regulatory Reporting",
      ],
    },
    {
      title: "Risk Management",
      items: [
        "International Trade Facilitation",
        "Trade Risk Advisory",
        "Market Analysis & Planning",
      ],
    },
    {
      title: "Procurement",
      items: [
        "Supplier Sourcing & Management",
        "International Trade Facilitation",
      ],
    },
    {
      title: "Global Legal, Accounting & Concierge Solutions",
      items: [
        "Language barriers, Compliance, and Dispute Resolution",
        "Diverse Regulatory Frameworks",
        "International Accounting Standards(IAS)",
        "Concierge Services"
      ],
    },
  ];
  return (
    <div className={styles.servicesContainer}>
      <h2>Our Services</h2>

      <div className={styles.services}>
        {services.map((serviceCont, index) => (
          <button
            key={index}
            onClick={() =>
              router.navigate(
                `/${AppNavigationRoutes.ourServices}/${serviceCont.title}`
              )
            }
            className={styles.service}
          >
            <div>
              <h1>
                <Star /> {serviceCont.title}
              </h1>
              <ul>
                {serviceCont.items.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
