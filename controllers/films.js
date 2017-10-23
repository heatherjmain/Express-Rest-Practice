//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require("express")
var router = new express.Router()


//index
router.get("/", function(req, res) {
  res.json(films)
})

//show
router.get("/:id", function(req, res) {
  var film = films[req.params.id]
  res.json(film)
})

//create
router.post("/", function(req, res) {
  films.push(req.body)
  res.json(films)
})

//update
router.put("/:id", function(req, res) {
  var id = req.params.id
  var updatedFilm = req.body

  films[id] = updatedFilm
  res.json(films)
})

//destroy
router.delete("/:id", function(req, res) {
  var id = req.params.id

  films.splice(id, 1)
  res.json(films)
})


module.exports = router
