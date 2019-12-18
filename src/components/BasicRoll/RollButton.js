import React from 'react';
import basicRoll from '../../utils/basicRoll';

class RollButton extends React.Component {

	constructor(props) {
		super(props);
		this.handleMouseUp = this.handleMouseUp.bind(this);
	}

	handleMouseUp() {
		const result = basicRoll(this.props.sidesOfDie);
		this.props.changeResults(result);
	} 

	render() { 
		return (
			<button onMouseUp={this.handleMouseUp} onMouseDown={this.props.resetResults} type="button" className={'row btn w-100 font-weight-bold ' + this.props.color}>
				d{this.props.sidesOfDie}
			</button>
		);
	}
}

export default RollButton;