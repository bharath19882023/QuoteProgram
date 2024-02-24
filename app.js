function fetchQuote() {
    // Adjust the URL to match your service's endpoint
    fetch('http://192.168.49.2:31038/api/quote')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').innerText = data.quote;
        })
        .catch(error => console.error('Error fetching quote:', error));
}
