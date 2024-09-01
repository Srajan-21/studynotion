const mongoose = require("mongoose");

const ratingAndReviewSChema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    rating:{
        typpe:Number,
        required:true,
    },
    review:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model("RatingAndReview" , ratingAndReviewSChema);