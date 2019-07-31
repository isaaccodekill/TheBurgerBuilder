import React from 'react'
import styles from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const BuildControls = (props) => {
    const ingredients = [
        { label: "Salad", type: "salad" },
        { label: "Meat", type: "meat" },
        { label: "Cheese", type: "cheese" },
        { label: "Bacon", type:"bacon"}
    ]
    return (
        <div className={styles.BuildControls}>
            <h3>
                current price : $ {props.price.toFixed(2)}
            </h3>
            {ingredients.map((ingredients) => {
                return <BuildControl key={ingredients.label} label={ingredients.label} type={ingredients.type} add={props.addIngredient} removeIngredient={props.removeIngredient}
                    disabled={props.disabledInfo[ingredients.type]}
                />
            })}
            <button className={styles.OrderButton} disabled={props.notPurchasable}
            onClick={props.modalHandle}>
                Order Now
            </button>
        </div>
    )
}   


export default BuildControls
