import React from 'react'
import styles from './SideBar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../Ui/Backdrop/Backdrop'




const Sidebar = (props) => {
	// .... condition
	const visibleState = props.show ? styles.Open : styles.Close

	return (
		<React.Fragment>
 			<Backdrop show={props.show} close={props.close}/>
			<div className={[styles.Sidebar, visibleState].join(' ')}>
				<Logo height="10%"/>
				<nav>
					<NavigationItems/>
				</nav>
			</div>
		</React.Fragment>
 	)


}



export default Sidebar