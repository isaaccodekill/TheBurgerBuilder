import React, { Component } from 'react'
import Order from '../../Components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Spinner from '../../Components/Ui/Spinner/Spinner'

class Orders extends Component{

	state = {
		orders: [],
		loading: false
	}

	componentDidMount(){
		this.getOrders()
	}


	getOrders = async () => {
		try{
			this.setState({loading: true})
			const response = await axios.get('/orders.json')
			const recievedOrders = []
			for (let key in response.data){
				recievedOrders.push({
					...response.data[key],
					id: key
				})
			}
			this.setState({orders: recievedOrders, loading: false})
			console.log(recievedOrders)
		}
		catch(error){
			this.setState({loading: false})
		}
	}

	render(){
		return (
			<div className="">
				{this.state.orders.map(order => (<Order key={order.id}
					ingredients={order.ingredients}
					price={+order.price}/>))}
			</div>
		)
	}
}

export default withErrorHandler(Orders, axios)