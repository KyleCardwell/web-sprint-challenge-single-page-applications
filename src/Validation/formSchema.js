import * as yup from 'yup';

const schema = yup.object().shape({
    orderName: yup
        .string()
        .required('Please enter your name')
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .required(),
    sauce: yup
        .string()
        .required(),
    pizzaToppings: yup
        .array(),

})

export default schema
