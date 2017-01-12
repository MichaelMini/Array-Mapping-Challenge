var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var pythagorean = function(obj){
   ans = Math.sqrt(Math.pow(obj.x, 2) + Math.pow(obj.y, 2));
   return ans;
}

var result = input.map(/* Your code here */
	pythagorean
);

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);