import * as Yup from 'yup';

const contactSchema = Yup.object({
    fullName: Yup.string()
        .required('Full name is required')
        .min(3, 'Full name must be at least 3 characters')
        .max(50, 'Full name cannot exceed 50 characters'),
    phoneNumber: Yup.string()
        .required('Phone number is required')
        .matches(/^\+?[0-9]{7,15}$/, 'Phone number must be valid and contain 7-15 digits'),
    productName: Yup.string()
        .required('Product name is required')
        .min(2, 'Product name must be at least 2 characters')
        .max(100, 'Product name cannot exceed 100 characters'),
    email: Yup.string()
        .required('Email is required')
        .email('Enter a valid email'),
    message: Yup.string()
        .required('Message is required')
        .min(10, 'Message must be at least 10 characters')
        .max(500, 'Message cannot exceed 500 characters'),
});

export default contactSchema;
