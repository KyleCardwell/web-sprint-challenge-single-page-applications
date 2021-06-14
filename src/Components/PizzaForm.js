import React from 'react'
import '../App.css'

import { pizzaSauce, pizzaSizes } from './pizzaOptions'


export default function PizzaForm(props) {

    const { pizzaToppings, change, toppingChange, submit, selectedSize, values } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <div className="formContainer">
            <form id="pizza-form">
                <h3>Build Your Own Pizza</h3>
                <section>
                    <div className="sectionTitle">
                        <h4>What's your name?</h4>
                    </div>
                    <div>
                        <label>
                            <input
                                type="text"
                                placeholder="Enter your name here"
                                id="order-name"
                                name="orderName"
                                value={values.orderName}
                                onChange={change}/>
                        </label>
                    </div>
                </section>
                
                <section>
                    <div className="sectionTitle">
                        <h4>Choice of Size</h4>
                        <p>Required</p>
                    </div>
                    <div>
                        <select id="size-dropdown" name="size" value={values.size} onChange={change}>
                            <option>Select</option>
                            {pizzaSizes.map(size =>
                                <option key={size}>{size}</option>
                            )}
                        </select>
                    </div>
                </section>

                <section className ="orderSection">
                    <div className="sectionTitle">
                        <h4>Choice of Sauce</h4>
                        <p>Required</p>
                    </div>
                    <div className="sauces">
                        {pizzaSauce.map(sauce => 
                            <label key={sauce}>
                                <input
                                    type="radio"
                                    name="sauce"
                                    value={sauce}
                                    onChange={change}
                                />{sauce}</label>
                        )}

                    </div>
                </section>

                <section className="orderSection">
                    <div className="sectionTitle">
                        <h4>Add Toppings</h4>
                        <p>Choose up to 10</p>
                    </div>
                    <div className="toppings">
                        {pizzaToppings.map(topping =>
                            <label key={topping.toppingName} className="eachTopping">
                                <input
                                    type="checkbox"
                                    checked={topping.ischecked}
                                    onChange={toppingChange}
                                    name={topping.toppingName}
                                />{topping.toppingName}</label>
                        )}
                    </div>
                </section>
                <section>
                    <div className="sectionTitle">
                        <h4>Choice of Substitute</h4>
                        <p>Choose up to 1</p>
                    </div>
                    <div>
                        <label><input type="checkbox"/>Gluten-free Crust (Add $1)</label>
                    </div>
                </section>

                <section>
                    <div className="sectionTitle">
                        <h4>Special Instructions</h4>
                    </div>
                    <div>
                        <label><input
                            className="specialInstructions"
                            type="text"
                            placeholder="Anything else you'd like to add?"
                            name="special"
                            value={values.special}
                            id="special-text"
                            onChange={change}
                        /></label>
                    </div>
                </section>

                <section>
                    <div className="sectionTitle">
                        <button type="submit" onSubmit={onSubmit} id="order-button">Submit Order</button>
                    </div>
                </section>


            </form>
        </div>
    )
}