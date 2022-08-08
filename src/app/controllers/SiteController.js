const course = require("../models/Course");
const {mutipleMongooseToObject} = require("../util/index");

class SiteController{

 index(req,res,next){
  course.find({})
        .then(course=>{
         //phải chuyển course thành 1 object contructor 
         res.render("home",{
            course: mutipleMongooseToObject(course)
         })
        })
        .catch(next)
 }
 search(req,res){
  res.render("search")
 }
}

module.exports =new SiteController