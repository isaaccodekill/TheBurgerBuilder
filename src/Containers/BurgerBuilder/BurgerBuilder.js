import React, { Component } from 'react'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import Modal from '../../Components/Ui/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../Components/Ui/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import { withRouter } from 'react-router-dom'

// import the instance with its preset variables that you wnt to use for this app

import axios from '../../axios-orders.js'


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7

}

class BurgerBuilder extends Component{
    constructor(props) {
        super(props)
        this.state = {
            // we modified the state so that the ingredients will be gotten from the server 
            ingredients : null,
            totalPrice: 4,
            notPurchasable: true,
            purchasing: false,
            loading: false,
            error: false 
        }
    }

    componentDidMount(){
        this.getIngredientsHandler()
    }

    getIngredientsHandler = async () => {
        try{
            const response = await axios.get('/ingredients.json')
            this.setState({ingredients: response.data })
        }
        catch(error){
            console.log(error)
            this.setState({error: true})
        }
    }


    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    closeModal = () => {
        this.setState({purchasing: false})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    // testing my new knowledge of async await


    proceedToCheckout = () => {
        const query = []
        for (let i in this.state.ingredients){
            query.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        const queryString = query.join('&')
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString,
            totalPrice: this.state.totalPrice
            // method 1 ingredients: this.state.ingredients

            // method 2 use search keyword and add a query string
        }) 
    }


    updatePurchasable = (ingredients) => {
        for(let key in ingredients){
            if(ingredients[key] > 0){
                this.setState((prevState, props) => {
                    return {notPurchasable: false} 
                })
                return 0;
            }
        }

        this.setState({
            notPurchasable: true
        })

    }

    addIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type]
        let updatedCount = oldCount + 1
        let updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = updatedCount
        let oldPrice = this.state.totalPrice
        let newPrice = oldPrice + (INGREDIENT_PRICES[type])
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
        this.updatePurchasable(updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type]
        let updatedIngredients = {...this.state.ingredients}
        let oldPrice = this.state.totalPrice
        if (oldCount > 0) {
            let updatedCount = oldCount - 1
            updatedIngredients[type] = updatedCount
            let newPrice = oldPrice - (INGREDIENT_PRICES[type])
            this.setState({
                ingredients: updatedIngredients,
                totalPrice: newPrice
            })
        }
       this.updatePurchasable(updatedIngredients) 
    }


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let  key in disabledInfo){
            disabledInfo[key] = this.state.ingredients[key] <= 0
        } 

        let orderSummary = null 

         let burger = this.state.error ? <p>The burger couldnt be loaded</p> : <Spinner/>
         if(this.state.ingredients){
            burger =(
                            <React.Fragment>
                            <Burger ingredients={this.state.ingredients} /> 
                            <BuildControls modalHandle={this.purchaseHandler} price={this.state.totalPrice} addIngredient={this.addIngredientHandler} removeIngredient={this.removeIngredientHandler} disabledInfo={disabledInfo}
                            notPurchasable={this.state.notPurchasable}
                            />
                            </React.Fragment>
            )
            orderSummary = (<OrderSummary ingredients={this.state.ingredients} 
                                        price={this.state.totalPrice}    
                                        purchase={this.proceedToCheckout} 
                                        cancel={this.purchaseCancelHandler}/>)
   
         }

         if(this.state.loading){
            orderSummary = <Spinner/>
         }                   



        return (
            <React.Fragment>
                <Modal show={this.state.purchasing} closeModal={this.closeModal}>  
                    {orderSummary}
                </Modal>
                {burger}

            </React.Fragment>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios)