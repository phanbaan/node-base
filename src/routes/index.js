const routerNews = require("./news");
const routerSite = require("./site");
const routerCourse = require('./courses');
const meCourse = require('./me');

function route(app){
 
    app.use('/news',  routerNews);
    app.use("/courses",routerCourse);
    app.use("/me",meCourse);
    app.use("/", routerSite);
}
module.exports = route