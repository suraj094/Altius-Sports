var keystone = require('keystone');
var Types = keystone.Field.Types;

var contact = new keystone.List('contact_us', {
    autokey: { from: 'title', path: 'slug' },
});

contact.add({
    title: { type: String},
    name: {type: String},
    // image : {type: String},
    page_url:{type:String},
    content: {
		one: { type: String, wysiwyg: true, height: 400 },
        two: { type: String, wysiwyg: true, height: 400 },
        three: { type: String, wysiwyg: true, height: 400 },
        four: { type: String, wysiwyg: true, height: 800 },
		five: { type: String, wysiwyg: true, height: 400 },
        six: { type: String, wysiwyg: true, height: 400 },
        seven: { type: String, wysiwyg: true, height: 400 },
        eight: { type: String, wysiwyg: true, height: 400 },
        nine: { type: String, wysiwyg: true, height: 400 },
        ten: { type: String, wysiwyg: true, height: 400 },
        eleven: { type: String, wysiwyg: true, height: 400 },
        twelve: { type: String, wysiwyg: true, height: 400 },
        thirteen: { type: String, wysiwyg: true, height: 400 },
        fourteen: { type: String, wysiwyg: true, height: 400 },
        fifteen: { type: String, wysiwyg: true, height: 400 },
        sixteen: { type: String, wysiwyg: true, height: 400 },
        seventeen: { type: String, wysiwyg: true, height: 400 },
        eighteen: { type: String, wysiwyg: true, height: 400 },
        nineteen: { type: String, wysiwyg: true, height: 400 },
        twenty: { type: String, wysiwyg: true, height: 400 },
        twentyone: { type: String, wysiwyg: true, height: 400 },
        },
    

});
        
        
contact.defaultColumns = 'title';

contact.register();