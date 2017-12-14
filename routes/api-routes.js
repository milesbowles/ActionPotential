// Grabbing our models

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/login", function(req, res) {
    db.user.findAll({}).then(function(){
      res.json(dbusers);
    });
  });

  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post("/api/todos", function(req, res) {
    db.todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbtodo){
      res.json(dbtodo);
    }).catch(function(error){
      res.json(error);
    });
  });

  // DELETE route for deleting todos. You can access the todo's id in req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    db.todo.destroy({
      where: {
        id: req.params.id 
      }
    }).then(function(dbtodo){
      res.json(dbtodo);
    });
  });

  // PUT route for updating todos. The updated todo will be available in req.body
  app.put("/api/todos", function(req, res) {
    bd.todo.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbtodo){
      res.json(dbtodo);
    }).catch(function(error){
      res.json(error);
    });
  });
};