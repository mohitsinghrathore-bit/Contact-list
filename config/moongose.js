const moongose=require('mongoose');

moongose.connect('mongodb://localhost/contactlist_db');

const db=moongose.connection;
db.on('error',console.error.bind('oh no error'));
db.once('open',function(){
    console.log('oh yes');
})