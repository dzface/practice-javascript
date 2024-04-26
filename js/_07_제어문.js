// 조건문 : if, switch, 3항 연산자가 있으며 자바와 동일
// 반복문 : while, do~while, for, for in, for of 등이 있음(자바와 유사)

// 반복문 방법: 기본, for-in, for-of, for-each


// 방법1. 기본
let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
for(let i = 0; i < brands.length; i++){
  console.log(brands[i]);
}

// 방법2. for-in: key-value가 있는 객체에 사용
let person = {fname:"Jone", lname:"Doe", age:25};
for (const key in person) {
  console.log(person[key]);
}

// 방법3. for-of: 자바의 향상된 for문과 유사
let actors = ["송강호", "이미나", "하정우", "이지은", "손석구"];
for (const actor of actors) {
  console.log(actor); 
}

let lang = 'Javascript';
for (const e of lang) {
  console.log(e);
}

// 방법4. for-each: 배열에서만 사용 가능한 순회문
// 리턴값이 없으므로 배열의 각 요소를 순회하며 해당요소에 대해 어떤 동작을 수행하고자 할 때 적합
const numbers = [1, 2, 3, 4, 5];

const result = numbers.forEach(function(number) {
    return number * 2; // 콜백 함수에서 어떤 값을 반환해도 forEach()의 반환 값은 여전히 undefined
});

console.log(result); // 출력: undefined