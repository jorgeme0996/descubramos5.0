var mongoose    = require("mongoose"),
    Probeta1    = require("./models/probeta1")
    Probeta2    = require("./models/probeta2")

var data = [
    {
        deformacion:[
            0.0000,
            0.0034,
            0.0041,
            0.0040,
            0.0076,
            0.0112,
            0.0148,
            0.0184,
            0.0214,
            0.0250,
            0.0295,
            0.0343,
            0.0459,
            0.0692,
            0.1131,
            0.2286,
            0.4060,
            0.5955,
            0.7790,
            0.9590,
            1.1363,
            1.3120,
            1.4843,
            1.6524,
            1.8158,
            1.9600,
            2.0626,
            2.0973
        ],
        mpa: [
            2.079821142,
            15.42225749,
            19.9953776,
            23.7447347,
            32.35705363,
            43.10112712,
            54.13343506,
            63.87010091,
            73.54562988,
            83.58329264,
            93.93336589,
            105.9640544,
            134.3638509,
            185.9233887,
            246.5303385,
            275.9354818,
            284.4458008,
            289.4061849,
            293.5467773,
            297.1487305,
            300.2689453,
            302.9028646,
            305.0107747,
            306.6938477,
            307.9264323,
            308.6668945,
            308.4214518,
            303.1448568
        ]
    }
]


function seedDB(){
    //Elimina todo
    Probeta2.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("Se elimino TODO!!!")
        } 
    });

    for(let i in data){
        Probeta2.create(data[i], function(err, probeta){
            if (err){
                console.log(err);
            } else {
                console.log("Acabas de crear una probeta");
                console.log(probeta);
            }
        })
    }
}

module.exports = seedDB;