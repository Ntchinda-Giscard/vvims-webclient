document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const formData = new FormData(this);

    fetch(this.action, {
        method: this.method,
        body: formData
    }).then(response => {
        if (response.ok) {
            alert('Image uploaded successfully!');
        } else {
            alert('Failed to upload image.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('An error occurred.');
    });
});
