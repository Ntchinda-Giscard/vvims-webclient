document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const formData = new FormData(this);
    const endpoint = this.action; // Get the form action URL

    // Show the loading spinner and disable the submit button
    document.getElementById('loading').style.display = 'block';
    const submitButton = document.getElementById('submitButton');
    submitButton.disabled = true;

    fetch(endpoint, {
        method: this.method,
        body: formData
    }).then(response => {
        // Hide the loading spinner and enable the submit button
        document.getElementById('loading').style.display = 'none';
        submitButton.disabled = false;

        if (response.ok) {
            alert('Image uploaded successfully!');
        } else {
            alert('Failed to upload image.');
        }
    }).catch(error => {
        // Hide the loading spinner and enable the submit button
        document.getElementById('loading').style.display = 'none';
        submitButton.disabled = false;

        console.error('Error:', error);
        alert('An error occurred.');
    });
});
