const msg = require(`Type.js`)

const insulti = {
    lol : [
        "trans",
        'gay',
        'lesbica',
        'stronzo',
        'nazista',
        'ebreo',
        'terrapiatista',
        'ritardato',
        'senza cervelo',
        'un demente',
        'una persona con un tumore',
        'una persona con una vita terribile',
        'una persona terrrribbile',
        "mongolo",
        "grasso",
        "una merdina",
        "pedofilo",
        "troia",
    ],
    comune : [
        'stupido, piu di pam',
        'COMUNISTA',
        'vergine',
        'figlio di puttana',
        'molto autistico',
        'una persona senza speranza',
        'frocio',
        'inpuro',
        'figlio di puttana',
        'una persona molto triste',
        "un abusatore di Bambini",
        "nato storto",
        "un pezzo di merda",
        "piu porco di un dio",
        "un gigantesco mongoloide",
        "piu pedofilo di pam",
    ],
    raro : [
        "Talmente depresso che domani ti inpicchi",
        "un cazzo di ritardato ma ti svegli?",
        "un cazzo di aspirapolvere per quanto succhi",
        "l'odio della tua famiglia",
        "cosi brutto che ti devi sparare https://www.amazon.it/dp/B00JRBL0JI/ref=cm_sw_r_tw_dp_x_zHX8Eb8SFETZS",
        "tutto quello che la gente odia, peggio di hitler in persona!",
        "ti giuro ho finito gli insulti per quanto mi stai sul cazzo",
        "la cosa che nessuno vuole, sei un insetto",
        "una arte di picasso per quanto sei brutto",
        "mega gay, peggio di malgioglio",
        "un completo idiota da testa a piedi",
        "cosi gay che mi stai contaminando con la tua gaiagine",
    ],
    superspecial : [
        "Un kebabbaro",
	    "una brava persona continua cosi :D",
    ]
};


    /*
    if (msg.author.bot) {
    }else {
        console.log("%c\n" + msg.author.username + ": " + msg.content,"color: DodgerBlue;");
    };
    */

    }

    switch(msg.content) {
        case "insulti?":
            let internal = 0;
            let spec = 0;
            let inle = insulti.length
            for (inte_ins = 0; inte_ins < inle; inte_ins++) {
                for (inte_in; inte_in < insulti[inte_ins].length; inte_in++) {
                    internal++
                }
            }
            for (inte_spec = 0; inte_spec < insulti.superspecial;inte_spec++) {
                internal--
                spec++
            }
            msg.channel.send("ci sono ${internal} insulti, di cui ${spec} non sono ancora stati trovati :D");


            break;

        case "ti odio":
        case "sei molto gay":
        case "sei gay":
        case "gay":
        case "sei gay":
        case "gay":

            let npar = Math.floor(Math.random() * (nin.length));
            msg.type(nin[npar]);
            break;

        case "cosa sono":
        case "sono":
        case "cosa sono?":
        case "sono?":
            //il perche il mio bot e cosi bello


            let gggg = Math.random() * 100;

            console.log("\n" + msg.author.username + " la sua rarita era " + gggg + " che e uguale a ")

            sleep(800);

            if (gggg >= 0 && gggg <= 45) {

                let par = Math.floor(Math.random() * insulti.lol.length);
                console.log("lol: " + par + "\n");
                msg.type(insulti.lol[par]);

            } else if (gggg >= 45 && gggg <= 85) {

                let par = Math.floor(Math.random() * insulti.comune.length);
                console.log("comune: " + par + "\n");
                msg.type(insulti.comune[par]);

            } else if (gggg >= 85 && gggg <= 99.99) {

                let par = Math.floor(Math.random() * insulti.raro.length);
                console.log("raro: " + par + "\n");
                msg.type(insulti.raro[par]);



            } else {

		        let par = Math.floor(Math.random() * insulti.superspecial.length);
                console.log("comune: " + par + "\n");
                msg.type(insulti.superspecial[par]);

            };
            break;

        case "voglio una corda":
        case "voglio la corda":
        case "dammi una corda":
        case "dammi la corda":
        case "dovè la corda":
        case "dove la corda":
        case "dovè la corda?":
        case "dove la corda?":

            msg.type("ce l'ho io! https://www.amazon.it/dp/B07Q2WQRBJ/ref=cm_sw_r_tw_dp_U_x_vru8Eb4WVZBMZ");
            break;

        case "origini":

            msg.channel.send("non e spam, sei tu che mi hai chiesto le mie origini https://discord.gg/Z85vVC8");
            break;

        case "dio porco":

            msg.channel.send("concordo con te mio amico blasfemmo");
            break;

        case "info":
        case "inf":
        case "informazioni":
            msg.channel.send({embed : inf})

    };

});
