fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => response.json())
.then(data => {
  const images = data.slice(0, 12);
  const imagesElement = document.querySelector('.images');
  imagesElement.innerHTML = images.map(photo => `
    <div>
      <img src="${photo.url}" alt="${photo.title}">
    </div>
  `).join('');
})
.catch(error => console.error(error));