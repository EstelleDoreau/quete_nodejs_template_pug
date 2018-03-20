var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('Hey ! It\'s a GET');
// });

// /* GET user with ID. */
// router.get('/:id(\\d+)', function(req, res, next) {
//   res.send('Hey ! It\'s a GET with ID ' + req.params.id);
// });

// /* POST user creation. */
// router.post('/', function(req, res, next) {
//   res.send('Hey ! It\'s a POST');
// });


/* PUT */
router.put('/:user(\\w+)', function(req, res) {
  res.send('Hey my name is ' + req.params.user);
});

/* DELETE */
router.delete('/:id(\\d+)', function(req, res) {
  res.send('Hey ! It\'s a DELETE ID ' + req.params.id);
});

module.exports = router;