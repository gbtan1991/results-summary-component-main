fetch("./data.json")
.then(response => response.json())
.then(data =>{
})


.catch(error =>{
    console.log(error);
});





    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        // Get the container element to append the data
        const container = document.getElementById('summary');

        // Iterate over the data and create HTML elements
        data.forEach(item => {
          
          // Create an image element for the icon
          const iconImg = document.getElementById('icon');
          iconImg.src = item.icon;

          // Create a span element for the category
          const categorySpan = document.createElement('span');
          categorySpan.textContent = item.category;

          // Create a span element for the score
          const scoreSpan = document.createElement('span');
          scoreSpan.textContent = 'Score: ' + item.score;

          // Append the icon, category, and score elements to the item div
          itemDiv.appendChild(iconImg);
          itemDiv.appendChild(categorySpan);
          itemDiv.appendChild(scoreSpan);

          // Append the item div to the container
          container.appendChild(itemDiv);
        });
      })
      .catch(error => {
        console.log('Error:', error);
      });

