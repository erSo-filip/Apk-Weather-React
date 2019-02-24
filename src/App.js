import React, { Component } from "react";
import "./App.css";
import Form from "./componenty/Main/Form";
import Result from "./componenty/Main/Result";
import Days from "./componenty/Extra/Days";
import Loading from "./componenty/Extra/Loading";
import Connect from "./Connect";
import "./css/fontello.css";
// import { BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
	state = {
		weatherNow: {},
		weather5: {},
		loading: false,
		value: "Pionki",
		city:{},
	};
	componentDidMount() {
		this.load5Days();
	}

	load5Days = () => {
		this.setState({ loading: true });
		const API = `https://api.openweathermap.org/data/2.5/forecast?q=${
			this.state.value
		}&appid=216a9e8c3d7e5f5f8bfa2d08aed0f892&units=metric`;
		fetch(API)
			.then(response => response.json())
			.then(data => {
				this.setState({ loading: false, weather5: data, city:this.state.value });
			})
			.catch(err => {
				console.log(err);
			});
	};
	InputChange = a => {
		this.setState({
			value: a.target.value
		});
	};

	Search = a => {
		a.preventDefault();
		this.load5Days();
	};

	


	render() {
		const { loading, value, weather5, city } = this.state;

		return (
			<div className="App">
				<div className="Nav">
					<button className="lupa">
						<div className="icone lupa"/>
					</button>
					<Form text={value} change={this.InputChange} submit={this.Search} />
				</div>
				
				{loading ? (
					<Loading />
				) : (
					<div>
					<div className="null"><Connect weather={weather5}/></div>
						<Result weather={weather5} c={city} />
						<div className="days">
							<Days weather={weather5} />
						</div>
					</div>		
				)}
				
			</div>
		)
		;

	}
}

export default App;
