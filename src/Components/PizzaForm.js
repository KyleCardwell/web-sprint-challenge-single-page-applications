import React from 'react'
import { pizzaSauce, pizzaToppings, pizzaSizes } from './pizzaOptions'
import '../App.css'


export default function PizzaForm(props) {

    return (
        <div className="formContainer">
            <form>
                <h3>Build Your Own Pizza</h3>
                <section>
                <div className="sectionTitle">
                        <h4>Choice of Size</h4>
                        <p>Required</p>
                    </div>
                    <div>
                        <select>
                            <option>Select</option>
                            {pizzaSizes.map(size =>
                                <option>{size}</option>
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
                            <label><input type="radio" name="sauceChoice"/>{sauce}</label>
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
                            <label className="eachTopping"><input type="checkbox"/>{topping}</label>
                        )}
                    </div>
                </section>

            </form>
        </div>
    )
}