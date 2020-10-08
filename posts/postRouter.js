const express = require('express');
const users = require('../middleware/users');

const router = express.Router();

router.get('users/:id/posts', (req, res) => {
  users.get
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
