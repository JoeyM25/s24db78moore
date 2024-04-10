var express = require('express');
const houseplant_controllers = require('../controllers/houseplantController');
var router = express.Router();

/* GET Houseplants page. */
router.get('/', houseplant_controllers.houseplant_view_all_Page);

module.exports = router;

