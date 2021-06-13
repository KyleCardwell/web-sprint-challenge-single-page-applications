import React  from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function PizzaNav(props) {
    return (
        <div className="navbar">
            <h1>Lambda Eats</h1>
            <div>
                <Link id="home" to="/">Home</Link>
                <Link id="help" to="/">Help</Link>
            </div>
        </div>
    )
}