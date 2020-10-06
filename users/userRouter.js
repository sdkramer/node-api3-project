const express = require('express');
const users = require('./userDb');
const { validateUserId } = require('../middleware/userId')

const router = express.Router();

router.post('/users', (req, res) => {
  users.insert(req.body)
  .then()
  .catch()
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

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

// function validateUserId(req, res, next) {
//   // do your magic!
// }

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
