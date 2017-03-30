var keystone = require('keystone');
var Types = keystone.Field.Types;

/* Base Systems */

var Basem = new keystone.List('Basem');

Basem.add({
    name:{
        type: String
    },
    image:{
        first: {type: String},
        second: {type: String},
        third: {type: String},
        fourth: {type: String},
        fifth: {type: String},
        sixth: {type: String},
        seventh: {type: String},
        eight: {type: String},
        nine: {type: String},
        tenth: {type: String},
        eleventh: {type: String}

    },

    heading:{
        first:{type:String},
        second:{type: String},
        third: {type: String},
        fourth:{type: String}
    },
    content:{
        first: {type: String},
        second:{type: String},
        third:{type: String},
    }
    

});
Basem.defaultColumns = 'title';
Basem.register();