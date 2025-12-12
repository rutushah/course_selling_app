//mongodb password
// E220NjXXzwl5oQL2 


const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://rutushah105_db_user:E220NjXXzwl5oQL2@cluster0.wbac56t.mongodb.net/cousera-app")

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    email: {type: String, unique: true},
    password : String,
    firstName : String,
    lastName: String
});

const adminSchema = new Schema({
    email: {type: String, unique: true},
    password : String,
    firstName : String,
    lastName: String
});

const courseSchema = new Schema({
    courseTitle : String,
    courseDescription : String,
    price : Number,
    imageURL : String,
    creatorId : ObjectId
});

const purchaseSchema = new Schema({
    userId : ObjectId,
    creatorId : ObjectId
});

const userModel = mongoose.model('user',userSchema);
const adminModel = mongoose.model('admin',adminSchema);
const courseModel = mongoose.model('course',courseSchema);
const purchaseModel = mongoose.model('purchase',purchaseSchema);

module.exports = {
    userModel: userModel,
    adminModel: adminModel,
    courseModel: courseModel,
    purchaseModel: purchaseModel
}