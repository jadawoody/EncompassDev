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
        body1: {type: String},
        body2: {type: String},
        body3: {type: String},
        body4: {type: String},
        body5: {type: String},
        body6: {type: String},
        body7: {type: String},
    }
)
const Blog = mongoose.model("Blog", blogSchema)

module.exports = model("Blog", blogSchema);
