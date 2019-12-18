import React from 'react';
import RollButton from './RollButton';



class BasicRoll extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			result: <h3 className="col fas fa-dice-d20 fa-2x mt-1"></h3>
		}

		this.changeResults = this.changeResults.bind(this);
		this.resetResults = this.resetResults.bind(this);
	}

	changeResults(newResult) {
		this.setState({
			result: <h3 className="col mt-1">{newResult}</h3>
		})
	}

	resetResults() {
		this.setState({
			result: <h3 className="col fas fa-dice-d20 fa-2x mt-1"></h3>
		})
	}

	render() { 
		return (			
			<div>
				<RollButton changeResults={this.changeResults} resetResults={this.resetResults} sidesOfDie={this.props.sidesOfDie} color={this.props.color} />
				<div className={'border rounded ' + this.props.borderColor}>
					{this.state.result}
				</div>
			</div>			
		);
	}
};

export default BasicRoll;