import React from 'react';
import advancedRoll from '../../utils/advancedRoll';

class AdvancedRoll extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			numOfDie: "4",
			sidesOfDie: "6",
			rerollDie: "0",
			dieDrop: "1",
			dieDropCount: "1",
			bonus: "2",
			bonusCount: "0",
			numOfRolls: "7",
			rollDrop: "1",
			rollDropCount: "1",
			results: "Your results!"
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const value = event.target.value;
		const name = event.target.name;

		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		const numOfDie = this.state.numOfDie;
		const sidesOfDie = this.state.sidesOfDie;
		const rerollDie = this.state.rerollDie;
		const dieDrop = this.state.dieDrop;
		const dieDropCount = this.state.dieDropCount;
		const bonus = this.state.bonus;
		const bonusCount = this.state.bonusCount;
		const numOfRolls = this.state.numOfRolls;
		const rollDrop = this.state.rollDrop;
		const rollDropCount = this.state.rollDropCount;

		let results = advancedRoll(numOfDie, sidesOfDie, rerollDie, dieDrop, dieDropCount, bonus, bonusCount, numOfRolls, rollDrop, rollDropCount);

		this.setState({
			results: results
		});
	}

	render() { 
		return (
			<div className="container-fluid mt-5">
				<h2 className="row justify-content-center">Advanced</h2>

				<form id="advanced-form" noValidate className="was-validated form-inline row justify-content-center" onSubmit={this.handleSubmit}>

					<label className="h4 col-form-label">Roll:
						<input required id="numOfDie" name="numOfDie" type="number" min="1" max="100" className="form-control w-auto mr-md-1" data-toggle="tooltip" data-trigger="hover focus" data-placement="top" title="# of dice to roll" value={this.state.numOfDie} onChange={this.handleChange} onClick="this.select(); "/>
					</label>

					<label className="h4 col-form-label">d
						<input required id="sidesOfDie" name="sidesOfDie" type="number" min="2" max="100" className="form-control w-auto mr-md-1" data-toggle="tooltip" data-trigger="hover focus" data-placement="top" title="# of sides of die" value={this.state.sidesOfDie} onChange={this.handleChange} onClick="this.select();" />
					</label>

					<div className="w-100 mt-2 d-md-none"></div>

					<label className="h4 col-form-label">reroll:
						<select required id="rerollDie" name="rerollDie" className="form-control w-auto" data-toggle="tooltip" data-trigger="hover focus" data-placement="top" title="reroll all 1's or both 1's and 2's" value={this.state.rerollDie} onChange={this.handleChange}>
							<option value="0">none</option>
							<option value="1">1s</option>
							<option value="2">1s & 2s</option>
						</select>
					</label>

					<div className="w-100 mt-2 d-xl-none"></div>

					<label className="h4 col-form-label">drop:
						<select required id="dieDrop" name="dieDrop" className="form-control w-auto" data-toggle="tooltip" data-trigger="hover focus" data-placement="top" title="select if you wish to drop the highest or lowest rolls" value={this.state.dieDrop} onChange={this.handleChange}>
							<option value="0">none</option>
							<option value="1">low</option>
							<option value="2">high</option>
						</select>
					</label>

					<input required id="dieDropCount" name="dieDropCount" type="number" min="0" max="99" className="form-control w-auto mr-md-1" data-toggle="tooltip" data-trigger="hover focus" data-placement="top" title="number of rolls you wish to drop (if any)" value={this.state.dieDropCount} onChange={this.handleChange} />

					<div className="w-100 mt-2 d-md-none"></div>

					<label className="h4 col-form-label">add:
						<select required id="bonus" name="bonus" className="form-control w-auto" data-toggle="tooltip" data-trigger="hover focus" data-placement="top" title="to add or subtract bonus from each result" value={this.state.bonus} onChange={this.handleChange}>
							<option value="1">-</option>
							<option value="2">+</option>
						</select>
					</label>

					<input required id="bonusCount" name="bonusCount" type="number" min="0" max="100" className="form-control w-auto" data-toggle="tooltip" data-trigger="hover focus" data-placement="top" title="how much to wish to add or subtract" value={this.state.bonusCount} onChange={this.handleChange} />

					<div className="w-100 mt-2"></div>

					<label className="h4 col-form-label">Do that:
						<input required id="numOfRolls" name="numOfRolls" type="number" min="1" max="10" className="form-control w-auto mr-md-1" data-toggle="tooltip" data-trigger="hover focus" data-placement="top" title="how many total results you wish to roll" value={this.state.numOfRolls} onChange={this.handleChange} />
					</label>

					<pre className="h4 col-form-label"> times, </pre>

					<div className="w-100 mt-2 d-md-none"></div>

					<label className="h4 col-form-label">drop:
						<select required id="rollDrop" name="rollDrop" className="form-control w-auto" data-toggle="tooltip" data-trigger="hover focus" data-placement="top" title="select if you wish to drop the highest or lowest results" value={this.state.rollDrop} onChange={this.handleChange}>
							<option value="0">none</option>
							<option value="1">low</option>
							<option value="2">high</option>
						</select>
					</label>

					<input required id="rollDropCount" name="rollDropCount" type="number" min="0" max="9" className="form-control w-auto" data-toggle="tooltip" data-trigger="hover focus" data-placement="top" title="number of rolls you wish to drop (if any)" value={this.state.rollDropCount} onChange={this.handleChange} />

					<div className="w-100 mt-2"></div>

					<input type="submit" value="Roll!" onSubmit={this.handleSubmit}/>
				</form>

				<h2 id="advanced-results" className="advanced-results row justify-content-center mt-3">{this.state.results}</h2>
			</div>
		);
	}
}

export default AdvancedRoll;