const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number);
}); // 출력: 1 2 3 4 5

const numbers2 = [10,25,30,45];
let foundNumber = null;
numbers2.forEach(function(number){
  if (number > 30){
    foundNumber = number;
  }
})
console.log(foundNumber);