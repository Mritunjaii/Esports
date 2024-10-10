const express = require('express')
const path=require('path')

const exphbs = require('express-handlebars'); // Require express-handlebars

const app = express()
const port = 3000

// Configure Handlebars as the view engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'static')))
app.use('/',require(path.join(__dirname,'/routes/esports.js')))


app.listen(port, () => {
  console.log(`Esports app listening on port ${port} at http://localhost:3000/`)
})