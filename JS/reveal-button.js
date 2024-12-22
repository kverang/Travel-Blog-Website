document.querySelectorAll('.revealButton').forEach(button => {
    button.addEventListener('click', function () {
        const hiddenContent = this.nextElementSibling; 
        if (hiddenContent.style.display === 'none') {
            hiddenContent.style.display = 'block';
            this.textContent = 'Click to Hide Info';
        } else {
            hiddenContent.style.display = 'none';
            this.textContent = 'Click to Reveal More Info';
        }
    });
});