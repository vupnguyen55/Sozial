const db = require('../models');

// Syncing sequelize models 
db.sequelize.sync().then(function() {
  db.User.bulkCreate([{
    "full_name": "Domenico Rioch",
    "password": "w3bN6cE1",
    "email": "drioch0@opera.com",
    "picture": "http://dummyimage.com/212x121.png/5fa2dd/ffffff"
  }, {
    "full_name": "Rowen Sharpus",
    "password": "p12JhaQH5nv",
    "email": "rsharpus1@hugedomains.com",
    "picture": "http://dummyimage.com/237x245.png/ff4444/ffffff"
  }, {
    "full_name": "Sara-ann Fadian",
    "password": "XFFFCRze3",
    "email": "sfadian2@vistaprint.com",
    "picture": "http://dummyimage.com/221x241.bmp/cc0000/ffffff"
  }, {
    "full_name": "Brittani Kalvin",
    "password": "tjeVZQs",
    "email": "bkalvin3@foxnews.com",
    "picture": "http://dummyimage.com/107x224.jpg/5fa2dd/ffffff"
  }, {
    "full_name": "Ingemar Fumagallo",
    "password": "NvnCmG",
    "email": "ifumagallo4@slideshare.net",
    "picture": "http://dummyimage.com/189x165.png/cc0000/ffffff"
  }, {
    "full_name": "Iago Oubridge",
    "password": "AnRKXCViZmS",
    "email": "ioubridge5@sphinn.com",
    "picture": "http://dummyimage.com/153x113.jpg/dddddd/000000"
  }, {
    "full_name": "Daniela Kelk",
    "password": "tIJUWOGRY8pN",
    "email": "dkelk6@com.com",
    "picture": "http://dummyimage.com/139x191.bmp/ff4444/ffffff"
  }, {
    "full_name": "Ike Folomkin",
    "password": "6UnssMjtFppG",
    "email": "ifolomkin7@walmart.com",
    "picture": "http://dummyimage.com/239x212.png/ff4444/ffffff"
  }, {
    "full_name": "Cordie McCowan",
    "password": "gPaWPr",
    "email": "cmccowan8@bravesites.com",
    "picture": "http://dummyimage.com/143x246.png/cc0000/ffffff"
  }, {
    "full_name": "Toddy McAless",
    "password": "IFARLGxtfUEp",
    "email": "tmcaless9@ezinearticles.com",
    "picture": "http://dummyimage.com/150x124.bmp/dddddd/000000"
  }, {
    "full_name": "Wendie Seifenmacher",
    "password": "26cLOgqHA",
    "email": "wseifenmachera@usnews.com",
    "picture": "http://dummyimage.com/120x128.bmp/dddddd/000000"
  }, {
    "full_name": "Casper Bullivent",
    "password": "75tEvjq",
    "email": "cbulliventb@deliciousdays.com",
    "picture": "http://dummyimage.com/227x155.png/ff4444/ffffff"
  }, {
    "full_name": "Burke Albasini",
    "password": "11uMYw6bo",
    "email": "balbasinic@unesco.org",
    "picture": "http://dummyimage.com/103x248.png/5fa2dd/ffffff"
  }, {
    "full_name": "Welch Bankes",
    "password": "Hk3vG1nD4Tm",
    "email": "wbankesd@gnu.org",
    "picture": "http://dummyimage.com/105x181.bmp/cc0000/ffffff"
  }, {
    "full_name": "Robin Duckels",
    "password": "I6vzQVvwM",
    "email": "rduckelse@unicef.org",
    "picture": "http://dummyimage.com/131x196.png/dddddd/000000"
  }, {
    "full_name": "Shawn Caldero",
    "password": "TgkjzX",
    "email": "scalderof@archive.org",
    "picture": "http://dummyimage.com/114x231.jpg/dddddd/000000"
  }, {
    "full_name": "Sonya De Vuyst",
    "password": "YPjhJM6",
    "email": "sdeg@taobao.com",
    "picture": "http://dummyimage.com/128x148.png/dddddd/000000"
  }, {
    "full_name": "Erin Cabrara",
    "password": "uZUXrlULlw",
    "email": "ecabrarah@japanpost.jp",
    "picture": "http://dummyimage.com/195x139.bmp/ff4444/ffffff"
  }, {
    "full_name": "Cathy Esby",
    "password": "MsKgTTem",
    "email": "cesbyi@google.com",
    "picture": "http://dummyimage.com/214x248.jpg/ff4444/ffffff"
  }, {
    "full_name": "Lucilia Aberhart",
    "password": "dGffTarREA7t",
    "email": "laberhartj@rambler.ru",
    "picture": "http://dummyimage.com/173x242.png/5fa2dd/ffffff"
  }, {
    "full_name": "Stevie Goldine",
    "password": "OvWzThKzEjc",
    "email": "sgoldinek@eepurl.com",
    "picture": "http://dummyimage.com/152x215.bmp/dddddd/000000"
  }, {
    "full_name": "Rorie Franca",
    "password": "T8RAXZ0C2VNl",
    "email": "rfrancal@domainmarket.com",
    "picture": "http://dummyimage.com/139x179.jpg/cc0000/ffffff"
  }, {
    "full_name": "Rose Sailes",
    "password": "m3lH0l8TNQtJ",
    "email": "rsailesm@craigslist.org",
    "picture": "http://dummyimage.com/101x248.jpg/5fa2dd/ffffff"
  }, {
    "full_name": "Lavena Yokel",
    "password": "jWWmJnV",
    "email": "lyokeln@blogtalkradio.com",
    "picture": "http://dummyimage.com/160x204.bmp/5fa2dd/ffffff"
  }, {
    "full_name": "Nadean MacTrustrie",
    "password": "z92mFPP",
    "email": "nmactrustrieo@elpais.com",
    "picture": "http://dummyimage.com/114x128.jpg/cc0000/ffffff"
  }, {
    "full_name": "Joeann Helversen",
    "password": "vZsOv0ke",
    "email": "jhelversenp@booking.com",
    "picture": "http://dummyimage.com/198x203.jpg/dddddd/000000"
  }, {
    "full_name": "Iolande Grimsell",
    "password": "tslJZkA",
    "email": "igrimsellq@hatena.ne.jp",
    "picture": "http://dummyimage.com/174x191.jpg/dddddd/000000"
  }, {
    "full_name": "Madella Woolley",
    "password": "IT3YPjut",
    "email": "mwoolleyr@joomla.org",
    "picture": "http://dummyimage.com/119x135.bmp/dddddd/000000"
  }, {
    "full_name": "Cloe Wishkar",
    "password": "OWz8jjy8WaYe",
    "email": "cwishkars@freewebs.com",
    "picture": "http://dummyimage.com/222x153.png/cc0000/ffffff"
  }, {
    "full_name": "Georas Kilfeather",
    "password": "indzgrSbt",
    "email": "gkilfeathert@com.com",
    "picture": "http://dummyimage.com/177x187.bmp/dddddd/000000"
  }, {
    "full_name": "Dulci Menchenton",
    "password": "VavXw1Ke",
    "email": "dmenchentonu@sitemeter.com",
    "picture": "http://dummyimage.com/250x237.bmp/dddddd/000000"
  }, {
    "full_name": "Jacquette Leggat",
    "password": "I8Zk9D",
    "email": "jleggatv@1und1.de",
    "picture": "http://dummyimage.com/120x123.bmp/5fa2dd/ffffff"
  }, {
    "full_name": "Micheil Berrow",
    "password": "k6lJYQ8XND",
    "email": "mberroww@facebook.com",
    "picture": "http://dummyimage.com/214x210.png/5fa2dd/ffffff"
  }, {
    "full_name": "Bernette Braley",
    "password": "LDTxXZET",
    "email": "bbraleyx@hhs.gov",
    "picture": "http://dummyimage.com/177x250.jpg/5fa2dd/ffffff"
  }, {
    "full_name": "Chan Buske",
    "password": "KUbGPoSTP4pH",
    "email": "cbuskey@mysql.com",
    "picture": "http://dummyimage.com/118x204.bmp/5fa2dd/ffffff"
  }, {
    "full_name": "Xavier Lestrange",
    "password": "1NSJOMmF4KcB",
    "email": "xlestrangez@google.ru",
    "picture": "http://dummyimage.com/236x250.bmp/ff4444/ffffff"
  }, {
    "full_name": "Odette Benardette",
    "password": "YNUw3fl4MNC",
    "email": "obenardette10@naver.com",
    "picture": "http://dummyimage.com/228x244.jpg/dddddd/000000"
  }, {
    "full_name": "Mychal Crumly",
    "password": "K7gq9FMbx0Vz",
    "email": "mcrumly11@1und1.de",
    "picture": "http://dummyimage.com/189x171.jpg/dddddd/000000"
  }, {
    "full_name": "Mohandis Faltin",
    "password": "lNM6aF",
    "email": "mfaltin12@woothemes.com",
    "picture": "http://dummyimage.com/104x151.png/dddddd/000000"
  }, {
    "full_name": "Shay Druce",
    "password": "ovzUJVJdS",
    "email": "sdruce13@stumbleupon.com",
    "picture": "http://dummyimage.com/213x227.bmp/5fa2dd/ffffff"
  }, {
    "full_name": "Daryn Krugmann",
    "password": "52lAeWiHqeq",
    "email": "dkrugmann14@nasa.gov",
    "picture": "http://dummyimage.com/238x105.png/cc0000/ffffff"
  }, {
    "full_name": "De witt Delahunty",
    "password": "y3filf",
    "email": "dwitt15@list-manage.com",
    "picture": "http://dummyimage.com/192x229.jpg/ff4444/ffffff"
  }, {
    "full_name": "Virgil Falcus",
    "password": "knUAJYTxa",
    "email": "vfalcus16@google.nl",
    "picture": "http://dummyimage.com/190x139.jpg/dddddd/000000"
  }, {
    "full_name": "Augustine Luno",
    "password": "DGZ6DfHgrLRp",
    "email": "aluno17@wikispaces.com",
    "picture": "http://dummyimage.com/100x215.jpg/cc0000/ffffff"
  }, {
    "full_name": "Wit Lemmens",
    "password": "T9C0aZ6l",
    "email": "wlemmens18@cdbaby.com",
    "picture": "http://dummyimage.com/121x229.jpg/cc0000/ffffff"
  }, {
    "full_name": "Sofie Eadington",
    "password": "pLg4wEzBVgo",
    "email": "seadington19@jimdo.com",
    "picture": "http://dummyimage.com/157x205.png/ff4444/ffffff"
  }, {
    "full_name": "Lian MacCaffery",
    "password": "54aMrHOsOeNO",
    "email": "lmaccaffery1a@printfriendly.com",
    "picture": "http://dummyimage.com/139x114.jpg/ff4444/ffffff"
  }, {
    "full_name": "Matias Creasy",
    "password": "e3ujea",
    "email": "mcreasy1b@ucla.edu",
    "picture": "http://dummyimage.com/191x211.jpg/dddddd/000000"
  }, {
    "full_name": "Eric Weth",
    "password": "9vVPOIrbWcqM",
    "email": "eweth1c@nytimes.com",
    "picture": "http://dummyimage.com/117x179.jpg/cc0000/ffffff"
  }, {
    "full_name": "Rutger Dupoy",
    "password": "nWQ2K5LJUw",
    "email": "rdupoy1d@cnn.com",
    "picture": "http://dummyimage.com/206x151.bmp/ff4444/ffffff"
  }, {
    "full_name": "Yale de Zamora",
    "password": "9qwhXbIC2UG",
    "email": "yde1e@oakley.com",
    "picture": "http://dummyimage.com/194x184.jpg/5fa2dd/ffffff"
  }, {
    "full_name": "Mel Barron",
    "password": "SToMOY",
    "email": "mbarron1f@nih.gov",
    "picture": "http://dummyimage.com/149x101.bmp/cc0000/ffffff"
  }, {
    "full_name": "Luca Rowlinson",
    "password": "ILYB1gyCAsU",
    "email": "lrowlinson1g@bbb.org",
    "picture": "http://dummyimage.com/220x214.jpg/dddddd/000000"
  }, {
    "full_name": "Dacia Trowle",
    "password": "XcFPageYvG",
    "email": "dtrowle1h@mit.edu",
    "picture": "http://dummyimage.com/222x221.jpg/5fa2dd/ffffff"
  }, {
    "full_name": "Wildon Shwalbe",
    "password": "WeFGsUOX158K",
    "email": "wshwalbe1i@dmoz.org",
    "picture": "http://dummyimage.com/161x188.bmp/5fa2dd/ffffff"
  }, {
    "full_name": "Beltran Sex",
    "password": "AhrBHj",
    "email": "bsex1j@bigcartel.com",
    "picture": "http://dummyimage.com/219x195.bmp/dddddd/000000"
  }, {
    "full_name": "Berne Clubley",
    "password": "PcJfgIZFzu2",
    "email": "bclubley1k@si.edu",
    "picture": "http://dummyimage.com/140x127.bmp/ff4444/ffffff"
  }, {
    "full_name": "Natividad Manginot",
    "password": "TIZfsDf5HN",
    "email": "nmanginot1l@bloglovin.com",
    "picture": "http://dummyimage.com/176x157.jpg/dddddd/000000"
  }, {
    "full_name": "Mitchael Ygou",
    "password": "xlTrWUFb",
    "email": "mygou1m@multiply.com",
    "picture": "http://dummyimage.com/162x132.jpg/ff4444/ffffff"
  }, {
    "full_name": "Karole Blazdell",
    "password": "DJ21xQTHlq7",
    "email": "kblazdell1n@virginia.edu",
    "picture": "http://dummyimage.com/179x224.bmp/cc0000/ffffff"
  }, {
    "full_name": "Tabitha Dalyiel",
    "password": "siajrQAe",
    "email": "tdalyiel1o@princeton.edu",
    "picture": "http://dummyimage.com/120x180.jpg/cc0000/ffffff"
  }, {
    "full_name": "Adolph Streatfield",
    "password": "ZfWTJr",
    "email": "astreatfield1p@smugmug.com",
    "picture": "http://dummyimage.com/174x126.bmp/dddddd/000000"
  }, {
    "full_name": "Jacob Branscombe",
    "password": "HAVYV2",
    "email": "jbranscombe1q@si.edu",
    "picture": "http://dummyimage.com/134x167.bmp/cc0000/ffffff"
  }, {
    "full_name": "Tawsha McInility",
    "password": "Er4XoZoTq",
    "email": "tmcinility1r@hao123.com",
    "picture": "http://dummyimage.com/165x213.jpg/cc0000/ffffff"
  }, {
    "full_name": "Glyn Carnduff",
    "password": "92V70WpHa4",
    "email": "gcarnduff1s@vimeo.com",
    "picture": "http://dummyimage.com/109x143.bmp/cc0000/ffffff"
  }, {
    "full_name": "Morrie Cater",
    "password": "qFRW3khEO",
    "email": "mcater1t@behance.net",
    "picture": "http://dummyimage.com/211x231.png/dddddd/000000"
  }, {
    "full_name": "Cherry Craigheid",
    "password": "Y6OEVDz60ia",
    "email": "ccraigheid1u@marketwatch.com",
    "picture": "http://dummyimage.com/118x171.png/cc0000/ffffff"
  }, {
    "full_name": "Clarance de Cullip",
    "password": "uafHu5gYqV",
    "email": "cde1v@ucla.edu",
    "picture": "http://dummyimage.com/213x240.jpg/ff4444/ffffff"
  }, {
    "full_name": "Philbert Scogin",
    "password": "MUn4x77",
    "email": "pscogin1w@apple.com",
    "picture": "http://dummyimage.com/246x195.jpg/ff4444/ffffff"
  }, {
    "full_name": "Dareen Veivers",
    "password": "tLcb85",
    "email": "dveivers1x@skyrock.com",
    "picture": "http://dummyimage.com/250x198.png/ff4444/ffffff"
  }, {
    "full_name": "Casper Grinin",
    "password": "jADrS89",
    "email": "cgrinin1y@harvard.edu",
    "picture": "http://dummyimage.com/182x160.jpg/dddddd/000000"
  }, {
    "full_name": "Jemimah Brignall",
    "password": "xshfvA",
    "email": "jbrignall1z@ocn.ne.jp",
    "picture": "http://dummyimage.com/202x142.bmp/dddddd/000000"
  }, {
    "full_name": "Gale Mingotti",
    "password": "TQawwvc",
    "email": "gmingotti20@newsvine.com",
    "picture": "http://dummyimage.com/243x121.bmp/ff4444/ffffff"
  }, {
    "full_name": "Rad Okenfold",
    "password": "Jx55hh",
    "email": "rokenfold21@engadget.com",
    "picture": "http://dummyimage.com/115x179.bmp/5fa2dd/ffffff"
  }, {
    "full_name": "Dallas Ryce",
    "password": "Zrcko7W1Cz2V",
    "email": "dryce22@geocities.jp",
    "picture": "http://dummyimage.com/191x212.png/dddddd/000000"
  }, {
    "full_name": "Bertina Earnshaw",
    "password": "bF94i8UCZ",
    "email": "bearnshaw23@tripod.com",
    "picture": "http://dummyimage.com/193x126.png/cc0000/ffffff"
  }, {
    "full_name": "Amalea Vamplus",
    "password": "KAlEdfkQYI",
    "email": "avamplus24@ucla.edu",
    "picture": "http://dummyimage.com/214x246.png/5fa2dd/ffffff"
  }, {
    "full_name": "Janek Karp",
    "password": "rXgMM6DCa5Hc",
    "email": "jkarp25@state.tx.us",
    "picture": "http://dummyimage.com/199x220.jpg/cc0000/ffffff"
  }, {
    "full_name": "Nancee Battersby",
    "password": "Q9pjsIp",
    "email": "nbattersby26@vimeo.com",
    "picture": "http://dummyimage.com/169x112.png/dddddd/000000"
  }, {
    "full_name": "Malory McGrirl",
    "password": "WpoyIb",
    "email": "mmcgrirl27@redcross.org",
    "picture": "http://dummyimage.com/202x123.jpg/dddddd/000000"
  }, {
    "full_name": "Correy Wolfarth",
    "password": "hDxcBbNz",
    "email": "cwolfarth28@pinterest.com",
    "picture": "http://dummyimage.com/109x236.jpg/cc0000/ffffff"
  }, {
    "full_name": "Odey Philippet",
    "password": "rmd0GIZ7ZY",
    "email": "ophilippet29@deliciousdays.com",
    "picture": "http://dummyimage.com/110x126.jpg/ff4444/ffffff"
  }, {
    "full_name": "Garnet Cassey",
    "password": "eo37QK",
    "email": "gcassey2a@wired.com",
    "picture": "http://dummyimage.com/207x184.png/cc0000/ffffff"
  }, {
    "full_name": "Earlie Vian",
    "password": "SzrRaDiQzid",
    "email": "evian2b@accuweather.com",
    "picture": "http://dummyimage.com/185x198.jpg/ff4444/ffffff"
  }, {
    "full_name": "Annis Ferrey",
    "password": "qf8sa0WCN8",
    "email": "aferrey2c@ucoz.com",
    "picture": "http://dummyimage.com/120x163.jpg/cc0000/ffffff"
  }, {
    "full_name": "Yoshi Vokes",
    "password": "cPSlbD9",
    "email": "yvokes2d@oracle.com",
    "picture": "http://dummyimage.com/212x217.bmp/dddddd/000000"
  }, {
    "full_name": "Cletus Cossar",
    "password": "fx5ZwE",
    "email": "ccossar2e@wikia.com",
    "picture": "http://dummyimage.com/112x213.jpg/ff4444/ffffff"
  }, {
    "full_name": "Ethelda Merrington",
    "password": "N8RbeLdvp",
    "email": "emerrington2f@123-reg.co.uk",
    "picture": "http://dummyimage.com/164x177.bmp/dddddd/000000"
  }, {
    "full_name": "Maggy MacTerlagh",
    "password": "28wcpYfuh",
    "email": "mmacterlagh2g@stumbleupon.com",
    "picture": "http://dummyimage.com/176x162.jpg/ff4444/ffffff"
  }, {
    "full_name": "Obidiah Woollhead",
    "password": "xXuCUrYD",
    "email": "owoollhead2h@auda.org.au",
    "picture": "http://dummyimage.com/109x247.bmp/dddddd/000000"
  }, {
    "full_name": "Vivie Meeking",
    "password": "makANonK",
    "email": "vmeeking2i@posterous.com",
    "picture": "http://dummyimage.com/212x144.bmp/5fa2dd/ffffff"
  }, {
    "full_name": "Ermina Meiklejohn",
    "password": "zjnIDyyqR7",
    "email": "emeiklejohn2j@meetup.com",
    "picture": "http://dummyimage.com/223x185.jpg/dddddd/000000"
  }, {
    "full_name": "Shelby Goodison",
    "password": "zLEJth6",
    "email": "sgoodison2k@google.es",
    "picture": "http://dummyimage.com/193x170.jpg/dddddd/000000"
  }, {
    "full_name": "Hakeem Schoroder",
    "password": "upwMjWIv",
    "email": "hschoroder2l@imdb.com",
    "picture": "http://dummyimage.com/123x167.jpg/5fa2dd/ffffff"
  }, {
    "full_name": "Oneida Gosz",
    "password": "7B7VqX",
    "email": "ogosz2m@sina.com.cn",
    "picture": "http://dummyimage.com/191x173.jpg/ff4444/ffffff"
  }, {
    "full_name": "Randa Blainey",
    "password": "N4HNSIfPE4EW",
    "email": "rblainey2n@google.ca",
    "picture": "http://dummyimage.com/234x105.png/dddddd/000000"
  }, {
    "full_name": "Lucienne Moores",
    "password": "289SbgP7o",
    "email": "lmoores2o@sakura.ne.jp",
    "picture": "http://dummyimage.com/196x169.png/cc0000/ffffff"
  }, {
    "full_name": "Fremont Ladbrook",
    "password": "xuIjJbE5a2Z",
    "email": "fladbrook2p@about.com",
    "picture": "http://dummyimage.com/172x195.png/dddddd/000000"
  }, {
    "full_name": "Zonnya Urrey",
    "password": "vZyjpX5",
    "email": "zurrey2q@europa.eu",
    "picture": "http://dummyimage.com/120x169.png/ff4444/ffffff"
  }, {
    "full_name": "Ricki Sanders",
    "password": "DCAyXWrQ",
    "email": "rsanders2r@tmall.com",
    "picture": "http://dummyimage.com/173x193.jpg/ff4444/ffffff"
  }]).then(function(){
    console.log('Data successfully added!');
    db.sequelize.close();
  }).catch(function(error) {
    console.log('Error', error)
  });
});