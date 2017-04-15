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
		view.query('Services', keystone.list('Service').model.find().where('name', 'Service'));
		view.render('Our_Services')
	});

		
	app.get('/Case-Study-of-the-Month',function(req, res){
	 	var view = new keystone.View(req, res);
		 view.query('Case_Studies', keystone.list('case_Study').model.find().where('name','caseStudy'));
		view.render('Case-Study-of-the-Month');
	 });

	app.get('/About_Us',function(req, res){
		var view = new keystone.View(req, res);
		view.query('Abouts', keystone.list('About').model.find().where('name', 'About'));
		view.render('About_Us')
	});



		
	
//  products
	// app.get('/', routes.views.index);
	app.get('/Products/Sports/track',function(req, res){
		var view = new keystone.View(req, res);
		view.query('Products', keystone.list('Product').model.find().where('name' , 'Tracks'));
		view.render('track');
	});
	app.get('/Products/Sports/badminton',function(req,res){
		var view=new  keystone.View(req,res)
		view.query('Products', keystone.list('Product').model.find().where('name', 'Badminton'));
		view.render('badminton')
	});
	app.get('/Products/Sports/basketball',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Products', keystone.list('Product').model.find().where('name' , 'Basketball'));
		view.render('basketball')
	});
	app.get('/Products/Sports/cricket',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Products', keystone.list('Product').model.find().where('name' , 'Cricket'));
		view.render('cricket')
	});
	app.get('/Products/Sports/football',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Products', keystone.list('Product').model.find().where('name', 'Football'));
		view.render('football')
	});
	app.get('/Products/Sports/hockey',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Products', keystone.list('Product').model.find().where('name' , 'Hockey'));
		view.render('hockey')
	});
	app.get('/Products/Sports/multi',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Products', keystone.list('Product').model.find().where('name', 'Multi'));
		view.render('multi')
	});
	app.get('/Products/Sports/others',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Products', keystone.list('Product').model.find().where('name','Other'));
		view.render('others')
	});
	app.get('/Products/Sports/tennis',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Products', keystone.list('Product').model.find().where('name', 'Tennis'));
		view.render('tennis')
	});
	app.get('/Products/Sports/volleyball',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Products', keystone.list('Product').model.find().where('name' , 'Volleyball'));
		view.render('volleyball')
	});
	app.get('/Leisure/children_play',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Products', keystone.list('Product').model.find().where('name', 'Childrenplay'));
		view.render('children_play')
	});
	app.get('/Leisure/golf',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Products', keystone.list('Product').model.find().where('name' , 'Golf'));
		view.render('golf')
	});
	app.get('/Leisure/landscape',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Products', keystone.list('Product').model.find().where('name', 'Landscape'));
		view.render('landscape')
	});
	app.get('/Other-Products/vinyl',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Products', keystone.list('Product').model.find().where('name','Vinyl'));
		view.render('vinyl')
	});
	app.get('/Other-Products/Shock_Pads',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Products', keystone.list('Product').model.find().where('name','Shockpads'));
		view.render('Shock_Pads')
	});
	app.get('/Other-Products/sportacc',function(req,res){
		var view=new keystone.View(req,res)
		view.query('Products', keystone.list('Product').model.find().where('name','SportsAcc'));
		view.render('sportacc')
	});
	app.get('/Other-Products/base',function(req,res){
		var view=new keystone.View(req,res);
		view.query('Products', keystone.list('Product').model.find().where('name', 'Base_systems'));
		view.render('base')
	});
	
	app.get('/Media',function(req,res){
		var view=new keystone.View(req,res);
		view.query('Media', keystone.list('Media').model.find().where('name', 'Media'));
		view.render('media')
	});

	app.get('/fiab',function(req,res){
		var view=new keystone.View(req,res);
		view.query('Fiabs', keystone.list('fiab').model.find().where('name', 'fiab'));
		view.render('fiab')
	});

	app.get('/payandplay',function(req,res){
		var view=new keystone.View(req,res);
		view.query('Paynplays', keystone.list('Paynplay').model.find().where('name', 'Paynplay'));
		view.render('payandplay')
	});

	app.get('/Contact',function(req,res){
		var view=new keystone.View(req,res)
		 view.query('Contacts', keystone.list('contact_us').model.find().where('name',"contact_us"));
		view.render('Contact')
	});
////////////////////////////// search///////////////////////////////////////////////////

	app.get('/search/:search', function(req, res){
		console.log("working");
		var view = new keystone.View(req, res);
		 filters = {
        keywords: req.query.keywords
    };

    data = {
        product_contents:[],
        keywords: " ",
    };
	
	// console.log(search);
	// console.log(filters.keywords.split(" "));
		view.query('Products', keystone.list('Product').model.find(
		  {$text: {$search : req.params.search } },
            {score : {$meta: "textScore"} })
			// db.collection.find({"Product_contents":{"$in":["hockey","cricket"]}}) db.collection.find({"Abouts":{"$in":["About_Us","Our_Services"]}})
        
      );


			view.query('Contacts', keystone.list('contact_us').model.find(
		  {$text: {$search : req.params.search } },
            {score : {$meta: "textScore"} })
		);
				view.query('cases', keystone.list('case_Study').model.find(
		  {$text: {$search : req.params.search } },
            {score : {$meta: "textScore"} })
		);
				view.query('Homes', keystone.list('Home').model.find(
		  {$text: {$search : req.params.search } },
            {score : {$meta: "textScore"} })
		);
				view.query('Fiab', keystone.list('fiab').model.find(
		  {$text: {$search : req.params.search } },
            {score : {$meta: "textScore"} })
		);
				view.query('Media', keystone.list('Media').model.find(
		  {$text: {$search : req.params.search } },
            {score : {$meta: "textScore"} })
		);
				view.query('Pay', keystone.list('Paynplay').model.find(
		  {$text: {$search : req.params.search } },
            {score : {$meta: "textScore"} })
		);
				view.query('Service', keystone.list('Service').model.find(
		  {$text: {$search : req.params.search } },
            {score : {$meta: "textScore"} })
		);
	
	
		//  console.log(assets);
		view.render('search');
});
// //////////////////////////////////////////////////////////////////








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
