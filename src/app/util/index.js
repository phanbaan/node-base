

module.exports = {
 mutipleMongooseToObject: function(mongoose){
  return mongoose.map(o=>o.toObject());
 },
 mongooseToObject: function(mongoose){
  return mongoose ? mongoose.toObject():mongoose
 }
}