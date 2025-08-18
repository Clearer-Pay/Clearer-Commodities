import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import Loading from "../../../common/loading/Loading";
import MapImg from "../../../assets/navbarlinks/map-cropped.svg";
import { motion } from "framer-motion";
import { router } from "../../../app/router/Routes";
import { AppNavigationRoutes } from "../../../app/router/AppRoutes";

const Service = () => {
  const { service } = useParams();
  const [serviceInview, setServiceInview] = useState<{
    heading: string;
    description: string;
    link: string;
  }>();
  const [loading, setLoading] = useState(true);

  const Services = [
    {
      heading: "Letters of Credit",
      description:
        "Secure payment guarantees to minimize risk in international transactions for both buyers and sellers.",
      link: "/",
    },
    {
      heading: "Documentary Collections",
      description:
        "A safe method for handling international payments, ensuring goods are only shipped when payment terms are met.",
      link: "/",
    },
    {
      heading: "Trade Credit Insurance",
      description:
        "Protect your business from non-payment or default by buyers with comprehensive credit insurance.",
      link: "/",
    },
    {
      heading: "Export Credit Solutions",
      description:
        "Financing options to support export operations and grow your international business.",
      link: "/",
    },
    {
      heading: "Supply Chain Financing",
      description:
        "Customized solutions to improve cash flow throughout your entire supply chain.",
      link: "/",
    },
    {
      heading: "Early Payment Programs",
      description:
        "Get faster access to cash through early payment solutions for suppliers, improving your cash flow.",
      link: "/",
    },
    {
      heading: "Invoice Financing",
      description:
        "Turn your outstanding invoices into immediate working capital by securing financing against your receivables.",
      link: "/",
    },
    {
      heading: "Purchase Order Financing",
      description:
        "Secure financing to fulfill large orders without putting a strain on your cash reserves.",
      link: "/",
    },
    {
      heading: "Supplier Financing",
      description:
        "Strengthen your supplier relationships by offering them financing solutions that ensure timely payments.",
      link: "/",
    },
    {
      heading: "Risk Mitigation",
      description:
        "Protect your supply chain from disruptions by managing financial risks associated with global trade.",
      link: "/",
    },
    {
      heading: "Warehousing & Inventory Management",
      description:
        "Secure storage solutions and real-time inventory tracking to ensure product availability when needed.",
      link: "/",
    },
    {
      heading: "Transportation Services",
      description:
        "Strategic partnerships with reliable carriers to distribute products efficiently across various regions.",
      link: "/",
    },
    {
      heading: "Order Fulfillment",
      description:
        "End-to-end fulfillment services, from order processing to packaging and delivery.",
      link: "/",
    },
    {
      heading: "Last-Mile Delivery",
      description:
        "Fast and reliable last-mile delivery solutions to ensure timely product delivery to your customers.",
      link: "/",
    },
    {
      heading: "Distribution Planning",
      description:
        "Comprehensive planning to optimize routes, reduce costs, and improve delivery times.",
      link: "/",
    },
    {
      heading: "Export Documentation",
      description:
        "Complete management of all export documentation, including certificates of origin, commercial invoices, and packing lists.",
      link: "/",
    },
    {
      heading: "Global Freight Solutions",
      description:
        "Seamless shipping options tailored to the nature of your goods and destination requirements.",
      link: "/",
    },
    {
      heading: "Export Licensing",
      description:
        "Guidance on obtaining the necessary export licenses for specific goods.",
      link: "/",
    },
    {
      heading: "Trade Compliance",
      description:
        "Ensuring compliance with international trade laws, sanctions, and regulations.",
      link: "/",
    },
    {
      heading: "Market Research",
      description:
        "Insightful research into global market opportunities and strategies for successful market entry.",
      link: "/",
    },
    {
      heading: "Customs Clearance",
      description:
        "Hassle-free handling of customs documentation and procedures to avoid delays.",
      link: "/",
    },
    {
      heading: "Freight Management",
      description:
        "Flexible options for air, sea, and land freight, ensuring cost-effective transportation of goods.",
      link: "/",
    },
    {
      heading: "Import Licensing",
      description:
        "Assistance with acquiring the necessary licenses and permits for importing specific goods.",
      link: "/",
    },
    {
      heading: "Supplier Coordination",
      description:
        "Direct communication with international suppliers to guarantee timely delivery and quality assurance.",
      link: "/",
    },
    {
      heading: "Regulatory Compliance",
      description:
        "We ensure that your imports meet all necessary regulatory requirements in your country",
      link: "/",
    },
  ];

  useEffect(() => {
    if (service) {
      const currentService = Services.find(
        (serviceP) => serviceP.heading.toLowerCase() === service
      );

      setServiceInview(currentService);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [service]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles["service-container"]}>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5 },
          x: 0,
        }}
        viewport={{ once: true, amount: 0.5 }}
        className={styles["service-content"]}
      >
        <h1 className={styles["service-heading"]}>{serviceInview?.heading}</h1>
        <p className={styles["service-description"]}>
          {serviceInview?.description}
        </p>
        <button
          className={`${styles.getStartedS} buttonStyles`}
          onClick={() => router.navigate(AppNavigationRoutes.signup)}
        >
          Get Started
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5 },
          y: 0,
        }}
        viewport={{ once: true, amount: 0.5 }}
        className={styles["service-svg"]}
      >
        <MapImg />
      </motion.div>
    </div>
  );
};

export default Service;
