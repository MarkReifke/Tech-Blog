const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const userName = document.querySelector('#user').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (userName && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ userName, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        console.log(await response.json());
        alert('Failed log in');
      }
    }
  };

  document
    .querySelector('#login')
    .addEventListener('click', signupFormHandler);
  const signupFormHandler = async(event) => {
    event.preventDefault();
  
    const userName = document.querySelector('#user').value.trim();
    const password = document.querySelector('#password').value.trim();
    if (userName && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ userName, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        console.log(await response.json());
        alert('Failed log in');
      }
    }
 };