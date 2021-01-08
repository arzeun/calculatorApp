import React, { Component } from 'react';
import './Hell.css';
class Hello extends Component {
	constructor(props) {
		super(props);

		this.state = {
			x: Math.ceil(Math.random() * 10),
			y: Math.ceil(Math.random() * 10),
			result: '',
			inputValue: '',
		};
		this.getEquation = this.getEquation.bind(this);
	}

	getEquation() {
		this.setState({
			x: Math.ceil(Math.random() * 10),
			y: Math.ceil(Math.random() * 10),
			result: '',
			inputValue: '',
		});
	}

	hendleInput = (event) => {
		this.setState({
			inputValue: event.target.value,
		});
	};

	hendleSubmit = (e) => {
		if (this.state.x + this.state.y === parseInt(this.state.inputValue)) {
			this.setState({
				result: ' ✔',
			});
			setTimeout(() => {
				this.getEquation();
			}, 600);
		} else {
			this.setState({
				inputValue: '',
				result: ' ✘',
			});
		}
		e.preventDefault();
	};

	render() {
		const { x, y, result, inputValue } = this.state;

		return (
			<div>
				<form onSubmit={this.hendleSubmit}>
					<h1>
						{x} + {y} =
						<div className="wrapper">
							<input type="text" onChange={this.hendleInput} value={inputValue} />
							<span> {result} </span>
						</div>
					</h1>
					<button id="SubmitButton" type="submit">
						BLAH
					</button>
				</form>
			</div>
		);
	}
}

export default Hello;
