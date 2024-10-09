document.getElementById('fetchData').addEventListener('click', fetchData);

function fetchData() {
    const dataDiv = document.getElementById('data');
    dataDiv.innerHTML = 'Fetching data...';

    // Fetch data from the Dog API
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Process the response as JSON
        })
        .then(data => {
            // Display the fetched data
            dataDiv.innerHTML = `<img src="${data.message}" alt="Random Dog Image">`;
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            dataDiv.innerHTML = `Error fetching data: ${error.message}`;
        });
}
