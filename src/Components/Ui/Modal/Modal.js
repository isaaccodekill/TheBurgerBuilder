import React, {Component} from 'react'
import styles from './Modal.css'
import Backdrop from '../Backdrop/Backdrop'



class Modal extends Component{

	shouldComponentUpdate(nextProps, nextState){
		return nextProps.show !== this.props.show || nextProps.children !== this.props.children
	}

	

	render(){
		const style = {
			transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
			opacity : this.props.show  ? '1' : '0'
		}
		return(
			<React.Fragment>
				<Backdrop show={this.props.show} close={this.props.closeModal}/>
				<div className={styles.Modal} style={style}>
				{this.props.children}
				</div>
			</React.Fragment>
		)
	}
}


export default Modal;