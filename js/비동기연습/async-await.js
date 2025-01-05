function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const user = userId === 1 ? { id: userId, name: "sssss" } : null;
        //callback(user);
        resolve(user);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
}
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

async function runAsyncAwait() {
  try {
    const user = await getUser(1);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    console.log("user", user);
    console.log("posts", posts);
    console.log("comments", comments);
    user ? console.log("user", user) : console.log("유저가 없어요!");
  } catch (error) {
    console.log(error);
  }
}
runAsyncAwait();
