import React from "react";

export default class SearchBar extends React.Component {
	constructor(){
		super();
	}
	render(){
		return(
			<div class="filtrar">
				<label>Filtrar producto: </label>
				<input class="inputSearch" onChange={this.props.onChange} type="text"/>
				<input class="miCheckbox" type="checkbox"/>
			</div>
		);
	}
}