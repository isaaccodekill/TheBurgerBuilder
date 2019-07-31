import React from 'react'
import Styles from './Order.css'

const Order = (props) => {
	const IngredientsList = []
	for (let key in props.ingredients){
		IngredientsList.push({item: key, amount: props.ingredients[key]})
	}

	const ingredients = IngredientsList.map(ig => {
		return <span style={{
			textTransform : "capitalize",
			display: "inline-block",
			padding: "20px",
			margin: "0 8px",
			border: "1px solid #ccc"	
		}}>{ig.item} (ig.amount)</span>
	} )

	return (
		<div className={Styles.Order}>
			<p>Ingredients: Salad (1) </p>
			<p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
		</div>
	)
}

export default Order