import mongoose, { Schema} from 'mongoose'

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
    },
    desc: {
        type: String,
    }
    ,
    author: {
        type: String
    }
}, {timestamps: true})

export default  mongoose.model("Posts", postSchema)