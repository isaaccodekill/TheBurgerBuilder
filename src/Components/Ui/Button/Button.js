import React from 'react'
import styles from './Button.css'


const Button = (props) => {
	return (
		<button className={styles.Button} style={{backgroundColor: props.color}}  onClick={props.action}>
		{props.children}	
		</button>
	)
}


export default Button