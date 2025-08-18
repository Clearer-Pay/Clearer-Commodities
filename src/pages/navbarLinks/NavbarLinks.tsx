import styles from './styles.module.css'
import { useParams } from 'react-router-dom'
import ArrorRightIcon from '../../assets/navbarlinks/arrow-right.svg'
import TradeFinanceImg from '../../assets/navbarlinks/tradeFinanceImage.png'
import SupplyChainImg from '../../assets/navbarlinks/supplychainImage.png'
import DistributionImg from '../../assets/navbarlinks/distributionImg.png'
import ExportImg from '../../assets/navbarlinks/exportimg.png'
import ImportImg from '../../assets/navbarlinks/importimg.png'
import { useEffect, useState } from 'react'
import Loading from '../../common/loading/Loading'
import { AppNavigationRoutes } from '../../app/router/AppRoutes'
import { motion } from 'framer-motion'

const NavbarLinks = () => {
  const { param } = useParams<{ param?: string }>();
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }, [param])


  const tradeFinanceDetails = {
    heading: 'Facilitating Secure and Efficient International Transactions',
    description: 'Our Trade Finance solutions help businesses manage risks, improve cash flow, and execute international transactions securely. Whether you’re buying or selling, we provide the financial tools you need to conduct global business.',
    list: [
      'Letters of Credit',
      'Documentary Collections',
      'Trade Credit Insurance',
      'Export Credit Solutions',
      'Supply Chain Financing'
    ],
    name: 'trade finance',
    image: TradeFinanceImg
  };

  const supplyChainFinanceDetails = {
    heading: 'Unlock Capital and Enhance Cash Flow',
    description: 'Our Supply Chain Finance solutions are designed to optimize working capital, giving you and your suppliers access to flexible funding. We help you improve liquidity while maintaining a stable supply chain.',
    list: [
      'Early Payment Programs',
      'Invoice Financing',
      'Purchase Order Financing',
      'Supplier Financing',
      'Risk Mitigation'
    ],
    name: 'supply chain finance',
    image: SupplyChainImg
  };

  const distributionDetails = {
    heading: 'Optimize Your Product Distribution',
    description: 'Our distribution services are designed to move your goods efficiently through supply chains to reach your customers, wherever they are. We offer the flexibility and scalability required for both local and global distribution needs.',
    list: [
      'Warehousing and Inventory Management',
      'Transportation Services',
      'Order Fulfilment',
      'Last-Mile Delivery',
      'Distribution Planning'
    ],
    name: 'distribution',
    image: DistributionImg
  };

  const exportDetails = {
    heading: 'Expand Your Reach with Our Export Services',
    description: 'Take your products to international markets with confidence. Our export services help you navigate the complexities of cross-border sales, ensuring smooth operations from order processing to final delivery.',
    list: [
      'Export Documentation',
      'Global Freight Solutions',
      'Export Licensing',
      'Trade Compliance',
      'Market Research'
    ],
    name: 'export',
    image: ExportImg
  };

  const importDetails = {
    heading: 'Unlock Global Markets with Our Import Services',
    description: 'Expand your business by sourcing the best products from around the world. We offer comprehensive import solutions to streamline your supply chain, manage logistics, and ensure compliance with international trade regulations.',
    list: [
      'Customs Clearance',
      'Freight Management',
      'Import Licensing',
      'Supplier Coordination',
      'Regulatory Compliance'
    ],
    name: 'import',
    image: ImportImg
  };

  const detailsMap = {
    'trade finance': tradeFinanceDetails,
    'supply chain finance': supplyChainFinanceDetails,
    'distribution': distributionDetails,
    'export': exportDetails,
    'import': importDetails
  }

  type DetailsMapKey = keyof typeof detailsMap;
  const detailInView: { heading: string, description: string, list: string[], name: string, image: string } = detailsMap[param as DetailsMapKey]

  if (loading) {
    return <Loading />
  }
  return (
    <div className={styles['detail-container']}>
      <motion.div className={styles['detail-content']}
        initial={{opacity: 0, x: 50}}
        whileInView={{opacity: 1, transition:{delay: 0.2, duration:0.5}, x: 0}}
        viewport={{once: true, amount: .5}}
      >
        <h1 className={styles['detail-heading']}>{detailInView?.heading}</h1>
        <p className={styles['detail-description']}>{detailInView?.description}</p>

        <p className={styles['detail-services-intro']}>
          Our {detailInView?.name} services include:
        </p>

        <div className={styles['detail-services-list-img']}>
          <ul className={styles['detail-services-list']}>
            {detailInView?.list?.map((item, index) => (
              <motion.li 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, transition: { delay: 0.2 * index, duration: 0.3 }, x: 0 }}
                viewport={{ once: true, amount: .5 }}
              key={index} className={styles['detail-service-item']}>
                <a href={`/${AppNavigationRoutes.moreDetailsRoutes}/${param}/${(item).toLowerCase()}`}><ArrorRightIcon /> {item}</a>
              </motion.li>
            ))}
          </ul>
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 0.5}, y: 0 }}
            viewport={{ once: true, amount: .5 }}
            className={styles['detail-image']}
            src={detailInView?.image}
            alt={`${detailInView?.name} image`}
          />
        </div>
      </motion.div>

      <div>
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 }, y: 0 }}
          viewport={{ once: true, amount: .5 }}
          className={styles['detail-image']}
          src={detailInView?.image}
          alt={`${detailInView?.name} image`}
        />
      </div>
    </div>

  )
}

export default NavbarLinks