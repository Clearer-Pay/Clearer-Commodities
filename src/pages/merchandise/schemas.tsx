import * as yup from "yup";

export const merchandiseSchema = yup.object().shape({
    productName: yup
        .string()
        .required("Product name is required"),
    category: yup
        .string()
        .required("Category is required"),
    subcategory: yup
        .string()
        .required("Subcategory is required"),
    description: yup
        .string()
        .required("Description is required")
        .max(500, "Text exceeds 500 characters. Please shorten your input."







),
        
    images: yup
        .array()
        .min(1, "At least one image is required")
        .required("Images are required"),
    variant: yup
        .array()
        .notRequired(), 
});
