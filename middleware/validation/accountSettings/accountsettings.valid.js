const { check } = require('express-validator');

module.exports=[
  check('fname').matches(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/),
  check('lname').matches(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/),
  check('email').isEmail(),
  check('bio').matches(/^[a-zA-Z ]*$/)
]