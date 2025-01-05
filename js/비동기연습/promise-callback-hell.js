function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const user = { id: userId, name: "sssss" };
        //callback(user);
        resolve(user);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
};
function getPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const posts = [
          { id: 1, title: "POST 1" },
          { id: 1, title: "POST 2" },
          { id: 1, title: "POST 3" },
        ];
        resolve(posts);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
}
function getComments(postId, callback) {
  return new Promise((resolve, resject) => {
    try {
      setTimeout(() => {
        const comments = [
          { id: 1, text: "Comment 1" },
          { id: 2, text: "Comment 2" },
          { id: 3, text: "Comment 3" },
        ];
        resolve(comments);
      }, 1000);
    } catch (error) {
      reject(error);
    }
  })
}
// getUser(11, (user) => {
//   console.log("user", user);
//   getPosts(user.id, (posts) => {
//     console.log("posts", posts);
//     getComments(posts[1].id, (comments) => {
//       console.log("comments", comments);
//     });
//   });
// });
getUser(1)
  .then((user) => {
    console.log("user", user);
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log("posts", posts);
    return getComments(posts[0].id);
  }).then((comments) => {
    console.log("comments", comments);
  }).catch(error => console.log("error", error))
  .finally(()=>console.log("####Promise - chaining - end"));
