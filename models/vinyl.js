var keystone = require('keystone');
var Types = keystone.Field.Types;

/****Vinyl****/

var Vinyle = new keystone.List('Vinyls');

Vinyle.add({
name:{type:String},
image:{
    first:{type:String},
    second:{type:String},
    third:{type:String},
    fourth:{type:String},
    fifth:{type:String},
    sixth:{type:String},
    seventh:{type:String}
},
heading:{
    first:{type:String}
},

content:{
    first:{type:String},
    second:{type:String},
    third:{type:String},
    fourth:{type:String},
    fifth:{type:String},
    sixth:{type:String},
    seventh:{type:String},
    eight:{type:String},
    ninth:{type:String},
    tenth:{type:String},
    eleventh:{type:String}
}
});

Vinyle.defaultColumns = 'title';
Vinyle.register()