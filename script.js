const board = document.querySelector('.board');

for (let i = 0; i < 800; i++) {
    let box = document.createElement("div");
    box.className = "square";

    // Add an event listener for mouseover
    box.addEventListener('mouseover', function() {
        box.style.backgroundColor = 'red';
        
        // Set a timeout to revert the color back after 1 second
        setTimeout(() => {
            box.style.backgroundColor = 'grey';
        }, 1000);
    });

    board.appendChild(box);
}