import React, { Component } from 'react';
import route from './Route'
import $store from '../redux'

class MiddleComponent extends Component {
	constructor(props){
		super(props);
		this.$store = $store;
		this.$route = route.getRoute();
		this.mounted = true;
		// var vm = this;
		// var temp = null;
		// Object.defineProperty(vm,'props',{
		// 	get:function(){
		// 		return temp;
		// 	},
		// 	set:function(value){
		// 		vm.props.update('name','123')
		// 		temp = value
		// 	}
		// })
	}
	setData = (obj)=>{
		if(this.mounted){
			this.setState(obj);
		}
	}
	handleChange =(key,e)=>{
		this.props.update(key,e.target.value);
    }
    update = (key,value)=>{
    	var obj = {
    		key:key,
    		value:value
    	}
    	var obj2 = {};
    	obj2[key] = obj;
    	console.log(obj2)
    	this.setState(obj2);
    }
	componentWillUnmount() {
		this.mounted = false;
	}
}

  
export {MiddleComponent,React};