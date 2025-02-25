fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error happened"))




    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: "Murad",
          email: "murad@example.com"
        })
      })
        .then(response => response.json())
        .then(data => console.log('Yeni istifadəçi:', data))
        .catch(error => console.error('Xəta:', error));
      