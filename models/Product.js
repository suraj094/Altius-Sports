var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = new keystone.List('Product', {
    autokey: { from: 'title', path: 'slug' },
});

Product.add({
title:{type:String},
name: {type: String},


page_url:{type:String},

image:{
        jumbotron_image:{type: String},
        one:{type: String},
        two:{type: String},
        three:{type: String},
        four:{type: String},
        five:{type: String},
        six:{type: String},
        seven:{type: String},
        eight:{type: String},
        nine:{type: String},
        ten:{type: String},
        eleven:{type: String},
        twelve:{type: String},
        thirteen:{type: String},
        fourteen:{type: String},
        fifteen:{type: String},
},


heading:{
    one: { type: String, wysiwyg: true, height: 400 },
		two: { type: String, wysiwyg: true, height: 400 },
        three: { type: String, wysiwyg: true, height: 400 },
		four: { type: String, wysiwyg:true,height:400},
        five: { type: String, wysiwyg:true,height:400},
        six: { type: String, wysiwyg:true,height:400},
        seven: { type: String, wysiwyg:true,height:400},
        eight: { type: String, wysiwyg:true,height:400},
        nine: { type: String, wysiwyg:true,height:400},
        ten: { type: String, wysiwyg:true,height:400},
},


content: {
		one: { type: String, wysiwyg: true, height: 400 },
		two: { type: String, wysiwyg: true, height: 400 },
        three: { type: String, wysiwyg: true, height: 400 },
		four: { type: String, wysiwyg:true,height:400},
        five: { type: String, wysiwyg:true,height:400},
        six: { type: String, wysiwyg:true,height:400},
        seven: { type: String, wysiwyg:true,height:400},
        eight: { type: String, wysiwyg:true,height:400},
        nine: { type: String, wysiwyg:true,height:400},
        ten: { type: String, wysiwyg:true,height:400},
        eleven: { type: String, wysiwyg:true,height:400},
        twelve: { type: String, wysiwyg:true,height:400},
        thirteen: { type: String, wysiwyg:true,height:400},
        fourteen: { type: String, wysiwyg:true,height:400},
        fifteen: { type: String, wysiwyg:true,height:400},
        sixteen: { type: String, wysiwyg:true,height:400},
        seventeen: { type: String, wysiwyg:true,height:400},
        eighteen: { type: String, wysiwyg:true,height:400},
        nineteen: { type: String, wysiwyg:true,height:400},
        twenty: { type: String, wysiwyg:true,height:400},
        twentyone: { type: String, wysiwyg:true,height:400},
        twentytwo: { type: String, wysiwyg:true,height:400},
        twentythree: { type: String, wysiwyg:true,height:400},
        twentyfour: { type: String, wysiwyg:true,height:400},
        twentyfive: { type: String, wysiwyg:true,height:400},
        twentysix:{ type: String, wysiwyg:true,height:400},
        twentyseven:{ type: String, wysiwyg:true,height:400},
        twentyeight:{ type: String, wysiwyg:true,height:400},
        twentynine:{ type: String, wysiwyg:true,height:400},
        thirty:{ type: String, wysiwyg:true,height:400},

},


});
Product.register();