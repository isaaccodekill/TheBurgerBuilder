import React from "react"
import Burger from '../../Burger/Burger'
import Button from '../../Ui/Button/Button'
import styles from './CheckoutSummary.css'

const CheckoutSummary = (props) => {
	return (
		<div className={styles.CheckoutSummary}>
			<h1>
				We hope it tastes well
			</h1>

			<div style={{width: '100%', margin: 'auto'}}>
				<Burger ingredients={props.ingredients}/>
			</div>
			<Button color='green'
				action={props.submit}
			>Checkout</Button>
			<Button color='red'
			action={props.cancel}>
			Cancel</Button>
		</div>

	)
}

export default CheckoutSummary