import express from 'express'; // Importing the Express module
import path from 'path'; // Importing the Path module for handling file paths
import data from './data/sports_data.json' assert { type: 'json' }; // Importing the JSON data

const app = express(); // Creating an Express application
const port = 3000; // Defining the port number for the server

app.use(express.static('public')); // Serve static files from the 'public' directory
// app.use('/sports', express.static(path.join(__dirname, 'public')));
app.get('/api/sports', (req, res) => { // Define a route to handle GET requests to '/api/sports'
  res.json(data); // Send the JSON data as a response
});


app.listen(port, () => { // Start the server and listen on the specified port
  console.log(`Server is running at http://localhost:${port}`); // Log a message when the server starts
});
