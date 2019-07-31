import React, { Component } from 'react'
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import { withRouter, Route } from 'react-router-dom'

class Checkout extends Component{

	state = {
		ingredients: {}
	}

	componentDidMount = () => {
		const query = new URLSearchParams(this.props.location.search) // extract hte search params of the url
		const ingredients = {}
		for(let params of query.entries()){
			ingredients[params[0]] = +params[1]
		}
		console.log(ingredients)
		this.setState({ingredients: ingredients, totalPrice: this.props.location.totalPrice})
	}

    showContactForm = () => {
        this.props.history.push({
            pathname: this.props.match.path + "/contact-data"
        })
    }

    cancel = () => {
    	this.props.history.goBack()
    }

    continue = () => {
    	this.props.history.replace('/checkout/contact-data')
    }


	render(){ 
		return (
			<div>
				<CheckoutSummary ingredients={this.state.ingredients} submit={this.showContactForm} cancel={this.cancel}/>
                <Route path={this.props.match.path + '/contact-data'} render={() => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} />)} />
			</div>
		)
	}
}

export default withRouter(Checkout);