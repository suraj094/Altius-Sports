var keystone = require('keystone');
var Types = keystone.Field.Types;

var Pay = new keystone.List('Paynplay',{
    autokey:{from:'title', path:'slug'},
});

Pay.add({
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
    },
    heading:{
        one:{type:String, wysiwyg:true,height:400},
        two:{type:String, wysiwyg:true,height:400},
    },
    content:{
        one:{type:String},
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
        ten:{type:String, wysiwyg:true,height:400}
    }
});
Pay.register();
