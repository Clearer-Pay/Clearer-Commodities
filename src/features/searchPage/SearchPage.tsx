import styles from './styles.module.css';
import SelectTemp, { InputTemp } from '../../custom/form/input';
import YLocationIcon from '../../assets/landingpage/herosection/location-tick.svg';
import SupplyOIcon from '../../assets/landingpage/herosection/courthouse.svg';
import DeliveryDIcon from '../../assets/landingpage/herosection/location-add.svg';
import FilterIcon from '../../assets/searchPage/filter_list.svg';
import { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import ItemsDisplay from '../itemsDisplay/ItemsDisplay';
import ArrowDownIcon from '../../assets/searchPage/arrow-down.svg';
import Modal from '../../common/modals/Modal';

const SearchPage = () => {
    const [showFilter, setShowFilter] = useState(false)
    const searchFRef = useRef(null)
    const filterBtnRef = useRef<HTMLButtonElement>(null)
    useClickOutside(searchFRef, () => setShowFilter(false), filterBtnRef)

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



  const formField = [
    { name: 'Your location', icon: <YLocationIcon />, id: 'senderLocation' },
    {
      name: 'Supply Origin (Optional)',
      icon: <SupplyOIcon />,
      id: 'supplyOrigin',
    },
    {
      name: 'Delivery Destination',
      icon: <DeliveryDIcon />,
      id: 'deliveryDestination',
    },
  ];

  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <div className={styles.SearchPageWrapper}>
      <div className={styles.searchBarWrapper}>
        <Modal
          openModal={showFilter}
          onClose={() => setShowFilter(false)}
          children={
            <div className={styles.filterBy}>
              <h1>Filter by</h1>
              <div className={styles.filterInputs}>
                <SelectTemp
                  inputType={'text'}
                  classNames="custom-inputs custom-selects"
                  data={categories}
                  placeholder="Category"
                  svgIconComponent={<ArrowDownIcon />}
                  onClick={(row) => {
                    console.log('per')
                  }}
                />
                <SelectTemp
                  inputType={'text'}
                  classNames="custom-inputs custom-selects"
                  data={subcategories}
                  placeholder="Sub-Category"
                  svgIconComponent={<ArrowDownIcon />}
                  onClick={(row) => {
                    console.log('per')
                  }}
                />
                <SelectTemp
                  inputType={'text'}
                  classNames="custom-inputs custom-selects"
                  data={productNames}
                  placeholder="Product"
                  svgIconComponent={<ArrowDownIcon />}
                  onClick={(row) => {
                    console.log('per')
                  }}
                />
              </div>
              <button type='submit' className={`${styles.filterPbtn} buttonStyles`}>Proceed</button>
            </div>
          }
        />
        {formField.map((field, index) => (
          <InputTemp
            key={index}
            placeholder={field.name}
            classNames="custom-inputs"
            inputType={'text'}
            defaultValue={''}
          />
        ))}

        <div className={styles.searchBtns}>
                  <button onClick={() => setShowFilter(!showFilter)} className={`${styles.filterbtn} buttonStyles`} ref={filterBtnRef}>
            <FilterIcon /> Filter
          </button>
          <button type="submit" className={`${styles.submitBtn} buttonStyles`}>
            Search
          </button>
        </div>
      </div>

      <div className={styles.searchResultsContainer}>
        <h1 className={styles.resulthd}>
          Take a look at the Product Search of <span> 1,580 </span> items below
        </h1>
        <p className={styles.metricsTxt}>
          Metrics:{' '}
          <span>
            Currency value, Proximity to delivery & Comparative Advantage
          </span>
        </p>
        
        <ItemsDisplay/>
      </div>
    </div>
  );
};

export default SearchPage;
