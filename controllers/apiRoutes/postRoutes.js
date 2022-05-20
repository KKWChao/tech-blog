const router = require("express").Router();
const { User, Post, Comment } = require('../../models') 

router.get("/", (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'text'
    ],
    include: [
      {
        model: 'User',
        attributes: ['username']
      }
    ]
  })
    .then()
    .catch()
})

router.get("/:id", (req, res) => {
  Post.findOne()
    .then()
    .catch()
})

router.post("/", (req, res) => {
  Post.create()
    .then()
    .catch()
})

router.put("/", (req, res) => {
  Post.update()
    .then()
    .catch()
})

router.delete("/", (req, res) => {
  Post.destroy()
    .then()
    .catch()
})

module.exports = router;