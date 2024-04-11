var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var houseplant_controller = require('../controllers/houseplantController');

/// API ROUTE ///

// GET resources base.
router.get('/', api_controller.api);

/// HOUSEPLANT ROUTES ///

// POST request for creating a Houseplant.
router.post('/houseplants', houseplant_controller.houseplant_create_post);

// DELETE request to delete Houseplant.
router.delete('/houseplants/:id', houseplant_controller.houseplant_delete);

// PUT request to update Houseplant.
router.put('/houseplants/:id', houseplant_controller.houseplant_update_put);

// GET request for one Houseplant.
router.get('/houseplants/:id', houseplant_controller.houseplant_detail);

// GET request for list of all Houseplant items.
router.get('/houseplants', houseplant_controller.houseplant_list);

// GET detail costume page
router.get('/detail', houseplant_controller.houseplant_view_one_page);

module.exports = router;