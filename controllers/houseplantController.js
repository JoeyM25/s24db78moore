const Houseplant = require('../models/houseplant');
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
exports.houseplant_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Houseplant.findById(req.params.id)
        res.send(result)
    }
    catch(error){
        res.status(500)
        res.send('{"Error": document for id ${req.params.id} not found');
    }
};

// Handle Houseplant create on POST.
exports.houseplant_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Houseplant();
    document.scientific_name = req.body.scientific_name;
    document.common_name = req.body.common_name;
    document.difficulty = req.body.difficulty;

    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send('{"error": ${err}}');
    }
};

// Handle Houseplant delete from on DELETE.
exports.houseplant_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Houseplant delete DELETE ' + req.params.id);
};

// Handle Houseplant update form on PUT.
exports.houseplant_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Houseplant update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.houseplant_view_all_Page = async function(req, res) {
    try{
        theHouseplants = await Houseplant.find();
        res.render('houseplant', { title: 'Houseplant Search Results', results: theHouseplants });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};