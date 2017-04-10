var keystone = require('keystone');
var Types = keystone.Field.Types;

/* Shockpad */

var Shockpad = new keystone.List('Shockpad');

Shockpad.add({
name: {type:String},
page_url:{type:String},
image: {
first: { type:String},
second: {type:String},
third:{type:String},
fourth:{type:String},
fifth:{type:String},
sixth: {type:String}
},

heading:{
    first: {type:String},
    second: {type:String},
    third:{type:String},
    fourth:{type:String},
    fifth:{type:String},
    sixth:{type:String},
    seventh:{type:String}
},
content:{
  first: {type:String},
  second: {type:String},

}

});

Shockpad.defaultColumns = 'title';
Shockpad.register();