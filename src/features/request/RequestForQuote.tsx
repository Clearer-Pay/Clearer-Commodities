import { Form, Formik } from 'formik';
import styles from './styles.module.css'
import { InputTemp, TextAreaTemp } from '../../custom/form/input';
import ShoppingCart from '../../assets/quotePage/shopping-cart.svg';
import { qouteSchema } from '../landingPage/authentication/schemas/qouteFormschemas';
import CourtHouseIcon from '../../assets/searchPage/courthouse.svg';
import AvgScoreIcon from '../../assets/searchPage/eye.svg';
import ItemImage from '../../assets/searchPage/Rectangle 72.png';

interface RequestForQuoteFormValues {
  quantity: number | '';
  subject: string;
  description: string;

}

const RequestForQuote = () => {

  const initialValues: RequestForQuoteFormValues = {
    quantity: '',
    subject:'',
    description: '',
  };

  const handleSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <div className={styles.quoteRequestPage}>
      <div className={styles.requestQuoteForm}>
        <h1>Request for Quote</h1>
        <div className={styles.formTitle}>
          <ShoppingCart/>
          <p className={styles.ftItemTile}>Linen Clothing</p>
          <span>|</span>
          <p className={styles.ftItemPrice}>$1300/tons</p>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={qouteSchema}
        >
          {({ handleSubmit, handleChange, handleBlur, errors, touched, setFieldValue, isValid, dirty, resetForm, values, isSubmitting }) => {

            return (
              <Form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
                <InputTemp
                  id='quantity'
                  name="quantity"
                  placeholder="Enter Quantity / No. of tons"
                  classNames='custom-inputs'
                  inputType={'number'}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  errors={errors}
                  touched={touched}
                />
                
                <InputTemp
                  id='subject'
                  name="subject"
                  placeholder="Subject"
                  classNames='custom-inputs'
                  inputType={'text'}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  errors={errors}
                  touched={touched}
                />

                <TextAreaTemp
                  id='description'
                  name="description" 
                  placeholder="Description"
                  classNames='custom-textarea'
                  inputType={'text'}
                  onBlurT={handleBlur}
                  onChangeT={handleChange}
                  errors={errors}
                  touched={touched}
                />
                <button type='submit' disabled={!isValid || !dirty} className={`${styles.submitBtn} buttonStyles`}>Submit RFQ</button>
                
              </Form>
            )
          }}
        </Formik>
      </div>

      <div className={styles.QPitemDetails}>
        <div className={styles.item}>
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
            <button className={`${styles.viewDetailsBtn} buttonStyles`}>
              View details
            </button>
            <button className={`${styles.submitRFQBtn} buttonStyles`}>
              Submit RFQ
            </button>
          </div>
        </div>

        <div className={styles.priceDetails}>
          <div className={styles.priceDetailsHd}>Price Details</div>
          <div className={styles.units}>
            <p>1 ton(s) X 2 units</p>
            <p>$120.32</p>
          </div>
          <div className={styles.total}>
            <p>Total</p>
            <p>$130</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestForQuote