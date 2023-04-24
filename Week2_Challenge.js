// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

const nums = [Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1)];

function minMax() {
  let max = Math.max(... nums);
  let min = Math.min(... nums);
  return 'The lowest number is ' + min + ' & the highest number is ' + max + '.';
  
}
console.log(nums);
console.log(minMax(nums));
