var mongoose = require('mongoose');

exports = module.exports = function(app, mongoose) 
{
  var apiSchema = new mongoose.Schema
  (
    {
        firstNames : { type: 'String'},
        lastNames : { type: 'String'},
        document: 
        {
      	   identification :{ type: 'String'},
      	   type: {type: 'String'}
        },
        date: {type: Date},
        description:{type: 'String'},
        especiality : {type: 'String'},
        sesion: {type: Boolean, default: false},
        lastSesion: { type: Date, default: null },
        createAt: { type: Date, default: Date.now },
        updateAt: { type: Date, default: Date.now }    
    } 
  );
   mongoose.model('Medic', apiSchema);
};