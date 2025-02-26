const user = {
name: 'John',
age: 30,
isAdmin: true,
};

const jsonStr = JSON.stringify(user);

const userObj = JSON.parse(jsonStr);

fetch('https://api.github.com/users/iliakan')
.then(response => response.json())
.then(data => console.log(data));