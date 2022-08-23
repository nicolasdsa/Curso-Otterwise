const axios = require('axios');

const get = async () => {
  try{
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/2');
  console.log(response.data);
  return response
  }catch(error){
    console.log(error);
  }
}

get();

const post = async () => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'Teste title',
    body: 'Teste body'
  })
  console.log('Post ' + response.statusText);
}

post();

const put = async () => {
  const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    title: 'Teste title editado',
    body: 'Teste body editado'
  })
  console.log('Post editado ' + response.statusText);
}

put();

const deletePost = async () => {
  const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/3')
  console.log('Post Deletado ' + response.statusText);
}

deletePost();