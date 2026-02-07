function fetchPost(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
}

function fetchComments(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => response.json())
}


async function getPostAndComments(postId) {
    try {
        const post = await fetchPost(postId);
        const comments = await fetchComments(postId);

        console.log(`Post:`, post);
        console.log(`Comments:`, comments);
    } catch (error) {
        console.log(`Error:`, error.message)
    }

}

getPostAndComments(10);

