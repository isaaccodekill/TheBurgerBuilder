import React from 'react'
import styles from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {

    const TransformedIngredients = Object.keys(props.ingredients).map((ingredientKey) => {
        return [...Array(props.ingredients[ingredientKey])].map((emptySpace, i) => {  
            return (<BurgerIngredient key={ingredientKey + i} ingredientType={ingredientKey}/>)
        })
    }).reduce((acc, el) => {
        return acc.concat(el)
    }, [])
    
    

    return (
        <div className={styles.Burger}>
          <BurgerIngredient ingredientType="bread_top"/>  
            {TransformedIngredients.length === 0  ? <h3 className={styles.empty}> Add ingredients to your burger </h3>  : TransformedIngredients }
            <BurgerIngredient ingredientType="bread_bottom"/>
        </div>
    )
}

export default Burger