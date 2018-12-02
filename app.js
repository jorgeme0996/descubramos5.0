var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    seedDB          = require("./seed"),
    mongoose        = require("mongoose"),
    Probeta1        = require("./models/probeta1"),
    Probeta2        = require("./models/probeta2"),
    Probeta3        = require("./models/probeta3");


seedDB();   
//mongoose.connect("mongodb://localhost/Probetas", {useNewUrlParser: true});    
mongoose.connect("mongodb://jorgeme0996:jorge007@ds123454.mlab.com:23454/probetas", {useNewUrlParser: true});
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
            
            var defIterada = [];
            var mpaIterada = [];
            var grafica = []

            for(let i=0; i<parseInt(nelem); i++){
                defIterada.push(def[i]);
                mpaIterada.push(mpa[i]);
                grafica.push("["+def[i].toString()+","+mpa[i].toString()+"]")
            }   
            res.render("probeta1/probeta1", {defIterada: defIterada, mpaIterada: mpaIterada, nelem: nelem, grafica: grafica});
        } 
    });
});

app.post("/probeta2", function(req, res){
    var nelem = req.body.nelem;
    Probeta2.find({}, function(err, data){
        if(err){
            console.log(err)
        } else {
            var def = data[0].deformacion;
            var mpa = data[0].mpa;
            
            var defIterada = [];
            var mpaIterada = [];
            var grafica = []

            for(let i=0; i<parseInt(nelem); i++){
                defIterada.push(def[i]);
                mpaIterada.push(mpa[i]);
                grafica.push("["+def[i].toString()+","+mpa[i].toString()+"]")
            }   
            res.render("probeta2/probeta2", {defIterada: defIterada, mpaIterada: mpaIterada, nelem: nelem, grafica: grafica});
        } 
    });
});

app.post("/probeta3", function(req, res){
    var nelem = req.body.nelem;
    Probeta3.find({}, function(err, data){
        if(err){
            console.log(err)
        } else {
            var def = data[0].deformacion;
            var mpa = data[0].mpa;
            
            var defIterada = [];
            var mpaIterada = [];
            var grafica = []

            for(let i=0; i<parseInt(nelem); i++){
                defIterada.push(def[i]);
                mpaIterada.push(mpa[i]);
                grafica.push("["+def[i].toString()+","+mpa[i].toString()+"]")
            }   
            res.render("probeta2/probeta2", {defIterada: defIterada, mpaIterada: mpaIterada, nelem: nelem, grafica: grafica});
        } 
    });
});

app.listen(process.env.PORT,process.env.IP, function(){
    console.log("Esta vivo!!!!")
})
//process.env.PORT,process.env.IP