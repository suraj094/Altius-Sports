var keystone = require('keystone');
var Types = keystone.Field.Types;

var Service = new keystone.List('Service',{
    autokey:{from:'title', path:'slug'},
});

Service.add({
    title:{type:String},
    name:{type:String},
    page_url:{type:String},
    image:{
     jumbotron_image:{type:String},  
        one:{type: String},
        two:{type: String},
        three:{type: String},
        four:{type: String},
        five:{type: String},
        six:{type: String}, 
    },
    heading:{
        one:{type:String, wysiwyg:true,height:400},
        two:{type:String, wysiwyg:true,height:400},
        three:{type:String, wysiwyg:true,height:400},
        four:{type:String, wysiwyg:true,height:400},
        five:{type:String, wysiwyg:true,height:400},
        six:{type:String, wysiwyg:true,height:400},
},
    content: {
        one: { type: String, wysiwyg: true, height: 400 },
        two: { type: String, wysiwyg: true, height: 400 },
        three: { type: String, wysiwyg: true, height: 400 },
        four: { type: String, wysiwyg:true,height:400},
        five: { type: String, wysiwyg:true,height:400},
        six: { type: String, wysiwyg:true,height:400}
}
});

Service.register();