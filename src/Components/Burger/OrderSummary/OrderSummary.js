import React from 'react'
import Button from '../../Ui/Button/Button'


const orderSummary = (props) => {
	const summary = Object.keys(props.ingredients).map((igkey) => {
		return <li key={igkey}> <span style={{textTransfrom: "Capitalize"}}>{igkey}</span> : {props.ingredients[igkey]} </li>	
	})
	return(
		<React.Fragment>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients</p>
			<ul>
			{summary}
			</ul>
			<h3>Total cost: $ {props.price.toFixed(2)}</h3>
			<p>Contiue to checkout?</p>
			<Button color='#944317' action={props.cancel}>
			Cancel
			</Button>
			<Button color='#5c9210' action={props.purchase}>
			Order
			</Button>
		</React.Fragment>
		)
}

export default orderSummary 




