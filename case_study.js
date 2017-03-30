var keystone = require('keystone');
var Types = keystone.Field.Types;

var case_study = new keystone.List('case_study', {
    autokey: { from: 'title', path: 'slug' },
});

case_study.add({
    title: { type: String},
    name: {type: String},
    vanue:{type: String},
    describe:{type: String},
    date:{type: String},
    surface:{type: String},
    base:{type: String},
    image : {
        first: {type: String},
        Second: {type: String},
        Third: {type: String},
        Fourth: {type: String},
    },
    content: {
		first: { type: String, wysiwyg: true, height: 400 },
		second: { type: String, wysiwyg: true, height: 400 },
        third: { type: String, wysiwyg: true, height: 400 },
        fourth:{ type: String, wysiwyg: true, height: 400 },
	},


});

case_study.defaultColumns = 'title';

case_study.register();