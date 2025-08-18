import styles from "./styles.module.css";
import FirstImage from "../../assets/itempage/first image.jpeg";
import SecondImage from "../../assets/itempage/second image.jpeg";
import ThirdImage from "../../assets/itempage/third image.jpg";
import CourtHouseIcon from "../../assets/searchPage/courthouse.svg";
import CourtHouseIconRed from "../../assets/itempage/courthouse2.svg";
import AvgScoreIcon from "../../assets/searchPage/eye.svg";
import Map from "../../assets/loader/map.svg";
import { useState } from "react";
import ItemsDisplay from "../../features/itemsDisplay/ItemsDisplay";
import { router } from "../../app/router/Routes";

const ItemPage = () => {
  const [imageInView, setImageInView] = useState<number>(0); // Track the index of the main image
  const images = [
    { image: FirstImage, id: 1 },
    { image: SecondImage, id: 2 },
    { image: ThirdImage, id: 3 },
  ];

  return (
    <div className={styles.itempg}>
      <div className={styles.itemImages}>
        <img
          className={styles.mainimage}
          src={images[imageInView].image}
          alt="main item image"
        />
        <div className={styles.imageThumbnails}>
          {images
            .filter((_, index) => index !== imageInView)
            .map((img, index) => (
              <img
                key={img.id}
                src={img.image}
                alt={`Thumbnail ${img.id}`}
                className={styles.thumbnail}
                onClick={() =>
                  setImageInView(
                    images.findIndex((image) => image.id === img.id)
                  )
                }
              />
            ))}
        </div>
      </div>

      <div className={styles.itemDetails}>
        <div className={styles.itemDetails1}>
          <div className={styles.avgScore}>
            <AvgScoreIcon /> Avg Score
          </div>
          <h2 className={styles.itemTitle}>Linen Clothings</h2>
          <div className={styles.itemLocation}>
            <CourtHouseIcon /> China
          </div>
          <p className={styles.itemDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            corrupti ipsum minus mollitia consequatur, perferendis ea voluptas
            in sint blanditiis porro nam odio temporibus quis ab, pariatur est
            atque amet?
          </p>

          <p className={styles.itemPrice}>
            <span>$1300</span>/ tons
          </p>

          <div className={styles.itembtns}>
            <button
              onClick={() => router.navigate("/quote/f9f2e73a")}
              className={`${styles.contactOTC} buttonStyles`}
            >
              Submit RFQ
            </button>
          </div>
        </div>

        <div className={styles.map}>
          <Map />

          <div className={styles.mapLocation}>
            <CourtHouseIconRed />
            <p>China</p>
          </div>
        </div>
      </div>
      <div className={styles.itemDisplayContainer}>
        <h2>Other Similar Products</h2>
        <ItemsDisplay />
      </div>
    </div>
  );
};

export default ItemPage;
