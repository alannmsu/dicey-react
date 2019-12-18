import valOf from './valOf.js';

//Roll a single die of size "sidesOfDie"
const rollOne = () => {
	let sidesOfDie = valOf('sides-of-die');
	return Math.floor(Math.random() * Math.floor(sidesOfDie)+1);
};

export default rollOne;