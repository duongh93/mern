import mongoose from 'mongoose';
//commit 7
//commit 8
//commit branch3 1
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        default: 'Anonymous'
    },
    attachment: String,
    likeCount: {
        type: Number,
        default: 0
    },
}, {timestamps : true}); // Default created at deleted at

export const PostModel = mongoose.model('Post', schema);