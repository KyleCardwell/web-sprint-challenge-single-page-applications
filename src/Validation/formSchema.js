import * as yup from 'yup';

const schema = yup.object().shape({
    orderName: yup
        .string()
        .required('Please enter your name')
        .min(2, "Name must be at least 2 characters long"),
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
