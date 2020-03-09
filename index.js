const express=require('express');
const path =require('path');
const port=8000;
const db=require('./config/moongose');
const Contact=require('./model/contact');
const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
//app.use(express.static('assets'));
app.use(express.static('assets'));

var contactList=[
    {
        name:"Mohit",
        phone:'111111'
    },
    {
     name:"Hen",
     phone:'33333'
    }
];
app.get('/',function(req,res){
//  res.end('hey')
Contact.find({},function(err,contacts){
    if(err){
        console.log('oh noo');
        return;
    }
    return res.render('home',{
        title:'contact list',
        contact_list: contacts
      });
      
});
})

app.get('/practice',function(req,res){
    //  res.end('hey')
    return res.render('practice',{
        title: 'my name'
    });
    })
    app.post('/create-contact',function(req,res){
        //contactList.push(req.body);
        Contact.create({
            name: req.body.name,
            phone: req.body.phone
        },function(err,newContact){
            if(err){
                console.log('oh no');
                return;
            }
            console.log('*****',newContact);
            return res.redirect('back');
        });
        //return res.redirect('back');
    });
    app.post('/delete',function(req,res){
           contactList.splice(0,contactList.length-1);
        return res.redirect('back');
    })
    app.get('/dltcon',function(req,res){
       // console.log(req.query.phone);
       let id=req.query.id;
       Contact.findByIdAndDelete(id,function(err){
           if(err){
           console.log('err in this');
           return;
           }
       return res.redirect('back');

       })
    })
app.listen(port, function(err){
    console.log(port);
})