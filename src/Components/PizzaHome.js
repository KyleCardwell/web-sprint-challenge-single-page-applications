import React from 'react'
import { Link } from 'react-router-dom'

export default function PizzaHome(props) {
    return (
        <div className="pizza-home-card">
            <h2>"Your favorite food, delivered while coding</h2>
            <Link to="/pizza" id="order-pizza">Order</Link>      
        </div>
    )
}