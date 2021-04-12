const savePost = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#submit-title').value;
    const content = document.querySelector('.form-input').value;
  
    if (title && content) {
      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
    }
  };

  document
      .querySelector("#subpost")
      .addEventListener('submit', savePost)