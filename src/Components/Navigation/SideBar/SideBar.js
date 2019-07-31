import React from 'react'
import styles from './SideBar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Aux from '../../../hoc/Aux'
import Backdrop from '../../Ui/Backdrop/Backdrop'




const Sidebar = (props) => {
	// .... condition
	const visibleState = props.show ? styles.Open : styles.Close

	return (
		<Aux>
			<Backdrop show={props.show} close={props.close}/>
			<div className={[styles.Sidebar, visibleState].join(' ')}>
				<Logo height="10%"/>
				<nav>
					<NavigationItems/>
				</nav>
			</div>
		</Aux>
	)


}



export default Sidebar