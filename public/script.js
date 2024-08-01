// Define a function to fetch data and display it
function fetchDataAndDisplay() { 
  // Add an event listener to the 'fetchData' button for click events
  document.getElementById('fetchData').addEventListener('click', async () => { 
    // Start a try block to handle potential errors
    try { 
      // Fetch data from the specified URL
      const response = await fetch('http://localhost:3000/api/sports'); 
      // Check if the response status is not OK
      if (!response.ok) { 
        // Throw an error if the response status is not OK
        throw new Error('Network response is not ok'); 
      }
      // Parse the response data as JSON
      const data = await response.json(); 
      // Display the JSON data in the 'output' element, formatted with 2 spaces
      document.getElementById('output').textContent = JSON.stringify(data, null, 2); 
      // Catch any errors that occurred during the fetch operation
    } catch (error) { 
      // Log the error to the console
      console.error('There has been a problem with your fetch operation:', error); 
      // Display an error message in the 'output' element
      document.getElementById('output').textContent = 'Error fetching data'; 
    }
  });
}

// Call the function to add the event listener
fetchDataAndDisplay(); 