import React, { useState } from "react";
import PizzaForm from "./Components/PizzaForm";
import PizzaNav from "./Components/PizzaNav";
import PizzaHome from './Components/PizzaHome'
import { useRouteMatch, Route, Link, Switch } from "react-router";

import { pizzaToppings } from './Components/pizzaOptions'
import axios from "axios";

import * as yup from 'yup'
import schema from './Validation/formSchema'


const App = () => {

  // const toppingsList = pizzaToppings.map(topping => {
  //   return [`'${topping}'`, false]
  // })

  // const newToppingsList = Object.fromEntries(toppingsList)  

  // console.log(newToppingsList)
  const API_URL = 'https://reqres.in/api/orders'

  const initialFormValues = {
    orderName: "",
    size: "",
    sauce: "",
    pizzaToppings,
    substitute: false,
    special: "",
  }

  const initialFormErrors = {
    orderName: "",
    pizzaToppings,
  }

  const [formValues, setFormValues] = useState(initialFormValues)
  const [orders, setOrders] = useState([])
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState()


  // ---------- TOPPINGS SELECTION CHANGES ----------
  const toppingChange = (evt) => {
    const { name, checked } = evt.target

    // const indexOfTopping = pizzaToppings.findIndex(i => name === i.toppingName)
    
    const newPizzaToppings = pizzaToppings.map(topping => {
      if(name === topping.toppingName) {
        topping.ischecked = checked
      }
      return topping
    })

    setFormValues({...formValues, pizzaToppings: newPizzaToppings})
  
  }

  const inputChange = evt => {

    const { name, value } = evt.target

    yup.reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]: "" })
    })
    .catch(err => {
      setFormErrors({...formErrors, [name]: err.message})
    })

    setFormValues({...formValues, [name]: value})

  }

  const postNewOrder = newOrder => {
    axios
      .post(API_URL, newOrder)
      .then(res => {
        // setOrders(...orders, newOrder)
        console.log(res)
      })
      .catch(err => console.log(err))
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const formSubmit = () => {
    const newOrder = {
      orderName: formValues.orderName,
      size: formValues.size,
      sauce: formValues.sauce,
      pizzaToppings: formValues.pizzaToppings,
      substitute: formValues.substitute,
      special: formValues.special,
    }

    postNewOrder(newOrder)
  }


  return (
    <>
      <PizzaNav />

      <Route exact path="/">
        <PizzaHome />
      </Route>

      <Route path="/pizza">
        <PizzaForm
          // myOrderName={formValues.orderName}
          // sauce={formValues.sauce}
          values={formValues}
          pizzaToppings={formValues.pizzaToppings}
          // selectedSize={formValues.size}
          toppingChange={toppingChange}
          change={inputChange}
          submit={formSubmit}
          errors={formErrors}
        />
      </Route>
    </>
  );
};
export default App;
