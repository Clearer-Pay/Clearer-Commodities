import styles from './styles.module.css';
import CourtHouseIcon from '../../assets/searchPage/courthouse.svg';
import AvgScoreIcon from '../../assets/searchPage/eye.svg';
import ItemImage from '../../assets/searchPage/Rectangle 72.png';
import { router } from '../../app/router/Routes';


const ItemsDisplay = () => {
  return (
      <div className={styles.resultsWrapper}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
              <div key={index} className={styles.item}>
                  <div className={styles.avgScore}>
                      <AvgScoreIcon /> Avg Score
                  </div>
                  <h2>Linen Clothings</h2>
                  <div className={styles.itemLocation}>
                      <CourtHouseIcon /> China
                  </div>
                  <img src={ItemImage} alt="item image" />
                  <p className={styles.itemDescription}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nesciunt corrupti ipsum minus mollitia consequatur, perferendis
                      ea voluptas in sint blanditiis porro nam odio temporibus quis
                      ab, pariatur est atque amet?
                  </p>

                  <p className={styles.itemPrice}>
                      <span>$1300</span>/ tons
                  </p>

                  <div className={styles.itembtns}>
                      <button onClick={() => router.navigate('/item/egg/f9f2e73a-6079-41ec-943f-8d265e57dd4f')} className={`${styles.viewDetailsBtn} buttonStyles`}>
                          View details
                      </button>
                      <button className={`${styles.submitRFQBtn} buttonStyles`}>
                          Submit RFQ
                      </button>
                  </div>
              </div>
          ))}
      </div>
  )
}

export default ItemsDisplay