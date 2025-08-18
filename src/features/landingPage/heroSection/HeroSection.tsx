import styles from './styles.module.css';
import YLocationIcon from '../../../assets/landingpage/herosection/location-tick.svg'
import SupplyOIcon from '../../../assets/landingpage/herosection/courthouse.svg'
import DeliveryDIcon from '../../../assets/landingpage/herosection/location-add.svg'
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { Form, Formik } from 'formik';
import SelectTemp, { InputTemp, SelectTempWithFlag } from '../../../custom/form/input';
import { IDelivery } from '../../../app/models/delivery';
import deliveryHeroPageSchema from '../authentication/schemas/heroPageSchemas';
import Map from '../../../assets/landingpage/herosection/world-cropped.svg'
import LocationIcon from '../../../assets/landingpage/herosection/location-tick-2.svg'
import DestinationIcon from '../../../assets/landingpage/herosection/location-add-2.svg'
import CourthHouse from '../../../assets/landingpage/herosection/courthouse-2.svg'
import TickCircleIcon from '../../../assets/landingpage/herosection/tick-circle.svg'
import Modal from '../../../common/modals/Modal';
import ArrowDownIcon from '../../../assets/searchPage/arrow-down.svg';
import { router } from '../../../app/router/Routes';
import { motion } from 'framer-motion'
import { Tooltip } from 'react-tooltip';
import { AppNavigationRoutes } from '../../../app/router/AppRoutes';

const HeroSection = () => {
    const [activeButton, setActiveButton] = useState<string>('customer');
    const [thankYouModal, setThankYouModal] = useState(false)

    const [showFilter, setShowFilter] = useState(false)
    const [selectedLocationCountry, setSelectedLocationCountry] = useState<{ name: string, code: string } | null>()
    const [selectedDestinationCountry, setSelectedDestinationCountry] = useState<{ name: string, code: string } | null>()
    const [selectedSupplyCountry, setSelectedSupplyCountry] = useState<{ name: string, code: string } | null>()
    const [destinationCountryStyle, setDestinationCountryStyle] = useState<{ top: string, left: string } | null>();
    const [supplyCountryStyle, setSupplyCountryStyle] = useState<{ top: string, left: string } | null>();
    const [locationCountryStyle, setLocationCountryStyle] = useState<{ top: string, left: string, } | null>();

    const lineRef = useRef<HTMLDivElement | null>(null);
    const lineRef2 = useRef<HTMLDivElement | null>(null);
    const locationIconRef = useRef<HTMLDivElement | null>(null);
    const destinationIconRef = useRef<HTMLDivElement | null>(null);
    const supplyIconRef = useRef<HTMLDivElement | null>(null);

    const animateIcon = (iconRef: React.RefObject<HTMLDivElement | null>) => {
        if (iconRef.current) {
            iconRef.current.classList.remove(styles.selected);
            setTimeout(() => {
                if (iconRef.current) {
                    iconRef.current.classList.add(styles.selected);
                }
            }, 10);
        }
    };

    useEffect(() => {
        if (selectedLocationCountry) {
            animateIcon(locationIconRef);
        }
    }, [selectedLocationCountry]);

    useEffect(() => {
        if (selectedDestinationCountry) {
            animateIcon(destinationIconRef);
        }
    }, [ selectedDestinationCountry]);

    useEffect(() => {
        if (selectedSupplyCountry) {
            animateIcon(supplyIconRef);
        }
    }, [selectedSupplyCountry]);

    

    const handleChangeDestination = (destination: { top: string, left: string }) => {
        setDestinationCountryStyle(destination);
    };

    const handleChangeLocation = (location: { top: string, left: string}) => {
        setLocationCountryStyle(location);
    };

    const handleChangeSupplyCountry = (supply: { top: string, left: string }) => {
        setSupplyCountryStyle(supply);
    };
  



    const initialValues: IDelivery = {
        senderLocation: '',
        supplyOrigin: '',
        deliveryDestination: '',
        category: '',
        subcategory: '',
        product: '',
    }

    const formField = [{ name: 'Your location', icon: <YLocationIcon />, id: 'senderLocation' }, { name: 'Supply Origin (Optional)', icon: <SupplyOIcon />, id: 'supplyOrigin' }, { name: 'Delivery Destination', icon: <DeliveryDIcon />, id: 'deliveryDestination' }]

    const handleButtonClick = (buttonType: string) => {
        setActiveButton(buttonType);
    };

    const handleSubmit = (values: any) => {
        if(activeButton === 'merchant'){
            router.navigate(`${AppNavigationRoutes.addMerchandice}`)
        } else if ((activeButton === 'customer')){
            setShowFilter(false)
            setThankYouModal(true)
        }
    }

  

    const productNames = [
        { id: 1, name: "Wireless Headphones" },
        { id: 2, name: "Smartphone" },
        { id: 3, name: "Gaming Laptop" },
        { id: 4, name: "Smartwatch" }
    ];

    const categories = [
        { id: 1, name: "Electronics" },
        { id: 2, name: "Home Appliances" },
        { id: 3, name: "Gaming" },
        { id: 4, name: "Wearable Tech" }
    ];

    const subcategories = [
        { id: 1, name: "Audio Devices" },
        { id: 2, name: "Mobile Phones" },
        { id: 3, name: "Laptops" },
        { id: 4, name: "Fitness Trackers" }
    ];


    const countries = [
        {
            name: "Afghanistan",
            code: "AF",
            style: {
                top: "49.88600048516913%",
                left: "63.38602198066467%",

            }
        },
        {
            name: "Aland Islands",
            code: "AX",
            style: {
                top: "37.21742696681583%",
                left: "52.14120961518898%",

            }
        },
        {
            name: "Albania",
            code: "AL",
            style: {
                top: "45.504112634105036%",
                left: "50.16647989162209%",

            }
        },
        {
            name: "Algeria",
            code: "DZ",
            style: {
                top: "53.645984803416596%",
                left: "47.01752951535626%",

            }
        },
        {
            name: "American Samoa",
            code: "AS",
            style: {
                top: "75.1474227867278%",
                left: "99.20957629766619%",

            }
        },
        {
            name: "Andorra",
            code: "AD",
            style: {
                top: "47.33065184417483%",
                left: "46.999505239681135%",

            }
        },
        {
            name: "Angola",
            code: "AO",
            style: {
                top: "70.85646278675716%",
                left: "50.53717561293727%",

            }
        },
        {
            name: "Anguilla",
            code: "AI",
            style: {
                top: "59.318054328666484%",
                left: "29.020145091790134%",

            }
        },
        {
            name: "Antigua and Barbuda",
            code: "AG",
            style: {
                top: "59.698741899932585%",
                left: "29.37704843171261%",

            }
        },
        {
            name: "Argentina",
            code: "AR",
            style: {
                top: "80.66616253606198%",
                left: "26.86607231315207%",

            }
        },
        {
            name: "Armenia",
            code: "AM",
            style: {
                top: "45.70061697585494%",
                left: "58.07911320321742%",

            }
        },
        {
            name: "Aruba",
            code: "AW",
            style: {
                top: "60.79851131614788%",
                left: "27.09805720082515%",

            }
        },
        {
            name: "Australia",
            code: "AU",
            style: {
                top: "75.99611066480281%",
                left: "82.3659955587701%",

            }
        },
        {
            name: "Austria",
            code: "AT",
            style: {
                top: "41.24152229337466%",
                left: "49.269665301297536%",

            }
        },
        {
            name: "Azerbaijan",
            code: "AZ",
            style: {
                top: "45.65835964391081%",
                left: "58.78997732933219%",

            }
        },
        {
            name: "Bahamas",
            code: "BS",
            style: {
                top: "54.73011100170543%",
                left: "22.4612662247211%",

            }
        },
        {
            name: "Bahrain",
            code: "BH",
            style: {
                top: "53.77977863149276%",
                left: "58.61536213854522%",

            }
        },
        {
            name: "Baker Island",
            code: "UM-FQ",
            style: {
                top: "68.99542915264588%",
                left: "97.60553068245835%",

            }
        },
        {
            name: "Bangladesh",
            code: "BD",
            style: {
                top: "53.85045138711762%",
                left: "70.6822946209392%",

            }
        },
        {
            name: "Barbados",
            code: "BB",
            style: {
                top: "56.50974485315193%",
                left: "27.00264805642058%",

            }
        },
        {
            name: "Belarus",
            code: "BY",
            style: {
                top: "37.204500897856484%",
                left: "53.332063347707994%",

            }
        },
        {
            name: "Belgium",
            code: "BE",
            style: {
                top: "39.444800084262354%",
                left: "46.796981151567344%",

            }
        },
        {
            name: "Belize",
            code: "BZ",
            style: {
                top: "57.77173058580318%",
                left: "19.944008767056076%",

            }
        },
        {
            name: "Benin",
            code: "BJ",
            style: {
                top: "60.16659788544064%",
                left: "45.9017802903699%",

            }
        },
        {
            name: "Bermuda",
            code: "BM",
            style: {
                top: "49.75057269774955%",
                left: "25.54854112843337%",

            }
        },
        {
            name: "Bhutan",
            code: "BT",
            style: {
                top: "52.08296502194822%",
                left: "70.70553867846252%",

            }
        },
        {
            name: "Bolivia",
            code: "BO",
            style: {
                top: "71.06282398893433%",
                left: "27.880833469120244%",

            }
        },
        {
            name: "Bonaire,  Saint Eustachius and Saba",
            code: "BQ",
            style: {
                top: "57.78789750747112%",
                left: "27.301396857171163%",

            }
        },
        {
            name: "Bosnia and Herzegovina",
            code: "BA",
            style: {
                top: "43.52558808407005%",
                left: "50.47233055940941%",

            }
        },
        {
            name: "Botswana",
            code: "BW",
            style: {
                top: "73.72383857593685%",
                left: "52.422209403615426%",

            }
        },
        {
            name: "Bouvet Island",
            code: "BV",
            style: {
                top: "91.43394763623179%",
                left: "46.51010484442933%",

            }
        },
        {
            name: "Brazil",
            code: "BR",
            style: {
                top: "70.506712179103%",
                left: "30.43173874139023%",

            }
        },
        {
            name: "British Indian Ocean Territory",
            code: "IO",
            style: {
                top: "67.16646081231698%",
                left: "65.70305822361206%",

            }
        },
        {
            name: "British Virgin Islands",
            code: "VG",
            style: {
                top: "56.16104183647892%",
                left: "27.626680597375305%",

            }
        },
        {
            name: "Brunei Darussalam",
            code: "BN",
            style: {
                top: "62.18939670576768%",
                left: "77.45925594338394%",

            }
        },
        {
            name: "Bulgaria",
            code: "BG",
            style: {
                top: "44.20481568894567%",
                left: "52.64294327228184%",
            }
        },
        {
            name: "Burkina Faso",
            code: "BF",
            style: {
                top: "58.90660319954728%",
                left: "45.124967988765434%",
            }
        },
        {
            name: "Burundi",
            code: "BI",
            style: {
                top: "65.50646537408117%",
                left: "53.87994689249995%",
            }
        },
        {
            name: "Côte d'Ivoire",
            code: "CI",
            style: {
                top: "60.91405928018077%",
                left: "44.01582180596226%",
            }
        },
        {
            name: "Cambodia",
            code: "KH",
            style: {
                top: "58.77755353283497%",
                left: "74.75263877210409%",
            }
        },
        {
            name: "Cameroon",
            code: "CM",
            style: {
                top: "60.97120748760562%",
                left: "48.99776940515899%",
            }
        },
        {
            name: "Canada",
            code: "CA",
            style: {
                top: "20.543150469085514%",
                left: "18.6312492371437%",
            }
        },
        {
            name: "Cape Verde",
            code: "CV",
            style: {
                top: "57.2881471567144%",
                left: "38.88278632076025%",
            }
        },
        {
            name: "Cayman Islands",
            code: "KY",
            style: {
                top: "55.74246648314404%",
                left: "23.150013022236756%",
            }
        },
        {
            name: "Central African Republic",
            code: "CF",
            style: {
                top: "61.29293021968766%",
                left: "51.378156259341026%",
            }
        },
        {
            name: "Chad",
            code: "TD",
            style: {
                top: "57.45899311625012%",
                left: "50.76594177626696%",
            }
        },
        {
            name: "Chile",
            code: "CL",
            style: {
                top: "82.02838716496447%",
                left: "25.40469699922423%",
            }
        },
        {
            name: "China",
            code: "CN",
            style: {
                top: "46.839635913965786%",
                left: "74.53474160991138%",
            }
        },
        {
            name: "Christmas Island",
            code: "CX",
            style: {
                top: "68.51131880859785%",
                left: "74.94496323713088%",
            }
        },
        {
            name: "Cocos (Keeling) Islands",
            code: "CC",
            style: {
                top: "69.22339487739204%",
                left: "72.50335432979998%",
            }
        },
        {
            name: "Colombia",
            code: "CO",
            style: {
                top: "62.34948049836632%",
                left: "25.2727147305147%",
            }
        },
        {
            name: "Comoros",
            code: "KM",
            style: {
                top: "69.09727659374572%",
                left: "57.76363696737812%",
            }
        },
        {
            name: "Cook Islands",
            code: "CK",
            style: {
                top: "73.19187741735885%",
                left: "1.120898471734972%",
            }
        },
        {
            name: "Costa Rica",
            code: "CR",
            style: {
                top: "60.03077713671676%",
                left: "22.133569378763703%",
            }
        },
        {
            name: "Croatia",
            code: "HR",
            style: {
                top: "43.182035952427%",
                left: "50.13796814880648%",
            }
        },
        {
            name: "Cuba",
            code: "CU",
            style: {
                top: "54.840563864148244%",
                left: "23.446602327260603%",
            }
        },
        {
            name: "Curaçao",
            code: "CW",
            style: {
                top: "58.92966433049045%",
                left: "26.38335638384159%",
            }
        },
        {
            name: "Cyprus",
            code: "CY",
            style: {
                top: "48.33950168506358%",
                left: "54.8578182836075%",
            }
        },
        {
            name: "Czech Republic",
            code: "CZ",
            style: {
                top: "39.897221672747186%",
                left: "49.860752671977906%",
            }
        },
        {
            name: "Democratic Republic of Congo",
            code: "CD",
            style: {
                top: "65.81806359532345%",
                left: "51.608091278803%",

            }
        },
        {
            name: "Denmark",
            code: "DK",
            style: {
                top: "35.415292938293604%",
                left: "48.79504166692372%",

            }
        },
        {
            name: "Djibouti",
            code: "DJ",
            style: {
                top: "59.09524618663303%",
                left: "57.404956905650415%",

            }
        },
        {
            name: "Dominica",
            code: "DM",
            style: {
                top: "58.5404662981779%",
                left: "28.493931020734088%",

            }
        },
        {
            name: "Dominican Republic",
            code: "DO",
            style: {
                top: "56.07122407583906%",
                left: "26.045532767951723%",

            }
        },
        {
            name: "Ecuador",
            code: "EC",
            style: {
                top: "64.82881355963305%",
                left: "23.351537609828625%",

            }
        },
        {
            name: "Egypt",
            code: "EG",
            style: {
                top: "52.35671445448016%",
                left: "54.12319296051631%",

            }
        },
        {
            name: "El Salvador",
            code: "SV",
            style: {
                top: "58.24750534254886%",
                left: "19.83341728532876%",

            }
        },
        {
            name: "Equatorial Guinea",
            code: "GQ",
            style: {
                top: "63.09823096766286%",
                left: "48.30980911324313%",

            }
        },
        {
            name: "Eritrea",
            code: "ER",
            style: {
                top: "57.63614453122276%",
                left: "56.62171744976096%",

            }
        },
        {
            name: "Estonia",
            code: "EE",
            style: {
                top: "33.55086564338308%",
                left: "52.5144053882181%",

            }
        },
        {
            name: "Ethiopia",
            code: "ET",
            style: {
                top: "60.21475468314823%",
                left: "56.82130606078971%",

            }
        },
        {
            name: "Falkland Islands",
            code: "FK",
            style: {
                top: "89.58888283752744%",
                left: "29.02167334472129%",

            }
        },
        {
            name: "Faroe Islands",
            code: "FO",
            style: {
                top: "30.75592263240585%",
                left: "43.6378200836157%",

            }
        },
        {
            name: "Federated States of Micronesia",
            code: "FM",
            style: {
                top: "60.96035586531676%",
                left: "87.42482050422245%",

            }
        },
        {
            name: "Fiji",
            code: "FJ",
            style: {
                top: "71.38494582950892%",
                left: "95.11204403874905%",

            }
        },
        {
            name: "Finland",
            code: "FI",
            style: {
                top: "29.38112085629048%",
                left: "52.81352368662002%",

            }
        },
        {
            name: "France",
            code: "FR",
            style: {
                top: "42.019398507719586%",
                left: "46.22732028980616%",

            }
        },
        {
            name: "French Guiana",
            code: "GF",
            style: {
                top: "62.42899254373587%",
                left: "30.783320988519023%",

            }
        },
        {
            name: "French Polynesia",
            code: "PF",
            style: {
                top: "70.41003846855374%",
                left: "5.539148189969575%",

            }
        },
        {
            name: "French Southern and Antarctic Lands",
            code: "TF",
            style: {
                top: "87.1397008172641%",
                left: "62.55568400372147%",

            }
        },
        {
            name: "Gabon",
            code: "GA",
            style: {
                top: "64.42595023603369%",
                left: "48.78468224472152%",

            }
        },
        {
            name: "Gambia",
            code: "GM",
            style: {
                top: "58.402788364602024%",
                left: "41.2984838197045%",

            }
        },
        {
            name: "Georgia",
            code: "GE",
            style: {
                top: "44.44804249670529%",
                left: "57.61028848639512%",

            }
        },
        {
            name: "Germany",
            code: "DE",
            style: {
                top: "38.895227690018764%",
                left: "48.46379872617968%",

            }
        },
        {
            name: "Ghana",
            code: "GH",
            style: {
                top: "60.73322643342338%",
                left: "45.27486131287614%",

            }
        },
        {
            name: "Gibraltar",
            code: "GI",
            style: {
                top: "48.81262342544818%",
                left: "44.07419354370445%",

            }
        },
        {
            name: "Glorioso Islands",
            code: "GO",
            style: {
                top: "68.9676947823767%",
                left: "58.71318363265124%",

            }
        },
        {
            name: "Greece",
            code: "GR",
            style: {
                top: "46.6064418679672%",
                left: "52.218653032572284%",

            }
        },
        {
            name: "Greenland",
            code: "GL",
            style: {
                top: "13.543405158435405%",
                left: "33.84611115365163%",

            }
        },
        {
            name: "Grenada",
            code: "GD",
            style: {
                top: "58.96829757382406%",
                left: "28.40261054415288%",

            }
        },
        {
            name: "Guadeloupe",
            code: "GP",
            style: {
                top: "58.206602869250595%",
                left: "28.46138147726238%",

            }
        },
        {
            name: "Guam",
            code: "GU",
            style: {
                top: "58.40211171514627%",
                left: "85.83054005447686%",

            }
        },
        {
            name: "Guatemala",
            code: "GT",
            style: {
                top: "58.3851924510326%",
                left: "20.466014653615158%",

            }
        },
        {
            name: "Guernsey",
            code: "GG",
            style: {
                top: "40.12787656299143%",
                left: "44.84348837960431%",

            }
        },
        {
            name: "Guinea",
            code: "GN",
            style: {
                top: "59.89343564701267%",
                left: "42.39968692196057%",

            }
        },
        {
            name: "Guinea-Bissau",
            code: "GW",
            style: {
                top: "59.10148512398787%",
                left: "41.335439633253166%",

            }
        },
        {
            name: "Guyana",
            code: "GY",
            style: {
                top: "62.03742123800335%",
                left: "29.169584300928467%",

            }
        },
        {
            name: "Haiti",
            code: "HT",
            style: {
                top: "55.942250102116724%",
                left: "25.241364285248558%"
            }
        },
        {
            name: "Heard Island and McDonald Islands",
            code: "HM",
            style: {
                top: "90.47466973084123%",
                left: "66.01466649827881%"
            }
        },
        {
            name: "Honduras",
            code: "HN",
            style: {
                top: "57.83390278928209%",
                left: "21.57075456634137%"
            }
        },
        {
            name: "Hong Kong",
            code: "HK",
            style: {
                top: "54.457518341558334%",
                left: "77.29014529380719%"
            }
        },
        {
            name: "Howland Island",
            code: "UM-HQ",
            style: {
                top: "63.75213812053114%",
                left: "96.55678046033033%"
            }
        },
        {
            name: "Hungary",
            code: "HU",
            style: {
                top: "41.58044339026792%",
                left: "50.97978045222544%"
            }
        },
        {
            name: "Iceland",
            code: "IS",
            style: {
                top: "27.808509855502535%",
                left: "40.27218882086035%"
            }
        },
        {
            name: "India",
            code: "IN",
            style: {
                top: "54.69843995371442%",
                left: "68.57633038811831%"
            }
        },
        {
            name: "Indonesia",
            code: "ID",
            style: {
                top: "65.14719203779475%",
                left: "78.40381871498043%"
            }
        },
        {
            name: "Iran",
            code: "IR",
            style: {
                top: "49.54287113328095%",
                left: "60.48637618792377%"
            }
        },
        {
            name: "Iraq",
            code: "IQ",
            style: {
                top: "49.25383859795664%",
                left: "57.70335846691559%"
            }
        },
        {
            name: "Ireland",
            code: "IE",
            style: {
                top: "37.42608639166654%",
                left: "43.278095158256164%"
            }
        },
        {
            name: "Isle of Man",
            code: "IM",
            style: {
                top: "36.87747506902283%",
                left: "44.29215723845839%"
            }
        },
        {
            name: "Israel",
            code: "IL",
            style: {
                top: "50.169726070280525%",
                left: "55.31692924649213%"
            }
        },
        {
            name: "Italy",
            code: "IT",
            style: {
                top: "44.581230046869095%",
                left: "49.05328024276885%"
            }
        },
        {
            name: "Jamaica",
            code: "JM",
            style: {
                top: "56.36283476027617%",
                left: "24.069441606729903%"
            }
        },
        {
            name: "Japan",
            code: "JP",
            style: {
                top: "48.09454081971563%",
                left: "83.03863116392426%"
            }
        },
        {
            name: "Jarvis Island",
            code: "UM-DQ",
            style: {
                top: "64.24902590003094%",
                left: "1.054800923840903%"
            }
        },
        {
            name: "Jersey",
            code: "JE",
            style: {
                top: "40.28895124564054%",
                left: "44.97042797009519%"
            }
        },
        {
            name: "Johnston Atoll",
            code: "UM-JQ",
            style: {
                top: "56.97450751847%",
                left: "98.53307273133946%"
            }
        },
        {
            name: "Jordan",
            code: "JO",
            style: {
                top: "50.25377969504808%",
                left: "55.884950987881524%"
            }
        },
        {
            name: "Juan De Nova Island",
            code: "JU",
            style: {
                top: "71.34751449910692%",
                left: "57.4481577073315%"
            }
        },
        {
            name: "Kazakhstan",
            code: "KZ",
            style: {
                top: "40.72349552613142%",
                left: "64.185244856156%"
            }
        },
        {
            name: "Kenya",
            code: "KE",
            style: {
                top: "63.91848837520823%",
                left: "56.098886438474494%"
            }
        },
        {
            name: "Kiribati",
            code: "KI",
            style: {
                top: "65.68129324363454%",
                left: "49.66446044693671%"
            }
        },
        {
            name: "Kosovo",
            code: "XK",
            style: {
                top: "44.31764641226237%",
                left: "51.37095864590028%"
            }
        },
        {
            name: "Kuwait",
            code: "KW",
            style: {
                top: "51.21997318724923%",
                left: "58.76778872016635%"
            }
        },
        {
            name: "Kyrgyzstan",
            code: "KG",
            style: {
                top: "45.05586867477264%",
                left: "66.34654905887272%"
            }
        },
        {
            name: "Lao People's Democratic Republic",
            code: "LA",
            style: {
                top: "56.29983066790027%",
                left: "74.45250736424727%"
            }
        },
        {
            name: "Latvia",
            code: "LV",
            style: {
                top: "34.902894977031536%",
                left: "52.404796017820566%"
            }
        },
        {
            name: "Lebanon",
            code: "LB",
            style: {
                top: "48.969721519526225%",
                left: "55.53032638818072%"
            }
        },
        {
            name: "Lesotho",
            code: "LS",
            style: {
                top: "77.09874586349278%",
                left: "53.409531442623106%"
            }
        },
        {
            name: "Liberia",
            code: "LR",
            style: {
                top: "61.37892433747072%",
                left: "42.93160265206047%"
            }
        },
        {
            name: "Libya",
            code: "LY",
            style: {
                top: "52.537164248833776%",
                left: "50.35286680943345%"
            }
        },
        {
            name: "Liechtenstein",
            code: "LI",
            style: {
                top: "41.585175349004324%",
                left: "48.21542057832764%"
            }
        },
        {
            name: "Lithuania",
            code: "LT",
            style: {
                top: "36.193664597663776%",
                left: "52.19040088771372%"
            }
        },
        {
            name: "Luxembourg",
            code: "LU",
            style: {
                top: "39.90698148099895%",
                left: "47.25992680934393%"
            }
        }
,
        {
            name: "Macau",
            code: "MO",
            style: {
                top: "54.52982349679227%",
                left: "77.13064859932628%",
            }
        },
        {
            name: "Macedonia",
            code: "MK",
            style: {
                top: "44.857381011537264%",
                left: "51.60344458424346%",
            }
        },
        {
            name: "Madagascar",
            code: "MG",
            style: {
                top: "72.18554829065961%",
                left: "58.596104470153435%",
            }
        },
        {
            name: "Malawi",
            code: "MW",
            style: {
                top: "69.70938057260967%",
                left: "55.0949856948945%",
            }
        },
        {
            name: "Malaysia",
            code: "MY",
            style: {
                top: "62.36211205278288%",
                left: "76.00210515072105%",
            }
        },
        {
            name: "Maldives",
            code: "MV",
            style: {
                top: "62.51942272947637%",
                left: "65.98969561837116%",
            }
        },
        {
            name: "Mali",
            code: "ML",
            style: {
                top: "56.53661669033181%",
                left: "44.441952275830936%",
            }
        },
        {
            name: "Malta",
            code: "MT",
            style: {
                top: "47.91093715078007%",
                left: "49.55818224091102%",
            }
        },
        {
            name: "Marshall Islands",
            code: "MH",
            style: {
                top: "60.51465719057715%",
                left: "92.64580598693857%",
            }
        },
        {
            name: "Martinique",
            code: "MQ",
            style: {
                top: "57.87884836923352%",
                left: "28.58935837086677%",
            }
        },
        {
            name: "Mauritania",
            code: "MR",
            style: {
                top: "55.01333884806462%",
                left: "42.517611350406554%",
            }
        },
        {
            name: "Mauritius",
            code: "MU",
            style: {
                top: "72.75858321806591%",
                left: "61.56767546965033%",
            }
        },
        {
            name: "Mayotte",
            code: "YT",
            style: {
                top: "69.5050186746075%",
                left: "58.11294803480355%",
            }
        },
        {
            name: "Mexico",
            code: "MX",
            style: {
                top: "53.739882278592034%",
                left: "17.040471575535808%",
            }
        },
        {
            name: "Midway Islands",
            code: "UM-MQ",
            style: {
                top: "51.753757858767344%",
                left: "96.35065653726568%",
            }
        },
        {
            name: "Moldova",
            code: "MD",
            style: {
                top: "41.695443979297%",
                left: "53.45232700052222%",
            }
        },
        {
            name: "Monaco",
            code: "MC",
            style: {
                top: "43.63195049733506%",
                left: "47.62113359629421%",
            }
        },
        {
            name: "Mongolia",
            code: "MN",
            style: {
                top: "41.61413135825703%",
                left: "74.43485809028081%",
            }
        },
        {
            name: "Montenegro",
            code: "ME",
            style: {
                top: "44.23196882880099%",
                left: "50.95402630261985%",
            }
        },
        {
            name: "Montserrat",
            code: "MS",
            style: {
                top: "56.96653911098079%",
                left: "28.26600709914525%",
            }
        },
        {
            name: "Morocco",
            code: "MA",
            style: {
                top: "49.9679239715754%",
                left: "43.58019834929087%",
            }
        },
        {
            name: "Mozambique",
            code: "MZ",
            style: {
                top: "72.14126559780213%",
                left: "55.443598170427144%",
            }
        },
        {
            name: "Myanmar",
            code: "MM",
            style: {
                top: "55.76592213512584%",
                left: "72.44443672263506%",
            }
        },
        {
            name: "Namibia",
            code: "NA",
            style: {
                top: "74.03880628209612%",
                left: "49.70317586527713%",
            }
        },
        {
            name: "Nauru",
            code: "NR",
            style: {
                top: "64.3051694550435%",
                left: "91.98735742223342%",
            }
        },
        {
            name: "Nepal",
            code: "NP",
            style: {
                top: "51.66303407597484%",
                left: "68.9521032696641%",
            }
        },
        {
            name: "Netherlands",
            code: "NL",
            style: {
                top: "38.299218793294095%",
                left: "47.02763895658073%",
            }
        },
        {
            name: "New Caledonia",
            code: "NC",
            style: {
                top: "73.04825340948751%",
                left: "91.18115213589482%",
            }
        },
        {
            name: "New Zealand",
            code: "NZ",
            style: {
                top: "84.80265452104595%",
                left: "94.19861548159474%",
            }
        },
        {
            name: "Nicaragua",
            code: "NI",
            style: {
                top: "58.64269156198402%",
                left: "21.80591163580705%",
            }
        },
        {
            name: "Niger",
            code: "NE",
            style: {
                top: "56.545110361296864%",
                left: "47.80337837829664%",
            }
        },
        {
            name: "Nigeria",
            code: "NG",
            style: {
                top: "60.25416320619725%",
                left: "47.96871330502433%",
            }
        },
        {
            name: "Niue",
            code: "NU",
            style: {
                top: "72.22426410816409%",
                left: "98.43858439758213%",
            }
        },
        {
            name: "Norfolk Island",
            code: "NF",
            style: {
                top: "76.82809984354947%",
                left: "92.26973370886729%",
            }
        },
        {
            name: "North Korea",
            code: "KP",
            style: {
                top: "45.524059636167195%",
                left: "81.02547380558629%",
            }
        },
        {
            name: "Northern Mariana Islands",
            code: "MP",
            style: {
                top: "57.08551931630054%",
                left: "86.02477884274231%",
            }
        },
        {
            name: "Norway",
            code: "NO",
            style: {
                top: "27.428479437012975%",
                left: "49.533626705637815%",
            }
        },
        {
            name: "Oman",
            code: "OM",
            style: {
                top: "54.817316941320584%",
                left: "61.10972277817234%",
            }
        }

        ,
        {
            name: "Pakistan",
            code: "PK",
            style: {
                top: "50.58677150772729%",
                left: "64.8401490498727%"
            }
        },
        {
            name: "Palau",
            code: "PW",
            style: {
                top: "61.83282996730429%",
                left: "82.52148868662184%"
            }
        },
        {
            name: "Palestinian Territories",
            code: "PS",
            style: {
                top: "49.97358030228019%",
                left: "55.26281408056416%"
            }
        },
        {
            name: "Panama",
            code: "PA",
            style: {
                top: "60.550342994756%",
                left: "23.280726067421195%"
            }
        },
        {
            name: "Papua New Guinea",
            code: "PG",
            style: {
                top: "66.82486293605126%",
                left: "86.83592265964761%"
            }
        },
        {
            name: "Paraguay",
            code: "PY",
            style: {
                top: "74.22036165284865%",
                left: "29.30600326928909%"
            }
        },
        {
            name: "Peru",
            code: "PE",
            style: {
                top: "68.00813474856899%",
                left: "24.699131471849046%"
            }
        },
        {
            name: "Philippines",
            code: "PH",
            style: {
                top: "58.55799798739221%",
                left: "79.43005625388535%"
            }
        },
        {
            name: "Pitcairn Islands",
            code: "PN",
            style: {
                top: "74.62535584880193%",
                left: "9.873017420401956%"
            }
        },
        {
            name: "Poland",
            code: "PL",
            style: {
                top: "38.42722940168958%",
                left: "50.87757736557429%"
            }
        },
        {
            name: "Portugal",
            code: "PT",
            style: {
                top: "47.07334375480536%",
                left: "42.346904887106945%"
            }
        },
        {
            name: "Puerto Rico",
            code: "PR",
            style: {
                top: "56.31182456621953%",
                left: "27.033881525347272%"
            }
        },
        {
            name: "Qatar",
            code: "QA",
            style: {
                top: "53.08950975898251%",
                left: "59.79523594200248%"
            }
        },
        {
            name: "Republic of Congo",
            code: "CG",
            style: {
                top: "64.36395997097793%",
                left: "49.69806846297323%"
            }
        },
        {
            name: "Reunion",
            code: "RE",
            style: {
                top: "73.14663594662846%",
                left: "61.00619508871149%"
            }
        },
        {
            name: "Romania",
            code: "RO",
            style: {
                top: "42.28829212025882%",
                left: "52.50643357770139%"
            }
        },
        {
            name: "Russia",
            code: "RU",
            style: {
                top: "22.73452660961831%",
                left: "74.7448332929904%"
            }
        },
        {
            name: "Rwanda",
            code: "RW",
            style: {
                top: "64.89863919601383%",
                left: "53.86729663324675%"
            }
        },
        {
            name: "Saint Barthelemy",
            code: "BL",
            style: {
                top: "56.45995574758434%",
                left: "28.084708894036492%"
            }
        },
        {
            name: "Saint Helena",
            code: "SH",
            style: {
                top: "69.14252035820309%",
                left: "42.76928134793518%"
            }
        },
        {
            name: "Saint Kitts and Nevis",
            code: "KN",
            style: {
                top: "56.74466460757267%",
                left: "28.12682854159779%"
            }
        },
        {
            name: "Saint Lucia",
            code: "LC",
            style: {
                top: "58.2012064636859%",
                left: "28.601402276550697%"
            }
        },
        {
            name: "Saint Martin",
            code: "MF",
            style: {
                top: "56.37472544088185%",
                left: "28.021088644476485%"
            }
        },
        {
            name: "Saint Pierre and Miquelon",
            code: "PM",
            style: {
                top: "41.732040393082414%",
                left: "29.913499988931402%"
            }
        },
        {
            name: "Saint Vincent and the Grenadines",
            code: "VC",
            style: {
                top: "58.5799443670286%",
                left: "28.529407996899344%"
            }
        },
        {
            name: "Samoa",
            code: "WS",
            style: {
                top: "69.90878343290555%",
                left: "97.81461482062399%"
            }
        },
        {
            name: "San Marino",
            code: "SM",
            style: {
                top: "43.520865300241525%",
                left: "49.02494190800143%"
            }
        },
        {
            name: "Sao Tome and Principe",
            code: "ST",
            style: {
                top: "63.72116821899992%",
                left: "47.49661488376943%"
            }
        },
        {
            name: "Saudi Arabia",
            code: "SA",
            style: {
                top: "53.49024909140888%",
                left: "58.111399640651584%"
            }
        },
        {
            name: "Senegal",
            code: "SN",
            style: {
                top: "57.93801276266385%",
                left: "41.53953128899337%"
            }
        },
        {
            name: "Serbia",
            code: "RS",
            style: {
                top: "43.34716135690282%",
                left: "51.37562499780745%"
            }
        },
        {
            name: "Seychelles",
            code: "SC",
            style: {
                top: "66.04732389957073%",
                left: "60.98597826272354%"
            }
        },
        {
            name: "Sierra Leone",
            code: "SL",
            style: {
                top: "60.53037839522054%",
                left: "42.28257146897484%"
            }
        },
        {
            name: "Singapore",
            code: "SG",
            style: {
                top: "63.51883626936502%",
                left: "74.43565043260077%"
            }
        },
        {
            name: "Slovakia",
            code: "SK",
            style: {
                top: "40.62799620379012%",
                left: "51.03983818555302%"
            }
        },
        {
            name: "Slovenia",
            code: "SI",
            style: {
                top: "42.20622945050009%",
                left: "49.71783014575833%"
            }
        },
        {
            name: "Solomon Islands",
            code: "SB",
            style: {
                top: "67.97218516578874%",
                left: "90.4217736758236%"
            }
        },
        {
            name: "Somalia",
            code: "SO",
            style: {
                top: "61.91280534552152%",
                left: "58.40345036652788%"
            }
        },
        {
            name: "South Africa",
            code: "ZA",
            style: {
                top: "78.03779915245872%",
                left: "51.51660672082901%"
            }
        },
        {
            name: "South Georgia and South Sandwich Islands",
            code: "GS",
            style: {
                top: "92.82810241252368%",
                left: "36.6226268289045%"
            }
        },
        {
            name: "South Korea",
            code: "KR",
            style: {
                top: "47.90492299866817%",
                left: "81.29050626319386%"
            }
        },
        {
            name: "South Sudan",
            code: "SS",
            style: {
                top: "60.77435983915285%",
                left: "53.82301618954958%"
            }
        },
        {
            name: "Spain",
            code: "ES",
            style: {
                top: "47.82195660048378%",
                left: "43.636481871873045%"
            }
        },
        {
            name: "Sri Lanka",
            code: "LK",
            style: {
                top: "60.77223355425288%",
                left: "68.03059100632193%"
            }
        },
        {
            name: "Sudan",
            code: "SD",
            style: {
                top: "57.48988732479137%",
                left: "53.96474869018556%"
            }
        },
        {
            name: "Suriname",
            code: "SR",
            style: {
                top: "62.44304620887301%",
                left: "29.980135373197466%"
            }
        },
        {
            name: "Svalbard and Jan Mayen",
            code: "SJ",
            style: {
                top: "12.70687183167494%",
                left: "48.971830778906366%"
            }
        },
        {
            name: "Swaziland",
            code: "SZ",
            style: {
                top: "75.62965043967993%",
                left: "54.30756376027036%"
            }
        },
        {
            name: "Sweden",
            code: "SE",
            style: {
                top: "29.759221424657675%",
                left: "50.469546776563945%"
            }
        },
        {
            name: "Switzerland",
            code: "CH",
            style: {
                top: "41.80246239847506%",
                left: "47.84474802244059%"
            }
        },
        {
            name: "Syria",
            code: "SY",
            style: {
                top: "48.47914607664425%",
                left: "56.42446352678946%"
            }
        }


        ,
        {
            name: "Taiwan",
            code: "TW",
            style: {
                top: "53.896298401767744%",
                left: "78.96483941640541%"
            }
        },
        {
            name: "Tajikistan",
            code: "TJ",
            style: {
                top: "46.352537761168335%",
                left: "65.37235510387607%"
            }
        },
        {
            name: "Tanzania",
            code: "TZ",
            style: {
                top: "66.76864139432176%",
                left: "55.26556308502535%"
            }
        },
        {
            name: "Thailand",
            code: "TH",
            style: {
                top: "58.52845019658157%",
                left: "73.79184507977799%"
            }
        },
        {
            name: "Timor-Leste",
            code: "TL",
            style: {
                top: "67.800901104402%",
                left: "80.51050875756006%"
            }
        },
        {
            name: "Togo",
            code: "TG",
            style: {
                top: "60.46489478399148%",
                left: "45.0546045915451%"
            }
        },
        {
            name: "Tokelau",
            code: "TK",
            style: {
                top: "67.8543403553185%",
                left: "97.89022605223967%"
            }
        },
        {
            name: "Tonga",
            code: "TO",
            style: {
                top: "72.65261303211255%",
                left: "97.11167109350136%"
            }
        },
        {
            name: "Trinidad and Tobago",
            code: "TT",
            style: {
                top: "59.57860556447153%",
                left: "28.535751271769907%"
            }
        },
        {
            name: "Tunisia",
            code: "TN",
            style: {
                top: "48.9802497263125%",
                left: "48.20708888713888%"
            }
        },
        {
            name: "Turkey",
            code: "TR",
            style: {
                top: "46.27760399482829%",
                left: "55.362549414035634%"
            }
        },
        {
            name: "Turkmenistan",
            code: "TM",
            style: {
                top: "46.25310240334877%",
                left: "62.1253755914291%"
            }
        },
        {
            name: "Turks and Caicos Islands",
            code: "TC",
            style: {
                top: "54.69668066512944%",
                left: "25.539451328951618%"
            }
        },
        {
            name: "Tuvalu",
            code: "TV",
            style: {
                top: "67.16609152227502%",
                left: "94.99971288175627%"
            }
        },
        {
            name: "Uganda",
            code: "UG",
            style: {
                top: "63.51019121242004%",
                left: "54.53558596859736%"
            }
        },
        {
            name: "Ukraine",
            code: "UA",
            style: {
                top: "40.73007393507762%",
                left: "54.21828915994658%"
            }
        },
        {
            name: "United Arab Emirates",
            code: "AE",
            style: {
                top: "53.55436793509157%",
                left: "60.573140696165275%"
            }
        },
        {
            name: "United Kingdom",
            code: "GB",
            style: {
                top: "35.72608950196031%",
                left: "44.6710012025458%"
            }
        },
        {
            name: "United States",
            code: "US",
            style: {
                top: "45.24170588328122%",
                left: "15.732559116600008%"
            }
        },
        {
            name: "Uruguay",
            code: "UY",
            style: {
                top: "78.53640805292673%",
                left: "30.047083762921986%"
            }
        },
        {
            name: "US Virgin Islands",
            code: "VI",
            style: {
                top: "56.39599517106249%",
                left: "27.53843725175038%"
            }
        },
        {
            name: "Uzbekistan",
            code: "UZ",
            style: {
                top: "44.91767621236315%",
                left: "63.51457849384555%"
            }
        },
        {
            name: "Vanuatu",
            code: "VU",
            style: {
                top: "71.32121462568394%",
                left: "92.34292557462057%"
            }
        },
        {
            name: "Vatican City",
            code: "VA",
            style: {
                top: "44.69209733990061%",
                left: "49.018701456180025%"
            }
        },
        {
            name: "Venezuela",
            code: "VE",
            style: {
                top: "61.37103621042542%",
                left: "27.038299892253544%"
            }
        },
        {
            name: "Vietnam",
            code: "VN",
            style: {
                top: "57.24732111039874%",
                left: "74.98164687202002%"
            }
        },
        {
            name: "Wake Island",
            code: "UM-WQ",
            style: {
                top: "55.839053032068506%",
                left: "91.90466652126278%"
            }
        },
        {
            name: "Wallis and Futuna",
            code: "WF",
            style: {
                top: "69.91637566917191%",
                left: "96.41100459449675%"
            }
        },
        {
            name: "Western Sahara",
            code: "EH",
            style: {
                top: "53.590475785032645%",
                left: "41.975749002404726%"
            }
        },
        {
            name: "Yemen",
            code: "YE",
            style: {
                top: "57.4295256058834%",
                left: "59.05784649341346%"
            }
        },
        {
            name: "Zambia",
            code: "ZM",
            style: {
                top: "69.65500089363603%",
                left: "53.29801077319425%"
            }
        },
        {
            name: "Zimbabwe",
            code: "ZW",
            style: {
                top: "72.22667940266211%",
                left: "53.65822410803727%"
            }
        }

    ]


    const handleLine = (lineRef: any, firstElement: any, secondElement: any) => {
        if (lineRef.current) {
            const mapElement = document.querySelector(`.${styles.map}`);
            const locationElement = document.querySelector(`.${firstElement}`);
            const destinationElement = document.querySelector(`.${secondElement}`);

            if (locationElement && destinationElement && mapElement) {
                const mapRect = mapElement.getBoundingClientRect();
                const locRect = locationElement.getBoundingClientRect();
                const destRect = destinationElement.getBoundingClientRect();

                const lineX = locRect.left + locRect.width / 2 - mapRect.left;
                const lineY = locRect.top + locRect.height / 2 - mapRect.top;
                const destX = destRect.left + destRect.width / 2 - mapRect.left;
                const destY = destRect.top + destRect.height / 2 - mapRect.top;

                const deltaX = destX - lineX;
                const deltaY = destY - lineY;
                const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

                lineRef.current.style.width = `${distance}px`;
                lineRef.current.style.transform = `translate(${lineX}px, ${lineY}px) rotate(${Math.atan2(deltaY, deltaX) * (180 / Math.PI)}deg)`;
            }
        }
    }


    useEffect(() => {
        handleLine(lineRef, styles.location, styles.destination)
        handleLine(lineRef2, styles.location, styles.supply)
        const svgElement = document.getElementById('worldMap');
        const locationPath = selectedLocationCountry && selectedLocationCountry?.code && document.querySelector(`path#${selectedLocationCountry.code}`) as SVGPathElement;
        const destinationPath = selectedDestinationCountry && selectedDestinationCountry?.code && document.querySelector(`path#${selectedDestinationCountry.code}`) as SVGPathElement;
        const supplyPath = selectedSupplyCountry && selectedSupplyCountry?.code && document.querySelector(`path#${selectedSupplyCountry.code}`) as SVGPathElement;
        const allPaths = svgElement?.querySelectorAll("path") as NodeListOf<SVGPathElement>;

        if (locationPath) {
            locationPath.style.fill = "#2b3813";
        }

        if (destinationPath) {
            destinationPath.style.fill = "#84BC25";
        }

        if (supplyPath) {
            supplyPath.style.fill = "#FFDF63";
        }

        allPaths?.forEach(path => {
            if (path.id !== selectedLocationCountry?.code && path.id !== selectedDestinationCountry?.code && path.id !== selectedSupplyCountry?.code) {
                path.style.fill = "#BCBCBC";
            }
        });


    }, [selectedLocationCountry, selectedDestinationCountry, selectedSupplyCountry]);


    return (
        <div className={styles.heroSectionContainer}>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 }, x: 0 }}
                viewport={{ once: true, amount: .5 }}
                className={styles.heroContainer1}>
                <div className={styles.deliveryFormWrapper}>
                    <div className={styles.deliveryFormButtons}>

                        <button
                            className={`${styles.customerButton} buttonStyles  ${activeButton === 'customer' ? styles.activeForm : ''
                                }`}
                            onClick={() => handleButtonClick('customer')}
                        >
                            Customer
                        </button>
                        <button
                            className={`${styles.merchantButton} buttonStyles ${activeButton === 'merchant' ? styles.activeForm : ''
                                }`}
                            onClick={() => handleButtonClick('merchant')}
                        >
                            Merchant
                        </button>
                    </div>

                    <div className={styles.deliveryForm}>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                            validationSchema={deliveryHeroPageSchema}
                        >
                            {({ handleSubmit, handleChange, handleBlur, errors, touched, setFieldValue, isValid, dirty, resetForm, values, isSubmitting }) => {
                                useEffect(() => {
                                    if (values.deliveryDestination === '') {
                                        setDestinationCountryStyle(null)
                                        setSelectedDestinationCountry(null)
                                    }

                                    if (values.supplyOrigin === '') {
                                        setSupplyCountryStyle(null)
                                        setSelectedSupplyCountry(null)
                                    }

                                    if (values.senderLocation === '') {
                                        setLocationCountryStyle(null)
                                        setSelectedLocationCountry(null)
                                    }
                                }, [values])
                                
                              
                                return (
                                    <Form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
                                        <SelectTempWithFlag
                                            inputType={'text'}
                                            id={formField[0].id}
                                            classNames="custom-inputs custom-selects custom-select-flags"
                                            data={countries}
                                            placeholder={formField[0].name}
                                            svgIconComponent={formField[0].icon}
                                            onClick={(row) => {
                                                setFieldValue(formField[0].id, row.name);
                                                handleChangeLocation(row.style)
                                                setSelectedLocationCountry({name: row.name, code: row.code})
                                            }}
                                            value={values.senderLocation || ''}
                                            onChange={handleChange}

                                        />

                                        <SelectTempWithFlag
                                            inputType={'text'}
                                            id={formField[1].id}
                                            classNames="custom-inputs custom-selects "
                                            data={countries}
                                            placeholder={formField[1].name}
                                            svgIconComponent={formField[1].icon}
                                            onClick={(row) => {
                                                setFieldValue(formField[1].id, row.name);
                                                handleChangeSupplyCountry(row.style)
                                                setSelectedSupplyCountry({ name: row.name, code: row.code })

                                            }}
                                            value={values.supplyOrigin || ''}
                                            onChange={handleChange}

                                        />

                                        <SelectTempWithFlag
                                            inputType={'text'}
                                            id={formField[2].id}
                                            classNames="custom-inputs custom-selects"
                                            data={countries}
                                            placeholder={formField[2].name}
                                            svgIconComponent={formField[2].icon}
                                            onClick={(row) => {
                                                setFieldValue(formField[2].id, row.name);
                                                handleChangeDestination(row.style)
                                                setSelectedDestinationCountry({ name: row.name, code: row.code })
                                            }}
                                            value={values.deliveryDestination || ''}
                                            onChange={handleChange}
                                        />

                                        <button type='button' onClick={() => setShowFilter(true)} disabled={!isValid || !dirty} className={`${styles.submitBtn} buttonStyles`}>Proceed</button>
                                        <Modal
                                            openModal={showFilter}
                                            onClose={() => setShowFilter(false)}
                                            children={
                                                <div className={styles.filterBy}>
                                                    <h1>Filter by</h1>
                                                    <div className={styles.filterInputs}>
                                                        <SelectTemp
                                                            id={'category'}
                                                            name={'category'}
                                                            inputType={'text'}
                                                            classNames="custom-inputs custom-selects"
                                                            data={categories}
                                                            errors={errors}
                                                            touched={touched}
                                                            value={values.category || ''}
                                                            placeholder="Category"
                                                            svgIconComponent={<ArrowDownIcon />}
                                                            onClick={(row) => {
                                                                setFieldValue('category', row.name);
                                                            }}
                                                            onChange={handleChange}
                                                        />
                                                        <SelectTemp
                                                            id={'subcategory'}
                                                            name={'subcategory'}
                                                            inputType={'text'}
                                                            classNames="custom-inputs custom-selects"
                                                            data={subcategories}
                                                            errors={errors}
                                                            touched={touched}
                                                            value={values.subcategory || ''}
                                                            placeholder="Sub-Category"
                                                            svgIconComponent={<ArrowDownIcon />}
                                                            onClick={(row) => {
                                                                setFieldValue('subcategory', row.name);
                                                            }}
                                                            onChange={(e) => {
                                                                handleChange;
                                                            }}
                                                        />
                                                        <SelectTemp
                                                            id={'product'}
                                                            name={'product'}
                                                            inputType={'text'}
                                                            classNames="custom-inputs custom-selects"
                                                            data={productNames}
                                                            errors={errors}
                                                            touched={touched}
                                                            value={values.product || ''}
                                                            placeholder="Product"
                                                            svgIconComponent={<ArrowDownIcon />}
                                                            onClick={(row) => {
                                                                setFieldValue('product', row.name);
                                                            }}
                                                            onChange={(e) => {
                                                                handleChange;
                                                            }}
                                                        />
                                                    </div>
                                                    <button type='submit' className={`${styles.filterPbtn} buttonStyles`}>Proceed</button>
                                                </div>
                                            }
                                        />

                                        <Modal
                                            openModal={thankYouModal}
                                            onClose={() => setThankYouModal(false)}
                                            children={
                                                <div className={styles.thankyouModal}>
                                                    <h1>Thank you for going through the
                                                        onboarding process.
                                                    </h1>

                                                    <p>We would contact you with a response in the next 24hrs</p>
                                                    <TickCircleIcon/>
                                                </div>
                                            }
                                        />


                                    </Form>
                                )
                            }}
                        </Formik>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 }, y: 0 }}
                viewport={{ once: true, amount: .1 }}
                className={styles.map}>
                <Map />
                {locationCountryStyle && <div data-tooltip-id="location-tooltip" data-tooltip-content={`Location: ${selectedLocationCountry?.name}`} ref={locationIconRef} style={locationCountryStyle} className={`${styles.plus} ${styles.location}`}>
                    <LocationIcon />
                    <Tooltip id="location-tooltip" className='tooltips' />
                    </div>}
                {destinationCountryStyle && <div data-tooltip-id="destination-tooltip" data-tooltip-content={`Destination: ${selectedDestinationCountry?.name}`} ref={destinationIconRef} style={destinationCountryStyle} className={`${styles.plus} ${styles.destination}`}><DestinationIcon />
                    <Tooltip id="destination-tooltip" className='tooltips' />
                </div>}
                {supplyCountryStyle && <div data-tooltip-id="supply-tooltip" data-tooltip-content={`Supply Origin: ${selectedSupplyCountry?.name}`} ref={supplyIconRef} style={supplyCountryStyle} className={`${styles.plus} ${styles.supply}`}><CourthHouse />
                    <Tooltip id="supply-tooltip" className='tooltips' />
                </div>}
                {destinationCountryStyle && locationCountryStyle && <div ref={lineRef} className={styles.line}></div>}
                {supplyCountryStyle && locationCountryStyle && <div ref={lineRef2} className={styles.line}></div>}
            </motion.div>

        </div>)
}

export default HeroSection