var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/*var salarioController = require("../controllers/salarioController");

router.get("/:username", salarioController.getOne);
router.get("/", salarioController.getAll);
router.post("/", salarioController.register);
router.put("/:username", salarioController.update);
router.delete("/:username", salarioController.delete);

module.exports = router;*/