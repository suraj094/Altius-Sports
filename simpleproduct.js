var keystone = require('keystone');
var Types = keystone.Field.Types;

var product = new keystone.List('product', {
    autokey: { from: 'title', path: 'slug' },
});
product.add({
    title: { type: String},
    name: {type: String},

   
   
    image : {
        First: {type: String},
        Second: {type: String},
        Third: {type: String},
        Fourth: {type: String},
        Fifth:{type: String},
        Sixth:{type: String},
        Seventh:{type: String},
        Eighth:{type: String},
        Ninth:{type: String},
        Tenth:{type: String},
    },
    content: {
		first: { type: String, wysiwyg: true, height: 400 },
		second: { type: String, wysiwyg: true, height: 400 },
        third: { type: String, wysiwyg: true, height: 400 },
        fourth:{ type: String, wysiwyg: true, height: 400 },
         fifth:{ type: String, wysiwyg: true, height: 400 },
        sixth:{ type: String, wysiwyg: true, height: 400 },
        seventh:{ type: String, wysiwyg: true, height: 400 },
        eighth:{ type: String, wysiwyg: true, height: 400 },
        ninth:{ type: String, wysiwyg: true, height: 400 },
        tenth:{ type: String, wysiwyg: true, height: 400 },
	},


});

product.defaultColumns = 'title';

product.register();