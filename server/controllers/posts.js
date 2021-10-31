import {PostModel} from "../models/PostModel.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        console.log('post', posts);
        res.status(200).json(posts);
    } catch (err) {
        err.status(500).json(err);
    }
};

export const getPosts1 = async (req, res) => {
    try {
        const posts = await PostModel.find();
        console.log('post', posts);
        res.status(200).json(posts);
    } catch (err) {
        err.status(500).json(err);
    }
};

export const getPosts2 = async (req, res) => {
    try {
        const posts = await PostModel.find();
        console.log('post', posts);
        res.status(200).json(posts);
    } catch (err) {
        err.status(500).json(err);
    }
};

export const getPosts3 = async (req, res) => {
    try {
        const posts = await PostModel.find();
        console.log('post', posts);
        res.status(200).json(posts);
    } catch (err) {
        err.status(500).json(err);
    }
};

export const createPost = async (req, res) => {
    try {
        const newPost = req.body;
        const post = new PostModel(newPost);
        await post.save();

        res.status(200).json(post);
    } catch (err) {
        err.status(500).json(err);
    }
};

export const updatePost = async (req, res) => {
    try {
        const updatePost = req.body;
        const post = await PostModel.findOneAndUpdate({_id: updatePost._id}, updatePost, {new: true});
        res.status(200).json(post);
    } catch (err) {
        err.status(500).json(err);
    }
};