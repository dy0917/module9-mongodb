let express = require('express');
let router = express.Router();
let Controllers = require('../controllers'); //index.js
router.get('/', (req, res) => {
  const result = Controllers.itemController.add(22, 33);
  console.log('result', result);
  Controllers.userController.getUsers(res);
});
router.post('/create', (req, res) => {
  Controllers.userController.createUser(req.body, res);
});
module.exports = router;
