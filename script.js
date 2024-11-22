const board = document.querySelector('.board');

for (let i = 0; i < 800; i++) {
    let box = document.createElement("div");
    box.className = "square";

    // Set the initial background color to grey
    box.style.backgroundColor = 'rgb(29, 29, 29)'; // Set initial color to match test expectations

    // Add an event listener for mouseover
    box.addEventListener('mouseover', function() {
        box.style.backgroundColor = 'red'; // Change the background color to red on hover
        
        // Set a timeout to revert the color back after 1 second
        setTimeout(() => {
            box.style.backgroundColor = 'rgb(29, 29, 29)'; // Change the background color back to grey
        }, 1000); // 1000 milliseconds = 1 second
    });

    board.appendChild(box);
}