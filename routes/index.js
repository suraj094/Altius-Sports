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
		view.render('Our_Services')
	});

		
	app.get('/Case-Study-of-the-Month',function(req, res){
	 	var view = new keystone.View(req, res);
		view.render('Case-Study-of-the-Month')
	 });

	app.get('/About_Us',function(req, res){
		var view = new keystone.View(req, res);
		view.render('About_Us')
	});



		
	
//  products
	// app.get('/', routes.views.index);
	app.get('/Products/Sports/track',function(req, res){
		var view = new keystone.View(req, res)
		view.render('track')
	});
	app.get('/Products/Sports/badminton',function(req,res){
		var view=new  keystone.View(req,res)
		view.render('badminton')
	});
	app.get('/Products/Sports/basketball',function(req,res){
		var view=new keystone.View(req,res)
		view.render('basketball')
	});
	app.get('/Products/Sports/cricket',function(req,res){
		var view=new keystone.View(req,res)
		view.render('cricket')
	});
	app.get('/Products/Sports/football',function(req,res){
		var view=new keystone.View(req,res)
		view.render('football')
	});
	app.get('/Products/Sports/hockey',function(req,res){
		var view=new keystone.View(req,res)
		view.render('hockey')
	});
	app.get('/Products/Sports/multi',function(req,res){
		var view=new keystone.View(req,res)
		view.render('multi')
	});
	app.get('/Products/Sports/others',function(req,res){
		var view=new keystone.View(req,res)
		view.render('others')
	});
	app.get('/Products/Sports/tennis',function(req,res){
		var view=new keystone.View(req,res)
		view.render('tennis')
	});
	app.get('/Products/Sports/volleyball',function(req,res){
		var view=new keystone.View(req,res)
		view.render('volleyball')
	});
	app.get('/Leisure/children_play',function(req,res){
		var view=new keystone.View(req,res)
		view.render('children_play')
	});
	app.get('/Leisure/golf',function(req,res){
		var view=new keystone.View(req,res)
		view.render('golf')
	});
	app.get('/Leisure/landscape',function(req,res){
		var view=new keystone.View(req,res)
		view.render('landscape')
	});
	app.get('/Other-Products/vinyl',function(req,res){
		var view=new keystone.View(req,res)
		view.render('vinyl')
	});
	app.get('/Other-Products/Shock_Pads',function(req,res){
		var view=new keystone.View(req,res)
		view.render('Shock_Pads')
	});
	app.get('/Other-Products/sportacc',function(req,res){
		var view=new keystone.View(req,res)
		view.render('sportacc')
	});
	app.get('/Other-Products/base',function(req,res){
		var view=new keystone.View(req,res)
		view.render('base')
	});
	
	app.get('/Media',function(req,res){
		var view=new keystone.View(req,res)
		view.render('Media')
	});

	app.get('/fiab',function(req,res){
		var view=new keystone.View(req,res)
		view.render('fiab')
	});

	app.get('/payandplay',function(req,res){
		var view=new keystone.View(req,res)
		view.render('payandplay')
	});

	app.get('/Contact',function(req,res){
		var view=new keystone.View(req,res)
		view.render('Contact')
	});
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
