import React from 'react';
import {NavBar} from './../NavBar/NavBar.js';
import {Categories} from './../Sidebar/Categories.js';
import {ProductCard} from './../ProductCard/ProductCard.js';
export default class Home extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="container-fluid">
				<NavBar/>
				<div className="row">
					<Categories/>
					<ProductCard/>
					<ProductCard/>
					<ProductCard/>
				</div>
			</div>
			);
	}
}