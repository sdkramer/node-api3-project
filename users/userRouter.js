const express = require('express');
const users = require('./userDb');
const { validateUserId, validateUser } = require('../middleware/users')

const router = express.Router();

router.post('/users', validateUser(), (req, res) => {
  users.insert(req.body)
  .then((user) => {
    res.status(201).json(user)
  })
  .catch((error) => {
    next(error)
  })
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/users', (req, res) => {
  users.get(users)
  .then((users) => {
    res.status(200).json(users)
  })
  .catch((error) => {
    console.log(error);
  })
});

router.get('/users/:id', validateUserId(), (req, res) => {
  res.status(200).json(req.user)
});

router.get('/users/:id/posts', validateUserId(), (req, res) => {
  users.getUserPosts(req.params.id)
  .then((posts) => {
    res.status(200).json(posts)
  })
  .catch((error) => {
    next(error)
  })
});

router.delete('/users/:id', validateUserId(), (req, res) => {
  users
  .remove(req.params.id)
  .then((count) => {
    if(count > 0) {
      res.status(200).json({
        message: "User has been deleted",
      })
    } else {
      res.status(404).json({
        message: "User not found",
      })
    }
  })
  .catch((error) => {
    next(error)
  })
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

// function validateUserId(req, res, next) {
//   // do your magic!
// }

// function validateUser(req, res, next) {
//   // do your magic!
// }

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
