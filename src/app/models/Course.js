const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug)
const Course = new Schema({
 name: {type:String, minLength:1,default:"khóa hoc"},
 desc: String,
 image: String,
 slug: {type:String, slug:"name",  unique: true },
 videoId: {type:String},
 level:{type:String},
 // createAt:{type:Date, default: Date.now},
 // updateAt: {type:Date,default: Date.now}
},{
 timestamps: true
}
)

module.exports = mongoose.model("Course",Course)