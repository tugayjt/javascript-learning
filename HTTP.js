fetch('https://api.github.com/users/iliakan')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error: ", error));   


fetch('https://api.github.com/users/iliakan', {
    method: 'delete'
    })
    .then(() => console.log('Post  deleted.')); 
    
    

fetch('https://api.github.com/users/iliakan', {
    method: 'POST',
    headers: {  'Content-Type': 'application/json' },
    body: JSON.stringify({
    name: 'John',               
    age: 30,
    isAdmin: true
    })
    })
    .then(() => console.log('Post created.'));

fetch('https://api.github.com/users/iliakan', {
    method: 'PUT',
    headers: {  'Content-Type': 'application/json' },
    body: JSON.stringify({
    name: 'John',               
    age: 30,
    isAdmin: true
    })
    })
    .then(() => console.log('Post updated.'));  