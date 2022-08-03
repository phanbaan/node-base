const express = require("express");
const path = require("path");
const morgan = require("morgan");
const {engine} = require("express-handlebars")
const app = express()
const port = 3000
// http logger
app.use(morgan('combined'))
// config static file

app.use(express.static(path.join(__dirname,'public')))
// template engine
app.engine("hbs",engine({
  extname:'.hbs'
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname ,"resources/views"));

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/news', (req, res) => {
  res.render('news');
});
app.get('/', (req, res) => {
  res.send(`<h1>Hello World!</h1>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})