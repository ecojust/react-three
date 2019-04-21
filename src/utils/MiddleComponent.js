import React, { Component } from 'react';
import route from './Route'
import $store from '../redux'

class MiddleComponent extends Component {
	constructor(props){
		super(props);
		this.$store = $store;
		this.$route = route.getRoute();
		this.mounted = true;
	}
	setData = (obj)=>{
		if(this.mounted){
			this.setState(obj);
		}
	}
	componentWillUnmount() {
		this.mounted = false;
	}
}

  
export {MiddleComponent,React};