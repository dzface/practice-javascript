// 시간을 입력받아 45분 일찍 설정하는 문제
let hour = prompt("시간 입력 : ","");
hour= Number(hour); // 프롬프트로 입력 받으면 String 타입
let minute = prompt("분 입력:","")
minute = Number(minute);
document(hour);
let calc = (hour *60) + (min);
if (calc <45) calc = (24*60)+min;
calc -=45;
document.write("<h2>" + `${parseInt(calc/60)}시 ${calc % 60}분` + "</h2>");