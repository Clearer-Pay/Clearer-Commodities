import styles from './styles.module.css';
import FirstIcon from '../../../assets/landingpage/aboutsection/firstIcon.svg';
import SecondIcon from '../../../assets/landingpage/aboutsection/secondIcon.svg';
import ThirdIcon from '../../../assets/landingpage/aboutsection/thirdIcon.svg';
import FirstImage from '../../../assets/landingpage/aboutsection/firstImage.png';
import SecondImage from '../../../assets/landingpage/aboutsection/secondImage.png';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <div className={styles.abountsectionWrapper}>
      <div className={styles.aboutsectionContainer}>
        <div className={styles.contents}>
          <motion.h1 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 }, x: 0 }}
            viewport={{ once: true, amount: .2 }}
          className={styles.whyChooseus}>Why Choose us?</motion.h1>
          <div className={styles.details}>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 }, y: 0 }}
              viewport={{ once: true, amount: .2 }}
            className={styles.contentDetails}>
              <FirstIcon />
              <h2>On Desk Procurement</h2>
              <p>
                CO utilizes five fundamental metrics to source commodities.
                These metrics rely on factors like the distance between delivery
                and source locations, optimized route selection for specific
                products, counterparties' currency values, comparative
                production costs concerning labor, and socio-economic elements
                such as country-specific production infrastructure and
                governmental policies on cargo, import duties, and subsidies.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 }, y: 0 }}
              viewport={{ once: true, amount: .2 }}
            className={styles.contentDetails}>
              <SecondIcon />
              <h2>Aggregated Sourcing</h2>
              <p>
                CO gets the struggles of expanding businesses that require small
                procurement quantities and face challenges due to economies of
                scale. We can aggregate procurement needs among our network of
                commodity buyers, consolidate them into a single requisition,
                and reduce individual small-scale spending costs. Additionally,
                we provide trade finance support.
              </p>
            </motion.div>
          </div>
        </div>

        <div className={styles.contents}>
          <motion.h1 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 }, x: 0 }}
            viewport={{ once: true, amount: .2 }}
          className={styles.abtusStyle}>About Us</motion.h1>
          <div className={styles.details}>
            <div className={styles.contentDetails}>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 }, y: 0 }}
                viewport={{ once: true, amount: .5 }}
              >
                Clearer Outsourcing is a trade solution enabling on-desk
                procurement and sourcing by leveraging intelligent metrics to
                identify markets that offer competitive advantages for either
                offering high end services, selling products or acquiring raw
                materials. It integrates management tools such as inventory
                management, End-to-end logistics, payment rails, and product
                distribution for an effective global trade experience.
              </motion.p>

              <motion.img 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 }, y: 0 }}
                viewport={{ once: true, amount: .5 }}
              src={FirstImage} alt="first image" className={styles.firstImg} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.aboutsectionContainer1}>
              <div className={`${styles.contents} ${styles.contentsB}`}>
          <div className={styles.details}>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 }, y: 0 }}
              viewport={{ once: true, amount: .2 }}
            className={styles.contentDetails}>
              <ThirdIcon />
              <h2>Distribution & Real Time Stock Management</h2>
              <p>
                CO drives the distribution of products and raw materials in
                emerging markets. Once a customized market study is completed
                and endorsed, with product validation & acceptance secured, we
                manage distribution through the region's wholesale outlets,
                assist with logistics, local payment orders, and deliver
                real-time stock inventory management for our clients.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.img 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 }, y: 0 }}
          viewport={{ once: true, amount: .2 }}
        src={SecondImage} alt="second image"  className={styles.secondImg}/>
      </div>
    </div>
  );
};

export default AboutSection;
