function fetchPost() {
    return fetch(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(response => response.json())
        .then(post => post);
}
fetchPost()
    .then(post => console.log(post));


function fetchComments() {
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=1`)
        .then(response => response.json())
}
fetchComments()
    .then(comments => console.log(comments));