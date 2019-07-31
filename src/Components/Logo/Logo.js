import React from 'react'
import Image from '../../assets/Images/burger-logo.png'
import styles from './Logo.css'


const Logo = (props) => (
	<div className={styles.Logo} style={{height: props.height}}>
		<img src={Image} alt="Logo"/>
	</div>
)

export default Logo

