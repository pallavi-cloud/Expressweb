const { static } = require('express');
const express = require('express');
const app = express();
const port=process.env.PORT || 7000;
const path = require('path');
const hbs=require('hbs');
//static website access
const staticpath= path.join(__dirname,"../public");
const partial_path= path.join(__dirname,"../templates/partials");
const views_path= path.join(__dirname,"../templates/views");


//console.log(staticpath);
app.set('view engine','hbs');
app.set('views',views_path);
app.use(express.static(staticpath));
hbs.registerPartials(partial_path);
//routing
app.get("/",(req,res)=>{
res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
    })
    app.get("/weather",(req,res)=>{
        res.render("weather");
        })
        app.get("about/*",(req,res)=>{
            res.render("404error");
            })
            app.get("*",(req,res)=>{
                res.render("404error",{
                    errormsg:'404 error occured'
                });

                })
                                        
app.listen(port,(req,res)=>{
console.log("its running");

})