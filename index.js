/**
 * Express application that serves the HTML content
 *
 */
const express = require('express');

const app = express();
const PORT = 3000;


// Serves the static files
app.use(express.static('public'));

app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

// App listener
app.listen(PORT, () => {
	console.log('App started on port: ', PORT);
});