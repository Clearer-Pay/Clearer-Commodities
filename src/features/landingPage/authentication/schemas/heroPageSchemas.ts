import * as Yup from 'yup';

const deliveryHeroPageSchema = Yup.object({
    senderLocation: Yup.string()
        .required('Your location is required'), 
    supplyOrigin: Yup.string()
        .notRequired(), 

    deliveryDestination: Yup.string()
        .required('Delivery destination is required')
});

export default deliveryHeroPageSchema;
