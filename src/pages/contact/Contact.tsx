import { Form, Formik } from 'formik';
import styles from './styles.module.css';
import { InputTemp, TextAreaTemp } from '../../custom/form/input';
import contactSchema from './contactSchema';
import { motion } from 'framer-motion';

const Contact = () => {
  const initialValues = {
    fullName: '',
    phoneNumber: '',
    email: '',
    message: '',
  };
  const handleSubmit = () => {};
  return (
    <div className={styles.contactPageWrapper}>
      <div className={styles.contactPage}>
        <div>
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.2, duration: 0.5 },
              x: 0,
            }}
            viewport={{ once: true, amount: 0.1 }}
            className={styles['contact-heading']}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.2, duration: 0.5 },
              x: 0,
            }}
            viewport={{ once: true, amount: 0.1 }}
            className={styles['contact-description']}
          >
            We would love to hear from you
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.2, duration: 0.5 },
              x: 0,
            }}
            viewport={{ once: true, amount: 0.1 }}
            className={styles.companyDetails}
          >
            <div className={styles.detail}>
              <h4 className={styles.detailsHeader}>OUR ADDRESS</h4>
              <div className={styles.detailsInfo}>
                <p>
                  Property gate Centre, 2 The Rock Drive, CBD, Lekki Phase 1,
                  Lagos
                </p>
              </div>
            </div>
            <div className={styles.detail}>
              <h4 className={styles.detailsHeader}>OFFICE HOURS</h4>
              <div className={styles.detailsInfo}>
                <p>Monday - Friday</p>
                <p>8:00AM - 6:00PM GMT</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.2, duration: 0.5 },
              x: 0,
            }}
            viewport={{ once: true, amount: 0.1 }}
            className={styles.companyDetails}
          >
            <div className={styles.detail}>
              <h4 className={styles.detailsHeader}>SEND A MAIL</h4>
              <div className={styles.detailsInfo}>
                <p>hello@clearercommodities.com</p>
              </div>
            </div>
            <div className={styles.detail}>
              <h4 className={styles.detailsHeader}>GET IN TOUCH</h4>
              <div className={styles.detailsInfo}>
                <p>+232 074 605 659</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.5 },
            y: 0,
          }}
          viewport={{ once: true, amount: 0.1 }}
          className={styles.sendAMessageFrm}
        >
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={contactSchema}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              errors,
              touched,
              setFieldValue,
              isValid,
              dirty,
              resetForm,
              values,
              isSubmitting,
            }) => {
              return (
                <Form
                  onSubmit={handleSubmit}
                  autoComplete="off"
                  className="form"
                >
                  <InputTemp
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    classNames="custom-inputs"
                    inputType="text"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    errors={errors}
                    touched={touched}
                    defaultValue=""
                  />
                  <InputTemp
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    classNames="custom-inputs"
                    inputType="text"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    errors={errors}
                    touched={touched}
                    defaultValue=""
                  />
                  <InputTemp
                    id="email"
                    name="email"
                    placeholder="Email"
                    classNames="custom-inputs"
                    inputType="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    errors={errors}
                    touched={touched}
                    defaultValue=""
                  />
                  <TextAreaTemp
                    id="message"
                    name="message"
                    placeholder="Message"
                    classNames="custom-textarea"
                    inputType="textarea"
                    onBlurT={handleBlur}
                    onChangeT={handleChange}
                    errors={errors}
                    touched={touched}
                    defaultValue=""
                  />

                  <button className="buttonStyles"> Send Message</button>
                </Form>
              );
            }}
          </Formik>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
