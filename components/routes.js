import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';


const Home = () => {
	return (
		<div>
			<h2> <Link to="/discover"> To Discover </Link>  </h2>
			<h2> <Link to="/dashboard"> To Dashboard </Link>  </h2>
		</div>
	);
}

const Discover = () => {

	return (
		<div>
			<h2> Discover </h2>
		</div>
	);
};

const Dashboard = () => {

	return (
		<div>
			<h2> Dashboard </h2>
		</div>
	);
};


export default () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/discover" component={Discover} />
			<Route path="/dashboard" component={Dashboard} />
		</Switch> 
	);
}
