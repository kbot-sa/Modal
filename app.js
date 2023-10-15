/*Variables*/

let modalContainer = document.querySelector('#modal-container');
let openButton = document.querySelector('#open-btn');
let closeButton = document.querySelector('#close-btn');

/*Event Listeners*/

openButton.addEventListener('click', function() {
        modalContainer.style.display = 'block';
});

closeButton.addEventListener('click', function() {
    modalContainer.style.display = 'none'
})

window.addEventListener('click', function(e) { 
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
}) //This is used to click away the modalContainer if the user clicks anywhere besides the modal container
