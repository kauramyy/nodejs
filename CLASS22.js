const express =require('express');
const path=require('path');
const app=express();
const appPath=path.join(__dirname,'public');
// app.use(express.static(appPath));
app.get('/',(req,res)=>
{
    res.sendFile(`${appPath}/home.html`);
})
app.get('/about',(req,res)=>
{
    res.sendFile(`${appPath}/about.html`);
})
app.get('*',(req,res)=>
{
    res.sendFile(`${appPath}/notfound.html`);
})
app.listen(4500);
