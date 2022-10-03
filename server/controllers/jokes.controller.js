const Joke = require("../models/jokes.model");

module.exports = {
    //create
    createNewJoke: (req, res) =>{
        Joke.create(req.body)
            .then((newJoke)=>{
                console.log(newJoke);
                res.json(newJoke);
            })
            .catch((err)=>{
                console.log("Something went wrong in Create New Joke.");
                res.status(400).json(err);
            });
    },
    //read
    findOneJoke:(req, res) =>{
        Joke.findOne({_id: req.params.id})
            .then((oneJoke)=>{
                console.log(oneJoke);
                res.json(oneJoke);
            })
            .catch((err)=>{
                res.json({message: "Something went wrong with Find One Joke", error: err});
                console.log("Find One Joke failed.");
            });
    },
    findAllJokes: (req,res)=>{
        Joke.find({})
        .then((allJokes)=>{
            console.log(allJokes);
            res.json(allJokes);
        })
        .catch((err)=>{
            console.log("Find All Jokes failed.");
            res.json({message: "Something went wrong in Find All Jokes", error: err});
        });
    },
    //update
    updateJoke: (req, res)=>{
        Joke.findByIdAndUpdate({_id: req.params.id},
            req.body,
            {new:true, runValidators:true}
        )
            .then((updatedJoke)=>{
                console.log(updatedJoke);
                res.json(updatedJoke);
            })
            .catch((err)=>{
                res.status(400).json(err);
                console.log("Something went wrong in Update Joke.");
            });
    },
    //delete
    deleteJoke: (req, res)=>{
        Joke.deleteOne({_id: req.params.id})
            .then((deletedJoke)=>{
                console.log(deletedJoke);
                res.json(deletedJoke);
            })
            .catch((err)=>{
                res.json({message: "Something went wrong in Delete Joke.", error: err});
                console.log("Delete Joke failed.");
            });
    }
};