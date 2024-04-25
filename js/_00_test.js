// 반복문 방법: 기본, for-in, for-of


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

// 방법3. for-of
let actors = ["송강호", "이미나", "하정우", "이지은", "손석구"];
for (const actor of actors) {
  console.log(actor); 
}

let lang = 'Javascript';
for (const e of lang) {
  console.log(e);
}