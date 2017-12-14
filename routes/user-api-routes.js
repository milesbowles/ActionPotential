var db = require("..models");
module.exports = function(app){
    app.get("api/users", function(req, res){
        db.User.findAll({
            include: [{
                model: db.Stats,
                through: {
                    attributes: ["name"]
                }
            }]
        }).then(function(dbUser){
            res.json(dbAuthor);
        });
    });
    app.get("/api/users/:id", function(req, res){
        db.User.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Stats]
        }).then(function(dbUser){
            res.json(dbUser);
        });
    });
    app.post("/api/users/:id", function(req, res){
        db.User.create(req.body).then(function(dbUser){

        });
    });
    app.delete("/api/users/:id", function(req, res){
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser){
            res.json(dbUser);
        });
    });
}