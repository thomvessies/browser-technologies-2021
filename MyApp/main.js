const express = require('express');
const app = express();
const port = 4000;

// Using static files from static directory
app.use(express.static('public'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/css', express.static(__dirname + 'public/css'));

// Setting views (EJS)
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  
});

app.listen(port, () => console.log(`App is running on port ${port}`));