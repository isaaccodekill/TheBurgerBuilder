import React, { Component } from 'react'
import Modal from '../../Components/Ui/Modal/Modal'

// create the special type of hoc component

const withErrorHandler = (WrappedComponent, axios) => {
	return class extends Component{

		state = {
			error : null
		}

		// note this an instance of this component wil be created which each component it wraps
		// therefore it will create copies of each interceptor we create and cause problems for us later in future
		// therefore it is important that we leave reference to each interceptor we create that is one for each component that is wrapped
		//  the error handler and then clear them when the component it;s wrapping unmounts

		componentWillMount(){
		 this.reqInterceptor = axios.interceptors.request.use(req => {
				// you have to return the req or the response based on the type of interceptor you're using
				this.setState({error: null})
				return req
			})
		 this.resInterceptor = axios.interceptors.response.use(res => res, ( error ) => {
				this.setState({error: error})
			})
		}

		componentWillUnmount(){
			axios.interceptors.request.eject(this.reqInterceptor)
			axios.interceptors.response.eject(this.resInterceptor)
		}


		errorReceivedHandler = () => {
			this.setState({error: null})
		}

		render (){

			return (
				<React.Fragment>
					<Modal show={this.state.error} closeModal={this.errorReceivedHandler}>
						{this.state.error ? this.state.error.message : null }
					</Modal>
					<WrappedComponent { ...this.props } />
				</React.Fragment>
			)
		}
	}
}


export default withErrorHandler
