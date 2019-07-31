import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://burger-builder-5ea54.firebaseio.com/'
})

export default instance