/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);
var url = require('url');

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views

	app.get('/', routes.views.index);
	
	app.get('/Our_Services',function(req, res){
		var view = new keystone.View(req, res);
		view.query('Statics', keystone.list('static').model.find().where('name', 'service'));
		view.render('Our_Services')
	});

		
	app.get('/Case-Study-of-the-Month',function(req, res){
	 	var view = new keystone.View(req, res);
		 view.query('Case_studies', keystone.list('case_study').model.find());
		view.render('Case-Study-of-the-Month');
	 });

	app.get('/About_Us',function(req, res){
		var view = new keystone.View(req, res);
		view.query('Statics', keystone.list('static').model.find().where('name', 'About'));
		view.render('About_Us')
	});



		
	
//  products
	// app.get('/', routes.views.index);
	app.get('/Products/Sports/track',function(req, res){
		var view = new keystone.View(req, res);
		view.query('Product_contents', keystone.list('product_content').model.findOne({'name' : 'tracks'}));
		view.render('track');
	});
	app.get('/Products/Sports/badminton',function(req,res){
		var view=new  keystone.View(req,res)
		view.query('Badmintons', keystone.list('badminton').model.find().where('name', 'badminton'));
		view.render('badminton')
	});
	app.get('/Products/Sports/basketball',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Product_contents', keystone.list('product_content').model.findOne({'name' : 'basketball'}));
		view.render('basketball')
	});
	app.get('/Products/Sports/cricket',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Product_contents', keystone.list('product_content').model.findOne({'name' : 'cricket'}));
		view.render('cricket')
	});
	app.get('/Products/Sports/football',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Badmintons', keystone.list('badminton').model.find().where('name', 'football'));
		view.render('football')
	});
	app.get('/Products/Sports/hockey',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Product_contents', keystone.list('product_content').model.findOne({'name' : 'hockey'}));
		view.render('hockey')
	});
	app.get('/Products/Sports/multi',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Badmintons', keystone.list('badminton').model.find().where('name', 'multi'));
		view.render('multi')
	});
	app.get('/Products/Sports/others',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Vinyls', keystone.list('Vinyls').model.find().where('name','Other'));
		view.render('others')
	});
	app.get('/Products/Sports/tennis',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Badmintons', keystone.list('badminton').model.find().where('name', 'tennis'));
		view.render('tennis')
	});
	app.get('/Products/Sports/volleyball',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Product_contents', keystone.list('product_content').model.findOne({'name' : 'volleyball'}));
		view.render('volleyball')
	});
	app.get('/Leisure/children_play',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Badmintons', keystone.list('badminton').model.find().where('name', 'childrenplay'));
		view.render('children_play')
	});
	app.get('/Leisure/golf',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Product_contents', keystone.list('product_content').model.findOne({'name' : 'golf'}));
		view.render('golf')
	});
	app.get('/Leisure/landscape',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Badmintons', keystone.list('badminton').model.find().where('name', 'landscape'));
		view.render('landscape')
	});
	app.get('/Other-Products/vinyl',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Vinyls', keystone.list('Vinyls').model.find().where('name','Vinyl'));
		view.render('vinyl')
	});
	app.get('/Other-Products/Shock_Pads',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Shockpads', keystone.list('Shockpad').model.find().where('name','Shock'));
		view.render('Shock_Pads')
	});
	app.get('/Other-Products/sportacc',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Vinyls', keystone.list('Vinyls').model.find().where('name','SportsAcc'));
		view.render('sportacc')
	});
	app.get('/Other-Products/base',function(req,res){
		var view=new keystone.View(req,res);
		view.query('Basems', keystone.list('Basem').model.find().where('name', 'base'));
		view.render('base')
	});
	
	app.get('/Media',function(req,res){
		var view=new keystone.View(req,res);
		view.query('Statics', keystone.list('static').model.find().where('name', 'media'));
		view.render('media')
	});

	app.get('/fiab',function(req,res){
		var view=new keystone.View(req,res);
		view.query('Statics', keystone.list('static').model.find().where('name', 'fiab'));
		view.render('fiab')
	});

	app.get('/payandplay',function(req,res){
		var view=new keystone.View(req,res);
		view.query('Statics', keystone.list('static').model.find().where('name', 'paynplay'));
		view.render('payandplay')
	});

	app.get('/Contact',function(req,res){
		var view=new keystone.View(req,res)
		 view.query('contacts', keystone.list('contact').model.find());
		view.render('Contact')
	});
// app.get('/search', function(req, res){
// 		var view = new keystone.View(req, res);
// 		 filters = {
//         keywords: req.query.keywords
//     };

//     data = {
//         products:[],
//         keywords: "",
//     };
// 	// console.log(filters.keywords.split(" "));
// 		view.query('products', keystone.list('Basem','case_study','contact','Home','Product_contents','badminton','Shockpad','static','Vinyls').model.find(
// 		  {$text: {$search : filters.keywords } },
//             {score : {$meta: "textScore"} }).sort({score : {$meta : 'textScore'} }). limit(20)
			
        
       
// 		);	
		
// 		view.render('search');
// });
	// app.get('/base#ecocept',function(req,res){
	// 	var view=new keystone.View(req,res)
	// 	view.render('/base#ecocept')
	// });






	// app.get('/badminton',routes.views.badminton);
	// app.get('/basketball',routes.views.basketball);
	// app.get('/cricket',routes.views.cricket);
	// app.get('/football',routes.views.football);
	// app.get('/hockey',routes.views.hockey);
	// app.get('/multi',routes.views.multi);

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
