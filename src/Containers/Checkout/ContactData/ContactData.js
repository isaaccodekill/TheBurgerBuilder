import React, { Component } from 'react'
import Button from '../../../Components/Ui/Button/Button'
import Styles from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../Components/Ui/Spinner/Spinner'

class ContactData extends Component {
	constructor(props){
		super(props)

		this.state = {
			name: '',
			email: '',
			address: {
				street: '',
				postalCode: ''
			},
			loading: false
		}
	}

	// submit out burger
	postOrderHandler = async (payload) => {
        try{
            await axios.post('orders.json', payload)
            this.setState({purchasing: false, loading: false})
        }
        catch(error){
            this.setState({purchasing: false, loading: false})
        }
    }

	purchaseContinueHandler = (e) => {
		e.preventDefault()
        this.setState({loading: true})
        const order = {
            ingredients : this.props.ingredients,
            price: this.props.price,
            customer : {
                name: "Isaac Bello",
                address: {
                    street: 'TestStreet 1',
                    zipcode: '11101',
                    country: 'Nigeria'
                },
                email: 'isaacbello3200@gmail.com',
            },
            deliveryMethod: 'Express delivery'
        }

        this.postOrderHandler(order)
    }


	render(){
		let form = null
		if (this.state.loading){
			form = <Spinner />
		}
		else{
			form = (<form>
					<input className={Styles.input} type="text" name="name" placeholder="name"/>
					<input className={Styles.input} type="email" name="email" placeholder="email address"/>
					<input className={Styles.input} type="text" name="street" placeholder="street name"/>
					<input className={Styles.input} type="text" name="postal" placeholder="postal code"/>
					<Button color="green" action={this.purchaseContinueHandler}>Submit</Button>
				</form>)
		}
		return (

			<div className={Styles.ContactData}>
				<h4>Enter your contact info</h4>
					{form}
			</div>
		)
	}
}

export default ContactData
