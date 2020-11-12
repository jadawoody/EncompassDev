const mongoose = require("mongoose");

const {Schema, model} = require("mongoose");
// const Schema = mongoose.Schema

const blogSchema = new Schema(
    {
        title: {type: String},
        image: {type: String},
        datePublished: {type: String},
        summary: {type:String},
        author: {type: String},
        body: {type: String},
    }
)
const Blog = mongoose.model("Blog", blogSchema)

module.exports = model("Blog", blogSchema);
