var keystone = require('keystone');
var Types = keystone.Field.Types;

var badminton = new keystone.List('badminton', {
    autokey: { from: 'title', path: 'slug' },
});


badminton.add({
     title: { type: String},
    name: {type: String},
    page_url:{type:String},
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
        ELEVENTH:{type: String},
    },

    heading: {
        first: { type: String, wysiwyg: true, height: 400 },
		second: { type: String, wysiwyg: true, height: 400 },
        third: { type: String, wysiwyg: true, height: 400 },
        fourth:{ type: String, wysiwyg: true, height: 400 },
         fifth:{ type: String, wysiwyg: true, height: 400 },
         sixth:{ type: String, wysiwyg: true, height: 400 },
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
        eleventh:{ type: String, wysiwyg: true, height: 400 },
        twelth:{ type: String, wysiwyg: true, height: 400 },
        thirteenth:{ type: String, wysiwyg: true, height: 400 },
        forteenth:{ type: String, wysiwyg: true, height: 400 },
        fifteenth:{ type: String, wysiwyg: true, height: 400 },
        sixteenth:{ type: String, wysiwyg: true, height: 400 },
        seventeenth:{ type: String, wysiwyg: true, height: 400 },
        eighteenth:{ type: String, wysiwyg: true, height: 400 },
        ninteenth:{ type: String, wysiwyg: true, height: 400 },
        twentieth:{ type: String, wysiwyg: true, height: 400 },
        twentyfirst:{ type: String, wysiwyg: true, height: 400 },
        twentysecond:{ type: String, wysiwyg: true, height: 400 },
        twentythird:{ type: String, wysiwyg: true, height: 400 },
        twentyfourth:{ type: String, wysiwyg: true, height: 400 },
        twentyfifth:{ type: String, wysiwyg: true, height: 400 },

	},

})


badminton.register();