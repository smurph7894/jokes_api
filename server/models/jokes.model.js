const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({

    setup: {
        type: String,
        required: [true, "A joke must have a setup!"],
        minlength: [3, "The punchline must be at least 3 characters!"]
    },
    punchline: {
        type: String,
        required: [true, "A joke must have a setup!"],
        minlength: [3, "The punchline must be at least 3 characters!"]
    }

}, {timestamps: true});

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;
