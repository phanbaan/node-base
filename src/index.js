const express = require("express");
const path = require("path");
const morgan = require("morgan");
const {engine} = require("express-handlebars")
const route = require("./routes")
const db = require("./config/db/index")
var methodOverride = require('method-override')
const app = express()
const port = 3000
// http logger
// app.use(morgan('combined'))
// config static file

app.use(express.static(path.join(__dirname,'public')))

//connect db

db.connect();
// template engine
app.engine("hbs",engine({
  extname:'.hbs',
  helpers: {
    sum(a,b) { return a+b; },
  }
}));

// from data 

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json())
app.use(methodOverride('_method'))
route(app)

app.set("view engine", "hbs");
// "resources","views" ~ resources/views
app.set("views", path.join(__dirname ,"resources","views"));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})