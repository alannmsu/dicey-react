export default function basicRoll(number) {
	let result = Math.floor(Math.random() * Math.floor(number)+1);
	console.log(`Rollling d${number}... result is: ${result}!`);
	return result;
};
