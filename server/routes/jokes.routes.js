const JokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
    //create
    app.post("/api/jokes", JokeController.createNewJoke);
    //read
    app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    //update
    app.put("/api/jokes/:id", JokeController.updateJoke);
    //delete
    app.delete("/api/jokes/:id", JokeController.deleteJoke);
};
