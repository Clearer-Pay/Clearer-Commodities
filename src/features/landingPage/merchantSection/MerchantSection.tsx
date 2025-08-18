import styles from './styles.module.css';
import { useEffect, useRef, useState } from 'react';

import { DZ as AlgeriaIcon } from 'country-flag-icons/react/3x2';
import { AO as AngolaIcon } from 'country-flag-icons/react/3x2';
import { BJ as BeninIcon } from 'country-flag-icons/react/3x2';
import { BW as BotswanaIcon } from 'country-flag-icons/react/3x2';
import { BF as BurkinaFasoIcon } from 'country-flag-icons/react/3x2';
import { BI as BurundiIcon } from 'country-flag-icons/react/3x2';
import { CM as CameroonIcon } from 'country-flag-icons/react/3x2';
import { CV as CapeVerdeIcon } from 'country-flag-icons/react/3x2';
import { TD as ChadIcon } from 'country-flag-icons/react/3x2';
import { CG as CongoIcon } from 'country-flag-icons/react/3x2';
import { CD as DRCongoIcon } from 'country-flag-icons/react/3x2';
import { DJ as DjiboutiIcon } from 'country-flag-icons/react/3x2';
import { EG as EgyptIcon } from 'country-flag-icons/react/3x2';
import { GQ as EGuineaIcon } from 'country-flag-icons/react/3x2';
import { ET as EthiopiaIcon } from 'country-flag-icons/react/3x2';
import { GA as GabonIcon } from 'country-flag-icons/react/3x2';
import { GH as GhanaIcon } from 'country-flag-icons/react/3x2';
import { CI as IvoryCoastIcon } from 'country-flag-icons/react/3x2';
import { NG as NigeriaIcon } from 'country-flag-icons/react/3x2';
import { ZA as SouthAfricaIcon } from 'country-flag-icons/react/3x2';


// asian flags
import { AU as AustraliaIcon } from 'country-flag-icons/react/3x2';
import { BD as BangladeshIcon } from 'country-flag-icons/react/3x2';
import { CN as ChinaIcon } from 'country-flag-icons/react/3x2';
import { HK as HongKongIcon } from 'country-flag-icons/react/3x2';
import { IN as IndiaIcon } from 'country-flag-icons/react/3x2';
import { ID as IndonesiaIcon } from 'country-flag-icons/react/3x2';
import { JP as JapanIcon } from 'country-flag-icons/react/3x2';
import { MY as MalaysiaIcon } from 'country-flag-icons/react/3x2';
import { NP as NepalIcon } from 'country-flag-icons/react/3x2';
import { NZ as NewZealandIcon } from 'country-flag-icons/react/3x2';
import { PK as PakistanIcon } from 'country-flag-icons/react/3x2';
import { PH as PhilippinesIcon } from 'country-flag-icons/react/3x2';
import { SG as SingaporeIcon } from 'country-flag-icons/react/3x2';
import { KR as SouthKoreaIcon } from 'country-flag-icons/react/3x2';
import { LK as SriLankaIcon } from 'country-flag-icons/react/3x2';
import { TH as ThailandIcon } from 'country-flag-icons/react/3x2';
import { KI as KiribatiIcon } from 'country-flag-icons/react/3x2';
import { FJ as FijiIcon } from 'country-flag-icons/react/3x2';
import { TK as TokelauIcon } from 'country-flag-icons/react/3x2';
import { WS as WesternSamoaIcon } from 'country-flag-icons/react/3x2';
import { SB as SolomonIslandsIcon } from 'country-flag-icons/react/3x2';
import { WF as WallisFutunaIcon } from 'country-flag-icons/react/3x2';
import { TV as TuvaluIcon } from 'country-flag-icons/react/3x2';
import { CC as KeelingIslandsIcon } from 'country-flag-icons/react/3x2';
import { NR as NauruIcon } from 'country-flag-icons/react/3x2';
import { CK as CookIslandsIcon } from 'country-flag-icons/react/3x2';
import { NC as NewCaledoniaIcon } from 'country-flag-icons/react/3x2';
import { PN as PitcairnIslandIcon } from 'country-flag-icons/react/3x2';
import { VU as VanuatuIcon } from 'country-flag-icons/react/3x2';
import { VN as VietnamIcon } from 'country-flag-icons/react/3x2';


// american flags

import { CO as ColombiaIcon } from 'country-flag-icons/react/3x2';
import { BR as BrazilIcon } from 'country-flag-icons/react/3x2';
import { AR as ArgentinaIcon } from 'country-flag-icons/react/3x2';
import { CL as ChileIcon } from 'country-flag-icons/react/3x2';
import { PE as PeruIcon } from 'country-flag-icons/react/3x2';
import { UY as UruguayIcon } from 'country-flag-icons/react/3x2';
import { CA as CanadaIcon } from 'country-flag-icons/react/3x2';
import { US as USAIcon } from 'country-flag-icons/react/3x2';
import { GL as GreenlandIcon } from 'country-flag-icons/react/3x2';
import { NU as NiueIcon } from 'country-flag-icons/react/3x2';


// european flags
import { NL as NetherlandsIcon } from 'country-flag-icons/react/3x2';
import { AD as AndorraIcon } from 'country-flag-icons/react/3x2';
import { BE as BelgiumIcon } from 'country-flag-icons/react/3x2';
import { GP as GuadeloupeIcon } from 'country-flag-icons/react/3x2';
import { EE as EstoniaIcon } from 'country-flag-icons/react/3x2';
import { FI as FinlandIcon } from 'country-flag-icons/react/3x2';
import { FR as FranceIcon } from 'country-flag-icons/react/3x2';
import { DE as GermanyIcon } from 'country-flag-icons/react/3x2';
import { GR as GreeceIcon } from 'country-flag-icons/react/3x2';
import { IE as IrelandIcon } from 'country-flag-icons/react/3x2';
import { IT as ItalyIcon } from 'country-flag-icons/react/3x2';
import { LV as LatviaIcon } from 'country-flag-icons/react/3x2';
import { LT as LithuaniaIcon } from 'country-flag-icons/react/3x2';
import { LU as LuxembourgIcon } from 'country-flag-icons/react/3x2';
import { MT as MaltaIcon } from 'country-flag-icons/react/3x2';
import { PT as PortugalIcon } from 'country-flag-icons/react/3x2';
import { SK as SlovakiaIcon } from 'country-flag-icons/react/3x2';
import { SI as SloveniaIcon } from 'country-flag-icons/react/3x2';
import { ES as SpainIcon } from 'country-flag-icons/react/3x2';
import { AT as AustriaIcon } from 'country-flag-icons/react/3x2';
import { HR as CroatiaIcon } from 'country-flag-icons/react/3x2';
import { CY as CyprusIcon } from 'country-flag-icons/react/3x2';
import { MQ as MartiniqueIcon } from 'country-flag-icons/react/3x2';
import { YT as MayotteIcon } from 'country-flag-icons/react/3x2';
import { DK as DenmarkIcon } from 'country-flag-icons/react/3x2';
import { SE as SwedenIcon } from 'country-flag-icons/react/3x2';
import { GF as FrenchGuianaIcon } from 'country-flag-icons/react/3x2';
import { RE as ReunionIcon } from 'country-flag-icons/react/3x2';
import { XK as KosovoIcon } from 'country-flag-icons/react/3x2';
import { SM as SanMarinoIcon } from 'country-flag-icons/react/3x2';
import { VA as VaticanCityIcon } from 'country-flag-icons/react/3x2';
import { BL as StBarthelemyIcon } from 'country-flag-icons/react/3x2';
import { PM as SaintPierreMiquelonIcon } from 'country-flag-icons/react/3x2';
import { AX as AalandIslandIcon } from 'country-flag-icons/react/3x2';
import { MF as MartinIcon } from 'country-flag-icons/react/3x2';
import { MC as MonacoIcon } from 'country-flag-icons/react/3x2';
import { motion } from 'framer-motion';


interface Country {
    name: string;
    icon: JSX.Element;
}


const MerchantSection = () => {
    const [activeButton, setActiveButton] = useState<string>('sourcing');
    const [continentSelected, setContinentSelected] = useState<string>('Africa')
    

    const merchantContinents = ['Africa', 'AsiaPacific', 'Europe', 'America']

    const africanCountries = [
        { name: 'Algeria', icon: <AlgeriaIcon /> },
        { name: 'Angola', icon: <AngolaIcon /> },
        { name: 'Benin', icon: <BeninIcon /> },
        { name: 'Botswana', icon: <BotswanaIcon /> },
        { name: 'Burkina Faso', icon: <BurkinaFasoIcon /> },
        { name: 'Burundi', icon: <BurundiIcon /> },
        { name: 'Cameroon', icon: <CameroonIcon /> },
        { name: 'Cape Verde', icon: <CapeVerdeIcon /> },
        { name: 'Chad', icon: <ChadIcon /> },
        { name: 'Congo', icon: <CongoIcon /> },
        { name: 'DR Congo', icon: <DRCongoIcon /> },
        { name: 'Djibouti', icon: <DjiboutiIcon /> },
        { name: 'Egypt', icon: <EgyptIcon /> },
        { name: 'E. Guinea', icon: <EGuineaIcon /> },
        { name: 'Ethiopia', icon: <EthiopiaIcon /> },
        { name: 'Gabon', icon: <GabonIcon /> },
        { name: 'Ghana', icon: <GhanaIcon /> },
        { name: 'Ivory Coast', icon: <IvoryCoastIcon /> },
        { name: 'Nigeria', icon: <NigeriaIcon /> },
        { name: 'South Africa', icon: <SouthAfricaIcon /> }
    ];
    const asiaPacificCountries = [
        { name: 'Australia', icon: <AustraliaIcon /> },
        { name: 'Bangladesh', icon: <BangladeshIcon /> },
        { name: 'China', icon: <ChinaIcon /> },
        { name: 'Hong Kong', icon: <HongKongIcon /> },
        { name: 'India', icon: <IndiaIcon /> },
        { name: 'Indonesia', icon: <IndonesiaIcon /> },
        { name: 'Japan', icon: <JapanIcon /> },
        { name: 'Malaysia', icon: <MalaysiaIcon /> },
        { name: 'Nepal', icon: <NepalIcon /> },
        { name: 'New Zealand', icon: <NewZealandIcon /> },
        { name: 'Pakistan', icon: <PakistanIcon /> },
        { name: 'Philippines', icon: <PhilippinesIcon /> },
        { name: 'Singapore', icon: <SingaporeIcon /> },
        { name: 'South Korea', icon: <SouthKoreaIcon /> },
        { name: 'Sri Lanka', icon: <SriLankaIcon /> },
        { name: 'Thailand', icon: <ThailandIcon /> },
        { name: 'Kiribati', icon: <KiribatiIcon /> },
        { name: 'Fiji', icon: <FijiIcon /> },
        { name: 'Tokelau', icon: <TokelauIcon /> },
        { name: 'W. Samoa', icon: <WesternSamoaIcon /> },
        { name: 'Solomon Islands', icon: <SolomonIslandsIcon /> },
        { name: 'Wallis Futuna', icon: <WallisFutunaIcon /> },
        { name: 'Tuvalu', icon: <TuvaluIcon /> },
        { name: 'Keeling Islands', icon: <KeelingIslandsIcon /> },
        { name: 'Nauru', icon: <NauruIcon /> },
        { name: 'Cook Islands', icon: <CookIslandsIcon /> },
        { name: 'New Caledonia', icon: <NewCaledoniaIcon /> },
        { name: 'Pitcairn Island', icon: <PitcairnIslandIcon /> },
        { name: 'Vanuatu', icon: <VanuatuIcon /> },
        { name: 'Vietnam', icon: <VietnamIcon /> }
    ];

    const americaCountries = [
        { name: 'Colombia', icon: <ColombiaIcon /> },
        { name: 'Brazil', icon: <BrazilIcon /> },
        { name: 'Argentina', icon: <ArgentinaIcon /> },
        { name: 'Chile', icon: <ChileIcon /> },
        { name: 'Peru', icon: <PeruIcon /> },
        { name: 'Uruguay', icon: <UruguayIcon /> },
        { name: 'Canada', icon: <CanadaIcon /> },
        { name: 'USA', icon: <USAIcon /> },
        { name: 'Greenland', icon: <GreenlandIcon /> },
        { name: 'Niue', icon: <NiueIcon /> }
    ];

    const europeanCountries = [
        { name: 'Netherlands', icon: <NetherlandsIcon /> },
        { name: 'Andorra', icon: <AndorraIcon /> },
        { name: 'Belgium', icon: <BelgiumIcon /> },
        { name: 'Guadeloupe', icon: <GuadeloupeIcon /> },
        { name: 'Estonia', icon: <EstoniaIcon /> },
        { name: 'Finland', icon: <FinlandIcon /> },
        { name: 'France', icon: <FranceIcon /> },
        { name: 'Germany', icon: <GermanyIcon /> },
        { name: 'Greece', icon: <GreeceIcon /> },
        { name: 'Ireland', icon: <IrelandIcon /> },
        { name: 'Italy', icon: <ItalyIcon /> },
        { name: 'Latvia', icon: <LatviaIcon /> },
        { name: 'Lithuania', icon: <LithuaniaIcon /> },
        { name: 'Luxembourg', icon: <LuxembourgIcon /> },
        { name: 'Malta', icon: <MaltaIcon /> },
        { name: 'Portugal', icon: <PortugalIcon /> },
        { name: 'Slovakia', icon: <SlovakiaIcon /> },
        { name: 'Slovenia', icon: <SloveniaIcon /> },
        { name: 'Spain', icon: <SpainIcon /> },
        { name: 'Austria', icon: <AustriaIcon /> },
        { name: 'Croatia', icon: <CroatiaIcon /> },
        { name: 'Cyprus', icon: <CyprusIcon /> },
        { name: 'Martinique', icon: <MartiniqueIcon /> },
        { name: 'Mayotte', icon: <MayotteIcon /> },
        { name: 'Denmark', icon: <DenmarkIcon /> },
        { name: 'Sweden', icon: <SwedenIcon /> },
        { name: 'French Guiana', icon: <FrenchGuianaIcon /> },
        { name: 'Reunion', icon: <ReunionIcon /> },
        { name: 'Kosovo', icon: <KosovoIcon /> },
        { name: 'San Marino', icon: <SanMarinoIcon /> },
        { name: 'Vatican City', icon: <VaticanCityIcon /> },
        { name: 'St. Barthelemy', icon: <StBarthelemyIcon /> },
        { name: 'Saint Pierre & Miquelon', icon: <SaintPierreMiquelonIcon /> },
        { name: 'Aaland Island', icon: <AalandIslandIcon /> },
        { name: 'Martin', icon: <MartinIcon /> },
        { name: 'Principality of Monaco', icon: <MonacoIcon /> }
    ];

    const renderCountries = (continentCountries: Country[], active: boolean) => (
        <ul className={`${styles.countries} ${active ? styles.slideIn :  styles.slideOut}`  }>
            {continentCountries.map((country, index) => (
                <li key={index}>
                    <button className="buttonStyles">
                        <div>{country.icon}</div>
                        <p>{country.name}</p>
                    </button>
                </li>
            ))}
        </ul>
    );




  return (
    <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 }, y: 0 }}
          viewport={{ once: true, amount: .2 }}
    className={styles.merchantsectionContainer}>
          <h1>Clearer <span>footprints</span> across regions</h1>
          <div className={styles.MerchantControlsWrapper}>
              <button onClick={() => setActiveButton('sourcing')} className={`${styles.merchantBtn} buttonStyles  ${activeButton === 'sourcing' ? styles.activeBtnM : ''
                  }`}>Merchant Sourcing</button>
              <button onClick={() => setActiveButton('distribution')} className={`${styles.merchantBtn} buttonStyles  ${activeButton === 'distribution' ? styles.activeBtnM : ''
                  }`}>Merchant Distribution & Stock Managment</button>
          </div>
          <div className={styles.continentsWrapper}>
            <ul className={styles.continents}>
                {merchantContinents.map((continent, index)=> (
                    <li className={`${styles.continentBtn} buttonStyles  $`}  key={index} >
                        <button className={continentSelected === continent ? styles.activeContinent : ''
                        } onClick={() => setContinentSelected(continent)} >{continent}</button>
                    </li>
                ))}
            </ul>
          </div>

          {continentSelected === 'Africa' && renderCountries(africanCountries, true)}
          {continentSelected === 'AsiaPacific' && renderCountries(asiaPacificCountries, true)}
          {continentSelected === 'America' && renderCountries(americaCountries, true)}
          {continentSelected === 'Europe' && renderCountries(europeanCountries, true)}
    </motion.div>
  )
}

export default MerchantSection