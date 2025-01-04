// fetch는 네트워크 통신에 사용되며 Promise 객체를 반환하는 **비동기 함수
// then과 catch는 여러번 쓸수있는데 이전 결과가 다음 체인의 입력값이 됨

// const result = fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
//   .then((response) => {
//     console.log("읽을수가 없음", response);
//     //console.log("json형태로 변환 response.json()", response.json()); //json()는 ReadableStream 한번 호출하면 더 호출 못함
//     return response.json() // 해당자료는 json형태라 변환해야 읽을수있음 그리고 다음 then으로 결과값 넘겨줌
//   })
//   .then((response2) => {
//     console.log("response : ", { response2 })
//     return response2
//   })
//   .then((response3) => {
//     console.log("JSON.stringify() : ", JSON.stringify(response3)); // JSON 데이터를 JSON 문자열로 변환
//     return JSON.stringify(response3);
//   })
//   .then((response4) => {
//   console.log("JSON.parse() : ", JSON.parse(response4)) // JSON문자열을 객체로 변환
//   })
//   .catch((error) => console.log(error));

fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("data : ", data);
    return data;
  })
  .then((data) => {
    const filteringData = data.filter((obj) => obj.id > 2)
    console.log(filteringData);
    return filteringData;
  })
  .catch((err) => console.log(err));
