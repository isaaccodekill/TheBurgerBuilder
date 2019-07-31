import React from 'react'
import styles from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => (
	<ul className={styles.NavigationItems}>
		<NavigationItem link="/">Burger Builder</NavigationItem>
		<NavigationItem link="/orders">Order History</NavigationItem>

	</ul>
)


export default NavigationItems