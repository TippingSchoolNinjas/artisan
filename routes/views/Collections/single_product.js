var keystone = require('keystone');
exports = module.exports = function(req, res){

    var view = new keystone.View(req, res);
        var locals = res.locals;

    locals.section = 'Product';


    view.query('Product', keystone.list('Product').model.find());

    view.render('single-product');
};