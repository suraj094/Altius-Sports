var keystone = require('keystone');
var Types = keystone.Field.Types;

var Home = new keystone.List('Home', {
    autokey: { from: 'title', path: 'slug' },
});

Home.add({
    title: { type: String},
    name: {type: String},
    page_url:{type:String},
    image : {
        first:{type: String},
        second:{type: String},
        third:{type: String},
        fourth:{type: String},
        fiveth:{type: String},
        six:{type: String},
        seven:{type: String},
        eight:{type: String},
        nine:{type: String},
        ten:{type: String},
        eleven:{type: String},
        twelve:{type: String},
        thirteen:{type: String},
        fourteen:{type: String},
        fifteen:{type: String},

        oone:{type: String},
        otwo:{type: String},
        othree:{type: String},

        Ojsfimage:{type:String},

        happyimage1:{type:String},
        happyimage2:{type:String},
        happyimage3:{type:String},
        happyimage4:{type:String},
        happyimage5:{type:String},
        happyimage6:{type:String},

        Certifications1:{type:String},
        Certifications2:{type:String},
        Certifications3:{type:String},
        Certifications4:{type:String},
        Certifications5:{type:String},
        Certifications6:{type:String},
        Certifications7:{type:String},
        Certifications8:{type:String},
        Certifications9:{type:String},
    },        


       
        
    // },

    content: {
		first: { type: String, wysiwyg: true, height: 400 },
		Second: { type: String, wysiwyg: true, height: 400 },
        Third: { type: String, wysiwyg: true, height: 400 },
		fourth: { type: String, wysiwyg:true,height:400},
        fiveth: { type: String, wysiwyg:true,height:400},
        sixth: { type: String, wysiwyg:true,height:400},
        seventh: { type: String, wysiwyg:true,height:400},
        eightth: { type: String, wysiwyg:true,height:400},
        nine: { type: String, wysiwyg:true,height:400},
        ten: { type: String, wysiwyg:true,height:400},

        //product range
        
        pfirst: { type: String, wysiwyg: true, height: 400 },
		psecond: { type: String, wysiwyg: true, height: 400 },
        pthird: { type: String, wysiwyg: true, height: 400 },
		pfourth: { type: String, wysiwyg:true,height:400},
        pfiveth: { type: String, wysiwyg:true,height:400},
        psixth: { type: String, wysiwyg:true,height:400},
        pseventh: { type: String, wysiwyg:true,height:400},
        peightth: { type: String, wysiwyg:true,height:400},
        pnine: { type: String, wysiwyg:true,height:400},
        pten: { type: String, wysiwyg:true,height:400},
        peleven: { type: String, wysiwyg:true,height:400},
        ptwelve:{ type: String, wysiwyg:true,height:400},
//our partner
         ofirst: { type: String, wysiwyg: true, height: 400 },

         //our journey so far
        Ojsf:{ type: String, wysiwyg: true, height: 400 },
       
        Ojsf1:{ type: String, wysiwyg: true, height: 400 },
        Ojsf2:{ type: String, wysiwyg: true, height: 400 },
        Ojsf3:{ type: String, wysiwyg: true, height: 400 },
        Ojsf4:{ type: String, wysiwyg: true, height: 400 },
        Ojsf5:{ type: String, wysiwyg: true, height: 400 },
        Ojsf6:{ type: String, wysiwyg: true, height: 400 },
        Ojsf7:{ type: String, wysiwyg: true, height: 400 },

        //happy clients
        Happy:{ type: String, wysiwyg: true, height: 400 },

        Happy1:{ type: String, wysiwyg: true, height: 400 },
        Happy2:{ type: String, wysiwyg: true, height: 400 },
        Happy3:{ type: String, wysiwyg: true, height: 400 },
        Happy4:{ type: String, wysiwyg: true, height: 400 },
        Happy5:{ type: String, wysiwyg: true, height: 400 },

        Happy6:{ type: String, wysiwyg: true, height: 400 },
        Happy7:{ type: String, wysiwyg: true, height: 400 },
        Happy8:{ type: String, wysiwyg: true, height: 400 },
        Happy9:{ type: String, wysiwyg: true, height: 400 },
        Happy10:{ type: String, wysiwyg: true, height: 400 },
        Happy11:{ type: String, wysiwyg: true, height: 400 },
        Happy12:{ type: String, wysiwyg: true, height: 400 },
        Happy13:{ type: String, wysiwyg: true, height: 400 },
        Happy14:{ type: String, wysiwyg: true, height: 400 },
        Happy15:{ type: String, wysiwyg: true, height: 400 },
        Happy16:{ type: String, wysiwyg: true, height: 400 },
        Happy17:{ type: String, wysiwyg: true, height: 400 },

        Certifications1:{ type: String, wysiwyg: true, height: 400 },

        news1:{ type: String, wysiwyg: true, height: 400 },
        news2:{ type: String, wysiwyg: true, height: 400 },

        

        

        
    },
      
     

});

Home.defaultColumns = 'title';

Home.register();