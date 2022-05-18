const router = require("express").Router();
const { User } = require("../../models");

/* GET: /api/users */
router.get("/", (req, res) => {
  User.findAll()
    .then((dbUserData) => {
      res.json(dbUserData);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

/* GET: /api/users/:id */
router.get("/:id", (req, res) => {
  User.findOne({
    where: {
      id: req.body.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({
          message: "User Not Found!",
        });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

/* POST: /api/users */
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
  })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.userId = dbUserData.id,
        req.session.username = dbUserData.username,
        req.session.loggedIn = true;
      })
    })
    .catch();
});

/* POST: /api/users/login */
router.post("/login", (req, res) => {});

/* POST: /api/users/logout */
router.post("/logout", (req, res) => {});

/* PUT: /api/users/:id */
router.put("/:id", (req, res) => {});

/* DELETE: /api/users/:id */
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({
          message: "User Not Found!",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
