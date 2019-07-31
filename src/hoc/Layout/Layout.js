import React, { Component } from 'react'
import Aux from '../Aux'
import styles from './Layout.css'
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar'
import SideBar from '../../Components/Navigation/SideBar/SideBar'


class Layout extends Component{
	constructor(props){
		super(props)

		this.state = {
			showSideDrawer: false
		}
	}


	openSidebarHandler = () => {
		this.setState({showSideDrawer: true})
	}


	closeSidebarHandler = () => {
		this.setState({showSideDrawer: false})
	}

	render(){
		return (
			<Aux>
		        <Toolbar open={this.openSidebarHandler}/>
		        <SideBar show={this.state.showSideDrawer} close={this.closeSidebarHandler}/>
		        <main className={styles.content}>
		            {this.props.children}
		        </main>
    		</Aux>

		)	
	}
}



export default Layout
