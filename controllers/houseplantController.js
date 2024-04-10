var Houseplant = require('../models/houseplant');
// List of all Houseplants
exports.houseplant_list = async function(req, res) {
    try{
        theHouseplants = await Houseplant.find();
        res.send(theHouseplants)
    }
    catch(err){
        res.status(500);
        res.send('{"error":${err}}');
    }
};

// for a specific Houseplant.
exports.houseplant_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Houseplant detail: ' + req.params.id);
};

// Handle Houseplant create on POST.
    exports.houseplant_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Houseplant create POST');
};

// Handle Houseplant delete from on DELETE.
    exports.houseplant_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Houseplant delete DELETE ' + req.params.id);
};

// Handle Houseplant update form on PUT.
exports.houseplant_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Houseplant update PUT' + req.params.id);
};