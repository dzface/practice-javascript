// 햄버거 3개 가격 음료 2개 가격을 입력 받고 가장싼 햄버거와 음료수 가격에 50원을 할인한 세트메뉴 가격 출력

let price =[];
let inputPrice;
let setHam;
let setDrink;
inputPrice = prompt("앙기모띠");
price[0]=inputPrice;
inputPrice = prompt("앙기모띠");
price[1]=inputPrice;
inputPrice = prompt("앙기모띠");
price[2]=inputPrice;
inputPrice = prompt("앙기모띠");
price[3]=inputPrice;
inputPrice = prompt("앙기모띠");
price[4]=inputPrice;


if (price[0] < price[1]) {
  if (price[0] < price[2]) {
    setHam = price[0];
  } else if (price[1] < price[2] ) {
    setHam = price[1];
  } else {
    setHam = price[2];
  }
}

if (price[3] > price[4]) {
  setDrink = price[4]
} else {
  setDrink = price[3]
}

setTotal = Number(setHam) + Number(setDrink) -50;

document.write("세트메뉴 가격은 " + setTotal + "원 입니다. ");