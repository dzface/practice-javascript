// Array 객체 : 배열에서 사용할 수 있는 많은 속성과 메소드가 정의 되어 있음

// 리액트 사용시 데이터 변형이 없는 비파괴적 메서드 사용 필요

// 비파괴적인 메서드 : forEach()

const arr= [10, 20, 30, 40, 50, 60];
arr.forEach(e => {
  console.log(e + 1000);
})

arr.forEach((e) => console.log((e * e)));

const resp = arr.map(e=> e*e);
console.log(resp);

// toString(): 배열 안의 모든 문자를 쉼표를 이용해 모두 결합해서 하나의 문자열로 반환
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

// join(): 배열안의 모든 문자를 매개변수로 지정한 문자를 이용해 결합
console.log(fruits.join(" * "));

// pop() : 스택 자료 구조로 마지막 데이터를 제거하고 결과를 반환, 파괴적 메소드
console.log(fruits.pop());
console.log(fruits);

//push() : 스택 자료 구조를 새로운 요소를 추가
fruits.push("Kiwi");
console.log(fruits);

// shift() : 배열의 첫번째 요소를 제거하고 결과를 반환
fruits.shift();
console.log(fruits);

fruits[0] ="딸기";
console.log(fruits);

let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(3); // [Apple, Mango]
let citrus2 = fruits.slice(1,3); // [Orange, Lemon]

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();