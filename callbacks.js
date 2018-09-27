//create an array of objects

const blogPost = [
  {
    title: "Post One",
    body: "This is post one"
  },
  {
    title: "Post Two",
    body: "This is post two"
  }
];

function getPost(){
  setTimeout(()=>{
    let output = '';
    blogPost.forEach((post, index)=>{
      output += `<li>${post.title}</li>`;
    })
    document.body.innerHTML = output;
  }, 1000)
}

function createPost (post){
  setTimeout(()=>{
    blogPost.push(post);
  }, 2000);
}
getPost();

createPost({title: 'Post Three', body: 'This is post three'});