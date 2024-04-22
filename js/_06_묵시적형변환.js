
//묵시적 형변환 : ㄴ숫자데이터와 문자열 데이터를 연결 연결자로 처리하면 문자을로 형 반환
//자바에서는 명시적 형변환을 하지 않으면 에러 발생함
let num1 = 10 + "10";
console.log(num1);

// 명시적 형변환 : 
let num2 = 10;
let num3 = "10";
console.log(num2 + Number(num3));