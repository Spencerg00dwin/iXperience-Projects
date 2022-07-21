// const url = 'https://dog.ceo/api/breeds/list/all'
// const url = 'https://jsonplaceholder.typicode.com/posts'
// const url = 'http://api.citybik.es/v2/networks'
// const url = 'http://ergast.com/api/f1'



// const cors = require('cors');

// app.use(cors())

const url = 'http://api.citybik.es/v2/networks';

async function fetchPosts() {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Credentials': true

    },
    'mode': 'no-cors'
  });

  return response.json();
}

fetchPosts().then((posts) => {
    console.log(posts)
}).catch((err) =>{
    console.log(err)
})

// function printPosts(posts) {
//   let html = '<ul>';
//   for (let post of posts) {
//     html += '<li>' + post + '</li>';
//   }
//   html += '</ul>';
//   document.body.innerHTML = html;
// }

// async function fetchAndPrintPosts() {
//   try {
//     const posts = await fetchPosts();

//     printPosts(posts);
//   } catch (err) {
//     console.log(err);
//   }
// }

// fetchAndPrintPosts()