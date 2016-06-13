import React from "react";

export default class ProductRow extends React.Component {
	constructor(){
		super();
	}
	render(){
		return(
			<div class="fila">
				<h4>{this.props.product}</h4>
			</div>
		);
	}
}