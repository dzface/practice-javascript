// Promise 객체는 크게 3개 상태 pending(대기), fullfilled(이행), reject(거부)
// Promise.resolve()는 이행 상태를 반환
// const myPromise1 = Promise.resolve(100);
// console.log(myPromise1);
// myPromise1
//   .then((data) => data / 2)
//   .then(data => data / 10)
//   .then(console.log)

// const myPromise2 = Promise.reject("error message 입니다");
// myPromise2
//   .then(console.log("합격"))
//   .catch(console.error);
// function fetchData() {
//   return fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.length === 5) {
//         return Promise.reject("데이터가 없습니다."); // catch로 전달
//       }
//       return data;
//     });
// }
// fetchData()
//   .then(console.log)
//   .catch(console.error);


// Promise.all 설명
// all은 결과를 배열로 반환하고 하나라도 실패할 경우 catch 코드 이행
// 하나라도 실패하면 안되는 로직에 사용 해야 할듯
// const myPromise3 = Promise.reject(1000);
// const myPromise4 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(3000)
//   }, 3000);
// });
// const myPromise5 = fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");

// Promise.all([myPromise3, myPromise4, myPromise5])
//   .then(console.log)
//   .catch(console.log("에러 발생"));

// allSettled 설명
// 실패가 있더라도 상태와 함께 모든 결과를 반환함
// Promise.allSettled([myPromise3, myPromise4, myPromise5])
//   .then(console.log)
//   .catch(console.error);


// any 설명
// 배열로 입력된 Promise 객체들 중 가장먼저 성공한 객체 결과 반환
// 실패한 객체가 있더라도 가장먼저 성공한 객체 반환 모두 실패할경우 catch 이행

const myPromise6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1000);
  }, 1000);
})
const myPromise7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(500);
  }, 500);
});
const myPromise8 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(100);
  }, 100);
});
// Promise.any([myPromise6, myPromise7, myPromise8])
//   .then(console.log)
//   .catch(console.error);

// race 설명
// 가장 빨리 응답한 객체를 반환함 만약 가장빨리 응답한 객체가 실패해도 반환함
Promise.race([myPromise6, myPromise7, myPromise8])
  .then(console.log)
  .catch(console.error);