const express = require('express');

const app = express();
const PORT = 3000;


// Serves the static files
app.use(express.static('public'));


// App listener
app.listen(PORT, () => {
	console.log('App started on port: ', PORT);
});