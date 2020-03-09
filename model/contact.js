const moongose=require('mongoose');

const contactSchema=new moongose.Schema({
    name:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})
const Contact=moongose.model('Contact',contactSchema);
module.exports=Contact;