import React, { Component } from 'react';


export class NavBar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        	<a className="navbar-brand" href="#">ClasiAgro</a>
        	<div className="collapse navbar-collapse">
        		<ul className="navbar-nav">

        			<form className="form-inline my-2 my-lg-0">
        				<input className="form-control mr-sm-2" type="text" placeholder="Buscar"/>
        				<button className="btn btn-default my-2 my-sm-0 mr-sm-4" type="submit">Buscar</button>
        			</form>

        			<li className="nav-item">
        				<a className="nav-link" href="#">Inicio</a>
        			</li>

        			<li className="navbar-nav">
        				<a className="nav-link" href="#">Empresas</a>
        			</li>

        			<li className="navbar-nav navbar-toggler-right">
        				<a className="nav-link pull-right" href="#">Registrarse</a>
        			</li>
        		</ul>
        	</div>
        </nav>
      </div>
    );
  }
}

