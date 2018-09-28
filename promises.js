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
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      blogPost.push(post);

      const error = false;

      if(!error){
        resolve();
      }
      else {
        reject('ERROR: Something went wrong');
      }
    }, 2000);
  });
}

createPost({title: 'Post Three', body: 'This is post three'}).then(getPost);