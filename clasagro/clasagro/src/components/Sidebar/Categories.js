import React from 'react';


export class Categories extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
				<div className="col-md-3">
					<div className="card card-default" style={{marginTop:20}}>
						<div className="card-header">CATEGORIAS</div>
						  <ul className="list-group list-group-flush">
						    <li className="list-group-item list-group-item-action">Tractores</li>
						    <li className="list-group-item list-group-item-action">Pesticidas</li>
						    <li className="list-group-item list-group-item-action">Productos Usados</li>
						  </ul>
					</div>
				</div>
			);
	}
}