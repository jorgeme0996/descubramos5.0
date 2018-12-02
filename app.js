var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    seedDB          = require("./seed"),
    mongoose        = require("mongoose"),
    Probeta1        = require("./models/probeta1");


//seedDB();   
mongoose.connect("mongodb://localhost/Probetas", {useNewUrlParser: true});    
//mongoose.connect("mongodb://jorge:jorge007@ds141960.mlab.com:41960/descubramos", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("landing");
});   

app.post("/probeta1", function(req, res){
    var nelem = req.body.nelem;
    Probeta1.find({}, function(err, data){
        if(err){
            console.log(err)
        } else {
            var def = data[0].deformacion;
            var mpa = data[0].mpa;
            res.render("probeta1/probeta1", {def:def, mpa:mpa, nelem: nelem});
        } 
    });
});

app.listen(process.env.PORT,process.env.IP, function(){
    console.log("Esta vivo!!!!")
})
//process.env.PORT,process.env.IP