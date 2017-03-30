var keystone = require('keystone');
var Types = keystone.Field.Types;

var static = new keystone.List('static', {
    autokey: { from: 'title', path: 'slug' },
});

static.add({
    title: { type: String},
    name: {type: String},

    heading:{
         First: {type: String},
        Second: {type: String},
        Third: {type: String},
        Fourth: {type: String},
        Fifth:{type: String},
        Sixth:{type: String},
        Seventh:{type: String},
        Eighth:{type: String},
    },
   
    image : {
        First: {type: String},
        Second: {type: String},
        Third: {type: String},
        Fourth: {type: String},
        Fifth:{type: String},
        Sixth:{type: String},
        Seventh:{type: String},
        Eighth:{type: String},
    },
    content: {
		first: { type: String, wysiwyg: true, height: 400 },
		second: { type: String, wysiwyg: true, height: 400 },
        third: { type: String, wysiwyg: true, height: 400 },
        fourth:{ type: String, wysiwyg: true, height: 400 },
         Fifth:{ type: String, wysiwyg: true, height: 400 },
        Sixth:{ type: String, wysiwyg: true, height: 400 },
        Seventh:{ type: String, wysiwyg: true, height: 400 },
        Eighth:{ type: String, wysiwyg: true, height: 400 },
	},


});

static.defaultColumns = 'title';

static.register();