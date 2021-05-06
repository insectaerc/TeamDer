const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    studentId: {
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    studentName: String,
    studentYear: String,
    description:String,
    specialtyExpertise:String,
    status: String,
    birthDate:String,
    major:String,
    studyingCourse:String
})

module.exports = mongoose.model('users', UserSchema)