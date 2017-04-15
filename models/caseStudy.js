var keystone = require('keystone');
var Types = keystone.Field.Types;
var caseStudy = keystone.List('case_Study',{
    autokey:{from:'title', path:'slug'},
});

caseStudy.add({
    title:{type:String},
    name:{type:String},
    page_url:{type:String},
    venue:{type: String},
    describe:{type: String},
    date:{type: String},
    surface:{type: String},
    base:{type: String},
    image:{
        jumbotron_image:{type: String},
        one:{type: String},
        two:{type: String},
        three:{type: String},
    },
    content:{
        one: { type: String, wysiwyg: true, height: 400 },
        two: { type: String, wysiwyg: true, height: 400 },
        three: { type: String, wysiwyg: true, height: 400 },
        four: { type: String, wysiwyg:true,height:400},
    }


});

caseStudy.register();