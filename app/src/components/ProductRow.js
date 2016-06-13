import React from "react";

export default class ProductRow extends React.Component {
	constructor(){
		super();
	}
	render(){
		return(
			<div>
				<h4>{this.props.product}</h4>
			</div>
		);
	}
}