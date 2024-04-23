// 콜백 함수란? 함수의 인자로 다른 함수를 전달하여 그함수가 실행될 때 호출되는 함수
// 콜백함수는 주로 비동기적인 작업을 처리할 때 많이 사용
// 주로 서버로 부터 데이터를 가져오는 작업이 완료 될 때 콜백 함수를 호출

function cry(){
  console.log("cry");
}
function sing(){
  console.log("sing");
}
function dance(){
  console.log("dance");
}

//// 일반적인 함수 호출방법
// function checkMood(mood){
//   if(mood == "good")sing();
//   else if("not bad")dance();
//   else cry();
// }
// checkMood("good");

// 콜백 함수
function checkMoodCallBack(mood, goodCall, badCall, notBadCall){
  if(mood == "good")goodCall();
  else if("not bad")notBadCall();
  else badCall();
}
checkMoodCallBack("not bad",sing, cry, dance)
