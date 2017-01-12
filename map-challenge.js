var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var pythagorean = function(obj){
   ans = Math.sqrt(Math.pow(obj.x, 2) + Math.pow(obj.y, 2));
   console.log(obj.x);
   return ans;
}

var result = input.map(/* Your code here */
	pythagorean
);

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

// var kvArray = [{key:1, value:10},
//                {key:2, value:20},
//                {key:3, value: 30}];

// var reformattedArray = kvArray.map(function(obj){
//    var rObj = {};
//    console.log(obj.key);
//    console.log(obj.value);
//    rObj[obj.key] = obj.value;
// console.log(rObj);
//    return rObj;
// });
// reformattedArray is now [{1:10}, {2:20}, {3:30}],

// kvArray is still:
// [{key:1, value:10},
//  {key:2, value:20},
//  {key:3, value: 30}]