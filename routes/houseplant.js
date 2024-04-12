var express = require('express');
const houseplant_controllers = require('../controllers/houseplantController');
var router = express.Router();

/* GET Houseplants page. */
router.get('/', houseplant_controllers.houseplant_view_all_Page);

// GET detail houseplant page
router.get('/detail', houseplant_controllers.houseplant_view_one_page);

// GET create houseplant page
router.get('/create', houseplant_controllers.houseplant_create_Page);

// Get create update page
router.get('/update', houseplant_controllers.houseplant_update_Page);

// Get delete houseplant page
router.get('/delete', houseplant_controllers.houseplant_delete_Page);

module.exports = router;

