import * as Yup from 'yup';

export const qouteSchema = Yup.object().shape({
    quantity: Yup.number()
        .required('Quantity is required')
        .positive('Quantity must be greater than zero')
        .integer('Quantity must be a whole number'),
    subject: Yup.string()
        .required('Subject is required')
        .min(3, 'Subject must be at least 3 characters long'),
    description: Yup.string()
        .required('Description is required')
        .min(10, 'Description must be at least 10 characters long'),
});