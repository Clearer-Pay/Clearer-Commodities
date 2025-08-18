import styles from './styles.module.css'
import EscrowIcon from '../../assets/ourservices/escrowicon.svg';
import ContractManagementIcon from '../../assets/ourservices/contractmanagementicon.svg';
import SupplierVerificationIcon from '../../assets/ourservices/supplierverificationicon.svg';
import FinanceIcon from '../../assets/ourservices/financeicon.svg';
import LettersOfCreditIcon from '../../assets/ourservices/lettersofcrediticon.svg';

import InternationalTradeFacilitationIcon from '../../assets/ourservices/internationaltradefacilitationicon.svg';
import TradeRiskAdvisoryIcon from '../../assets/ourservices/traderiskadvisoryicon.svg';
import MarketAnalysisIcon from '../../assets/ourservices/marketanalysisicon.svg';

import FreightServicesIcon from '../../assets/ourservices/freightservicesicon.svg';
import CustomClearanceIcon from '../../assets/ourservices/customclearanceicon.svg';
import WarehouseStorageIcon from '../../assets/ourservices/warehousestorageicon.svg';
import ImportExportDocumentationIcon from '../../assets/ourservices/importexportdocumentationicon.svg';

import SupplierSourcingIcon from '../../assets/ourservices/suppliersourcingicon.svg';
import InternationalTradeFacilitationIconProcurement from '../../assets/ourservices/internationaltradefacilitationiconpro.svg';

import TradeComplianceIcon from '../../assets/ourservices/tradecomplianceicon.svg';
import ScreeningIcon from '../../assets/ourservices/screeningicon.svg';
import RegulatoryReportingIcon from '../../assets/ourservices/regulatoryreportingicon.svg';

import LanguageBarriersIcon from '../../assets/ourservices/languagebarriersicon.svg';
import DiverseRegulatoryIcon from '../../assets/ourservices/diverseregulatoryicon.svg';
import InternationalAccountingIcon from '../../assets/ourservices/internationalaccountingicon.svg';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


const OurServices = () => {
    const {service} = useParams()

    const formattedService = String(service).replace(/&/g, "and");

    useEffect(() => {
        const element = document.getElementById(formattedService);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center"
            });
        }
    }, [formattedService, service]);

    const services = [
        {
            category: "Trade Services",
            description: "We offer a suite of trade services designed to facilitate smooth transactions and mitigate risks associated with international trade. Our offerings include:",
            items: [
                { title: "Escrow", description: "Secure transactions with our escrow services, ensuring that funds are released only when agreed-upon conditions are met.", icon: <EscrowIcon /> },
                { title: "Contract Management", description: "Efficient management of contracts to protect your interests and ensure compliance.", icon: <ContractManagementIcon /> },
                { title: "Supplier Verification", description: "Comprehensive verification services to ensure the credibility and reliability of your suppliers.", icon: <SupplierVerificationIcon /> },
                { title: "Finance", description: "Access to competitive financing options to support your trade activities.", icon: <FinanceIcon /> },
                { title: "Letters of Credit", description: "Facilitation of letters of credit to provide payment assurance to sellers and buyers.", icon: <LettersOfCreditIcon /> },
            ]
        },
        {
            category: "Risk Management",
            description: "Navigating the complexities of international trade requires a robust risk management strategy. Our services include:",
            items: [
                { title: "International Trade Facilitation", description: "Expert assistance in navigating the intricacies of cross-border trade.", icon: <InternationalTradeFacilitationIcon /> },
                { title: "Trade Risk Advisory", description: "Tailored advisory services to identify and mitigate trade-related risks.", icon: <TradeRiskAdvisoryIcon /> },
                { title: "Market Analysis and Planning", description: "In-depth analysis and strategic planning to optimize market entry and operations.", icon: <MarketAnalysisIcon /> },
            ]
        },
        {
            category: "Logistics and Supply Chain",
            description: "We provide end-to-end logistics solutions to ensure the timely and efficient movement of goods. Our logistics services include:",
            items: [
                { title: "Freight Services", description: "Comprehensive freight solutions tailored to your business needs.", icon: <FreightServicesIcon /> },
                { title: "Custom Clearance", description: "Expert handling of customs procedures to ensure compliance and minimize delays.", icon: <CustomClearanceIcon /> },
                { title: "Warehouse Storage", description: "Secure storage solutions for your goods, ensuring safety and easy access.", icon: <WarehouseStorageIcon /> },
                { title: "Import/Export Documentation", description: "Assistance with all necessary documentation for smooth import and export processes.", icon: <ImportExportDocumentationIcon /> },
            ]
        },
        {
            category: "Procurement",
            description: "Our procurement services focus on optimizing your supply chain through:",
            items: [
                { title: "Supplier Sourcing and Management", description: "Strategic sourcing to identify and engage reliable suppliers.", icon: <SupplierSourcingIcon /> },
                { title: "International Trade Facilitation", description: "Expert support in navigating international trade processes.", icon: <InternationalTradeFacilitationIconProcurement /> },
            ]
        },
        {
            category: "Compliance",
            description: "Ensure your business operates within legal frameworks with our compliance services, which include:",
            items: [
                { title: "Trade Compliance and Sanctions", description: "Monitoring and ensuring compliance with trade regulations and sanctions.", icon: <TradeComplianceIcon /> },
                { title: "Screening", description: "Thorough screening processes to mitigate risks associated with potential partners.", icon: <ScreeningIcon /> },
                { title: "Regulatory Reporting", description: "Assistance with necessary reporting to comply with regulatory requirements.", icon: <RegulatoryReportingIcon /> },
            ]
        },
        {
            category: "Global Legal, Accounting & Concierge Solutions",
            description: "Navigating international markets involves diverse regulatory challenges. Our consulting services provide:",
            items: [
                { title: "Language Barriers, Compliance, and Dispute Resolution", description: "Language Barriers, Compliance, and Dispute Resolution.", icon: <LanguageBarriersIcon /> },
                { title: "Diverse Regulatory Frameworks", description: "Diverse Regulatory Frameworks.", icon: <DiverseRegulatoryIcon /> },
                { title: "International Accounting Standards (IAS)", description: "Expertise in IAS to ensure compliance and accurate financial reporting.", icon: <InternationalAccountingIcon /> },
                { title: "Concierge Services", description: "Concierge services provide tailored housing, relocation, and premium lodging arrangements to ensure comfort and convenience for international clients", icon: <CustomClearanceIcon /> },
            ]
        }
    ];



  return (
      <div className={styles['ourServices-container']}>
          <h1 className={styles['ourServices-heading'] }>Our Services</h1>
        {
            services.map((service, index) => 
            <div className={styles['service-wrapper']} key={index} id={service.category}>
                    <h1 className={styles['service-heading']}>{service.category}</h1>
                <p className={styles['service-description']}>{service.description}</p>
                    <ul className={styles['detail-services-list']}>
                {service.items.map((item, index) => 
                        <li key={index}>
                            {item.icon}
                            <p>{item.title}: <span>{item.description}</span></p>
                        </li>
                    )}
                </ul>
            </div>
            )
        }
        </div>
  )
}

export default OurServices