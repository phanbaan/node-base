const Courses = require("../models/Course");

class NewsController  {
 index(req,res){
   res.render('news');
 }
 details(req,res){
  Courses.findOne({slug:req.param.slug})
  .then(course=>res.json(course))
 }
}

module.exports = new NewsController