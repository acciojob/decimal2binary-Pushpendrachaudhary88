// function threeSum(arr, target) {
// write your code here
	function decimalToBinary(decimal) {
  // Check if the input is 0
  if (decimal === 0) {
    return '0';
  }

  let binary = '';

  while (decimal > 0) {
    // Append the least significant bit (remainder of division by 2)
    binary = (decimal % 2) + binary;

    // Update the decimal by dividing it by 2 (integer division)
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}
  


module.exports = threeSum;
