var keystone = require('keystone');
var Types = keystone.Field.Types;

var contact = new keystone.List('contact', {
    autokey: { from: 'title', path: 'slug' },
});

contact.add({
    // title: { type: String},
    name: {type: String},
    // image : {type: String},
    page_url:{type:String},
    content: {
		first: { type: String, wysiwyg: true, height: 400 },
        second: { type: String, wysiwyg: true, height: 400 },
        third: { type: String, wysiwyg: true, height: 400 },
        fourth: { type: String, wysiwyg: true, height: 800 },
		fiveth: { type: String, wysiwyg: true, height: 400 },
        Sixth: { type: String, wysiwyg: true, height: 400 },
        Seventh: { type: String, wysiwyg: true, height: 400 },
        eightth: { type: String, wysiwyg: true, height: 400 },
        nineth: { type: String, wysiwyg: true, height: 400 },
        ten: { type: String, wysiwyg: true, height: 400 },
        eleven: { type: String, wysiwyg: true, height: 400 },
        twelve: { type: String, wysiwyg: true, height: 400 },
        thirteen: { type: String, wysiwyg: true, height: 400 },
        fourteen: { type: String, wysiwyg: true, height: 400 },

        fifteen: { type: String, wysiwyg: true, height: 400 },
        sixteen: { type: String, wysiwyg: true, height: 400 },
        seventeen: { type: String, wysiwyg: true, height: 400 },
        eightteen: { type: String, wysiwyg: true, height: 400 },
        nineteen: { type: String, wysiwyg: true, height: 400 },
        twenty: { type: String, wysiwyg: true, height: 400 },
        twentyone: { type: String, wysiwyg: true, height: 400 },
        


    },
    

});
        
        
contact.defaultColumns = 'title';

contact.register();