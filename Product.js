var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = new keystone.List('product_content', {
    autokey: { from: 'title', path: 'slug' },
});

Product.add({
name: {type: String},
page_name:{type:String},
image:{
        first:{type: String},
        second:{type: String},
        third:{type: String},
        fourth:{type: String},
        fifth:{type: String},
        six:{type: String},
        seven:{type: String},
        eight:{type: String},
        nine:{type: String},
        ten:{type: String},
},
content: {
		first: { type: String, wysiwyg: true, height: 400 },
		Second: { type: String, wysiwyg: true, height: 400 },
        Third: { type: String, wysiwyg: true, height: 400 },
		fourth: { type: String, wysiwyg:true,height:400},
        fifth: { type: String, wysiwyg:true,height:400},
        sixth: { type: String, wysiwyg:true,height:400},
        seventh: { type: String, wysiwyg:true,height:400},
        eighth: { type: String, wysiwyg:true,height:400},
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
        twenty1: { type: String, wysiwyg:true,height:400},
        twenty2: { type: String, wysiwyg:true,height:400},
        twenty3: { type: String, wysiwyg:true,height:400},
        twenty4: { type: String, wysiwyg:true,height:400},
        twenty5: { type: String, wysiwyg:true,height:400},

},


});
Product.register();