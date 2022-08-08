
const Course = require("../models/Course");

const {mongooseToObject} = require("../util/index")

class CoursesController{
 show(req,res,next){
  Course.findOne({slug: req.params.slug})
   .then(c=>res.render("courses/show",{course: mongooseToObject(c)}))
   .catch(next)
 }
 create(req,res,next){
  res.render("courses/create")
 }

 store(req,res,next){
  const formData = req.body;
  formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`
  formData.slug = req.body.name
  const course = new Course(formData);
  course.save().then(()=>res.redirect("/"))
  res.send("success")
 }
 edit(req,res,next){
    Course.findById(req.params.id)
    .then(c=>res.render("courses/edit", {course:mongooseToObject(c)}))
    .catch(next)
 }
 update(req,res,next){
    Course.updateOne({_id:req.params.id},req.body)
    .then(c=>res.redirect('/me/stored/courses'))
    .catch(next)
 }
 delete(req,res,next){
   Course.deleteOne({_id:req.params.id})
   .then(()=>
      res.redirect("back")
   )
   .catch(next)
 }
}

module.exports = new CoursesController