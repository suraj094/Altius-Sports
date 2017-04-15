var keystone = require('keystone');
var Types = keystone.Field.Types;

var Media = new keystone.List('Media',{
    autokey:{from:'title', path:'slug'},
}); 

Media.add({
    title:{type:String},
    name:{type:String},
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
    },
    description:{
        one:{type:String, wysiwyg:true,height:400},
        two:{type:String, wysiwyg:true,height:400},
        three:{type:String, wysiwyg:true,height:400},
        four:{type:String, wysiwyg:true,height:400},
        five:{type:String, wysiwyg:true,height:400},
        six:{type:String, wysiwyg:true,height:400},
        seven:{type:String, wysiwyg:true,height:400},
        eight:{type:String, wysiwyg:true,height:400},
        nine:{type:String, wysiwyg:true,height:400},
        ten:{type:String, wysiwyg:true,height:400},
        eleven:{type:String, wysiwyg:true,height:400}
    }
});

Media.register();