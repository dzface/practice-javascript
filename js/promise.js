const promiseObject = new Promise((resolve, reject) => {
  let number = 0;
  for (let i = 0; i < 3; i++){
    const userResponse = prompt(`"나는 빡빡이다"를 세번 외치세요 현재 외친횟수:${number}`);
    if (userResponse === "나는 빡빡이다") {
      number++
    };
  };
  if (number === 3) {
    resolve("성공")
  } else {
    reject("실패");
  }
});
promiseObject
  .then((result)=>console.log(result))
  .catch((error)=>console.log(error))
  .finally(()=>console.log("성공하든 실패하든 실행되는 finally 함수: 끝"));

