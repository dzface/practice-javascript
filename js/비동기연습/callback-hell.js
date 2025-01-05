function getUser(userId, callback) {
  setTimeout(() => {
    const user = { id: userId, name: "sssss" };
    callback(user);
  }, 1000)
}
function getPosts(userId, callback) {
  setTimeout(() => {
    const posts =[
      { id: 1, title: "POST 1" },
      { id: 1, title: "POST 2" },
      { id: 1, title: "POST 3" },
    ]
    callback(posts)
  }, 1000);
}
function getComments(postId, callback) {
  setTimeout(() => {
    const comments = [
      { id: 1, text: "Comment 1" },
      { id: 2, text: "Comment 2" },
      { id: 3, text: "Comment 3" },
    ]
    callback(comments)
  }, 1000);
}
getUser(11, (user) => {
  console.log("user", user);
  getPosts(user.id, (posts) => {
    console.log("posts", posts);
    getComments(posts[1].id, (comments) => {
      console.log("comments", comments)
    });
  });
})