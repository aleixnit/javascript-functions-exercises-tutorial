let dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
let euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ↓ ******///

let dollars = 137;
let euros = dollarToEuro(dollars);
let yens = euroToYen(euros);

console.log(yens); // output: 17139.1415