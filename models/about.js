var keystone = require('keystone');
var Types = keystone.Field.Types;

var About = new keystone.List('About',{
    autokey:{from:'title', path:'slug'},
});

About.add({
    title:{type:String},
    name:{type:String},
    page_url:{type:String},
    image:{
        jumbotron_image:{type: String},
    },
    content:{
		one: { type: String, wysiwyg: true, height: 400 },
        two: { type: String, wysiwyg: true, height: 400 },
        three: { type: String, wysiwyg: true, height: 400 },
        four: { type: String, wysiwyg: true, height: 400 },
    }
});

About.register();