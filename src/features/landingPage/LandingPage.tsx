import HeroSection from './heroSection/HeroSection';
import styles from './styles.module.css';
import ServiceOverview from './serviceOverviewSection/ServiceOverview';
import MerchantSection from './merchantSection/MerchantSection';
import AboutSection from './aboutSection/AboutSection';
import ServicesSection from './servicesSection/ServicesSection';
const LandingPage = () => {
 

  return (
    <div className={styles.landingpg}>
      <HeroSection/>
      <ServiceOverview/>
      <MerchantSection/>
      <AboutSection/>
      <ServicesSection/>
    </div>
  );
};

export default LandingPage;
