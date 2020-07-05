





const nin = [
    "brutto stronzo",
    "gay",
    "tu sei quello gay, io sono cazzo perfetto!",
    "ma vaffanculo no e?",

];

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

const pam = [
    "gay",
    "pedofilo",
    "un cazzo di trans",
    "ritardato",
    "molto autistico"
];

const pet = [
    "un stronzo",
    "un coglone",
    "un gay",
    "un troione"
];

let cooldownsolitudine = false ;
const solitudine = [
    "<@698849524793344040>", //jace
    "<@693148274982387713>", //sky
    "<@218469596577923083>", //no
    "<@706188824253825135>", //armus
    "<@724984172527091792>", //chiara
    "<@724741611438866472>", //desyyyyyyyyyyyyyy
    "<@596711519232983080>", //pter
    "<@409086631291912193>", //mega nut
    "<@315468396860801030>", //pam
    "<@689097523956285463>", //liam
    "<@218469596577923083>", //cute
];



function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      };
    };
  };


client.on('ready', () => {
    console.log("%cBot online! Entrato come ${client.user.tag}!", "color: DodgerBlue;");

    client.user.setPresence({
    });

});

// Create an event listener for messages
client.on('message', msg => {

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

        case "<@!461108311484530688> sei molto gay":
        case "<@!461108311484530688> ti odio":
        case "<@!461108311484530688> sei molto gay":
        case "<@!461108311484530688> gay":
        case "<@!461108311484530688> sei gay":
        case "sei gay":
        case "gay":
        case " sei gay":
        case " gay":
            console.log("\n"+ msg.username + ": " + msg.content + "\n");
            let npar = Math.floor(Math.random() * (nin.length));
            msg.reply(nin[npar]);
            break;

        case "cosa sono":
        case "sono":
        case "cosa sono?":
        case "sono?":
            //il perche il mio bot e cosi bello

            console.log("\n"+ msg.username + ": " + msg.content + "\n");
            let gggg = Math.random() * 100;

            console.log("\n" + msg.author.username + " la sua rarita era " + gggg + " che e uguale a ")

            sleep(800);

            if (gggg >= 0 && gggg <= 45) {

                let par = Math.floor(Math.random() * insulti.lol.length);
                console.log("lol: " + par + "\n");
                msg.reply(insulti.lol[par]);

            } else if (gggg >= 45 && gggg <= 85) {

                let par = Math.floor(Math.random() * insulti.comune.length);
                console.log("comune: " + par + "\n");
                msg.reply(insulti.comune[par]);

            } else if (gggg >= 85 && gggg <= 99.99) {

                let par = Math.floor(Math.random() * insulti.raro.length);
                console.log("raro: " + par + "\n");
                msg.reply(insulti.raro[par]);



            } else {

		        let par = Math.floor(Math.random() * insulti.superspecial.length);
                console.log("comune: " + par + "\n");
                msg.reply(insulti.superspecial[par]);

            };
            break;

        case "nat e":
        case "nat e?":
            console.log("\n"+ msg.username + ": " + msg.content + "\n");
            msg.channel.send('senza cervello');
            break;

        case "armus e":
        case "armus e?":
            console.log("\n"+ msg.username + ": " + msg.content + "\n");
            msg.channel.send('molto stronzo');
            break;

        case "pam e gay":
            console.log("\n"+ msg.username + ": " + msg.content + "\n");
            msg.channel.send('si hai molta ragione');
            break;

        case "pam e pedofilo":
        case "pam e pedo":
            console.log("\n"+ msg.username + ": " + msg.content + "\n");
            msg.channel.send('si hai molta ragione');
            break;

        case "e nat":
        case "e nat?":
            console.log("\n"+ msg.username + ": " + msg.content + "\n");
            msg.channel.send('senza cervelo? si');
            break;

        case "e armus":
        case "e armus?":
            console.log("\n"+ msg.username + ": " + msg.content + "\n");
            msg.channel.send('stronzo? si, e anche tanto');
            break;

        case "sky e?":
        case "sky e":
            console.log("\n"+ msg.username + ": " + msg.content + "\n");
            msg.channel.send('una vittima di pam');
            break;

        case "voglio una corda":
        case "voglio la corda":
        case "dammi una corda":
        case "dammi la corda":
        case "dovè la corda":
        case "dove la corda":
        case "dovè la corda?":
        case "dove la corda?":
            console.log("\n"+ msg.username + ": " + msg.content + "\n");

            msg.channel.startTyping(1);
            msg.reply("ce l'ho io! https://www.amazon.it/dp/B07Q2WQRBJ/ref=cm_sw_r_tw_dp_U_x_vru8Eb4WVZBMZ");
            msg.channel.stopTyping(true);
            break;

        case "more":
        case "MORE":
            console.log("\n"+ msg.username + ": " + msg.content + "\n");

            msg.reply("se ci tieni al bot e vuoi piu insulti che possa dire, le puoiinviare a questo link https://forms.gle/AERxPwL1yMowaUxr6");
            break;

        case "pam e":
            console.log("\n"+ msg.username + ": " + msg.content + "\n");

            let pamr = Math.floor(Math.random() * (pam.length));
            msg.channel.send(pam[pamr]);
            break;

        case "cosa fa Pam con Sky":
        case "cosa fa Pam con Sky?":
            console.log("\n"+ msg.username + ": " + msg.content + "\n");
            msg.reply("sesso molto caldo brutto pedofilo");
            break;

        case "piter e?":
        case "piter e ":
            console.log("\n"+ msg.username + ": " + msg.content + "\n");
            let petr = Math.floor(Math.random() * (nap.length));
            msg.reply(pet[petr]);
            break;

        case "pam e di?":
        case "pam e di?":
            console.log("\n"+ msg.username + ": " + msg.content + "\n")
            msg.channel.send("pam e lo schiavo di <@218469596577923083> .")
            break;


        case "ship":
            console.log("\n"+ msg.username + ": " + msg.content + "\n")

            if (cooldownsolitudine) {
                msg.reply("il commando e in cooldown aspe ancora un po spammer di merda");
            } else {

                while (true) {
                    let solitudiner1 = Math.floor(Math.random() * (solitudine.length));
                    let solitudiner2 = Math.floor(Math.random() * (solitudine.length));
                    let s1 = solitudine[solitudiner1];
                    let s2 = solitudine[solitudiner2];

                    if (msg.author.id == ("693148274982387713")) {
                        msg.channel.send("<@693148274982387713> x <@315468396860801030> tanti auguri per loro : )");
                        break;
                    } else if ((s1 == "<@698849524793344040>" && s2 == "<@315468396860801030>") || (s2 == "<@315468396860801030>" && s1 == "<@698849524793344040>")) {

                    } else if (msg.author.id == ("724741611438866472") || msg.author.id == ("409086631291912193")) {
                        msg.channel.send("<@724741611438866472> x <@409086631291912193> tanti auguri per loro : )");
                        break;
                    } else if ((s1 == "<@315468396860801030>" || s2 == "<@315468396860801030>" ) || (s1 == "<@693148274982387713>" || s2 == "<@693148274982387713>")) {
                        msg.channel.send("<@693148274982387713> x <@315468396860801030> tanti auguri per loro : )");
                        break
                    } else {
                        if (s1 !== s2) {
                            msg.channel.send(s1 + " x " + s2 + " tanti auguri per loro : )");
                            break;
                        };
                    };



                };

                cooldownsolitudine = true;
                sleep(4500);
                cooldownsolitudine = false;
            };

            break;

        case "origini":
            console.log("\n"+ msg.username + ": " + msg.content + "\n")
            msg.channel.send("non e spam, sei tu che mi hai chiesto le mie origini https://discord.gg/Z85vVC8");
            break;

        case "dio porco":
            console.log("\n"+ msg.username + ": " + msg.content + "\n")
            msg.channel.send("concordo con te mio amico blasfemmo");
            break;

        case "invito":
        case "invite":
            msg.channel.send("tieni https://discord.com/oauth2/authorize?client_id=461108311484530688&permissions=8&scope=bot")
            sleep(1000)
            msg.channel.send("voglio essere ovunque :D");
            break;

        case "info":
        case "inf":
        case "informazioni":
            msg.channel.send({embed : inf})

    };

});
