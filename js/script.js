document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const formData = new FormData(this);
    const endpoint = this.action; // Get the form action URL

    // Show the loading spinner
    document.getElementById('loading').style.display = 'block';

    fetch(endpoint, {
        method: this.method,
        body: formData
    }).then(response => {
        // Hide the loading spinner
        document.getElementById('loading').style.display = 'none';

        if (response.ok) {
            alert('Image uploaded successfully!');
        } else {
            alert('Failed to upload image.');
        }
    }).catch(error => {
        // Hide the loading spinner
        document.getElementById('loading').style.display = 'none';

        console.error('Error:', error);
        alert('An error occurred.');
    });
});
