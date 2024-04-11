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
exports.houseplant_delete =  async function(req, res) {
    console.log("delete" + req.params.id)
    try {
        result = await Houseplant.findByIdAndDelete(req.params.id)
        console.log("Removed" + result)
        res.send(result)
    }
    catch(err){
        res.status(500)
        res.send('("Error":Error deleting ${err}}');
    }
};

// Handle Houseplant update form on PUT.
exports.houseplant_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Houseplant.findById( req.params.id)
    // Do updates of properties
    if(req.body.scientific_name)
        toUpdate.scientific_name = req.body.scientific_name;
    if(req.body.common_name) toUpdate.common_name = req.body.common_name;
    if(req.body.difficulty) toUpdate.difficulty = req.body.difficulty;
    let result = await toUpdate.save();
    console.log("Success " + result)
    res.send(result)
    }
    catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
    }
};

// Handle a show one view with id specified by query
exports.houseplant_view_one_page = async function(req, res){
    console.log("Single view for id " + req.query.id)
    try{
        result = await Houseplant.findById(req.query.id)
        res.render('houseplantdetail', 
            {title:'Houseplant Detail', toShow: result});
    }
    catch(err){
        res.status(500)
        res.send(`{'error':${err}'}`);
    }
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