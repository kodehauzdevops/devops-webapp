function fetchData() {
fetch('http://localhost:8000/monitoring')
    .then(response => response.json())
    .then(data => {
    // Display or process the returned data as needed
    console.log(data);
    document.getElementById(elementId).innerHTML = data
    })
    .catch(error => {
    console.error('Error fetching data:', error);
    });
}
  
// Call fetchData initially
const elementId = "logdiv";
fetchData();

// Set up an interval to call fetchData every 2000 milliseconds (2 seconds)
setInterval(fetchData, 2000);
