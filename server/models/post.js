const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    postTitle: {
        type: String,
        required: true
    },
    postStatus: String,
    postType:String,
    postAvailableSlot: String,
    
    s1Id: String,
    s1Name:String,
    s2Id:String,
    s2Name:String,
    s3Id: String,
    s3Name: String,

    courseId: String,
    courseName: String,
    semester: String,
    asgName: String,
    asgDescription: String,
    asgPercentage: String,
    techUsed: String,
    scope: String,
    description: String,
    lookingFor:  String,
    application: String,

    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = mongoose.model('posts', PostSchema)