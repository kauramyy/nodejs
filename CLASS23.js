const express=require('express');
const path=require('path');
const app=express();
const appPath=path.join(__dirname,'public');
app.set('view engine','ejs');
app.get('/',(req,res)=>
{
    res.sendFile(`${appPath}/home.html`);
})
app.get('/about',(req,res)=>
{
    res.sendFile(`${appPath}/about.html`);
})
app.get('/profile',(req,res)=>
{
    const user={
        name:'aman',
        email:'kaur.amyy@gmail.com',
        designation:'Computer teacher'
    }
    res.render('profile',{user});
})
app.get('*',(req,res)=>
{
    res.sendFile(`${appPath}/notfound.html`);
})
app.listen(4500);
