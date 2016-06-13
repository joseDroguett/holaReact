import React from "react";

export default class ProductCategoryRow extends React.Component {
	constructor(){
		super();
	}
	render(){
		return(
			<div>
				<h2>{this.props.category}</h2>
			</div>
		);
	}
}