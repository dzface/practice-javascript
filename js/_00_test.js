document.write("HTML에 자바스크립트 사용");
console.log("브라우저 디버깅 창에서 결과 확인");
alert("경고메세지");

let value1 = 'someValue1';
let value2 = 'someValue2';
let value3 = 'newValue';

let object = {
  property1: value1,
  property2: value2,
  method1: function(){},
  method2: function(){},
};

object['property1'] = value3;

console.log(object['property1']);


