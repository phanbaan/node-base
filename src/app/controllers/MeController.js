const Courses = require("../models/Course")
const {mutipleMongooseToObject} = require("../util/index") 
class MeController {
 storedCourses(req,res,next){
  Courses.find({})
  .then(c=>{
   res.render("me/stored-courses",{courses:mutipleMongooseToObject(c) })
  })
  .catch(next)
 }
}

module.exports = new MeController