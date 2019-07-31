import React from 'react'
import styles from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar = (props) => {
	return (
		<header className={styles.Toolbar}>
			<div className={styles.Menu} onClick={props.open}>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<Logo height="80%"/>
			<nav className={styles.hide}>
				<NavigationItems/>
			</nav>
		</header>
	)
}


export default Toolbar