const data = [
  {
    dep: "01",
    reg: 84,
    cheflieu: "01053",
    tncc: 5,
    ncc: "AIN",
    nccenr: "Ain",
    libelle: "Ain"
  },
  {
    dep: "02",
    reg: 32,
    cheflieu: "02408",
    tncc: 5,
    ncc: "AISNE",
    nccenr: "Aisne",
    libelle: "Aisne"
  },
  {
    dep: "03",
    reg: 84,
    cheflieu: "03190",
    tncc: 5,
    ncc: "ALLIER",
    nccenr: "Allier",
    libelle: "Allier"
  },
  {
    dep: "04",
    reg: 93,
    cheflieu: "04070",
    tncc: 4,
    ncc: "ALPES DE HAUTE PROVENCE",
    nccenr: "Alpes-de-Haute-Provence",
    libelle: "Alpes-de-Haute-Provence"
  },
  {
    dep: "05",
    reg: 93,
    cheflieu: "05061",
    tncc: 4,
    ncc: "HAUTES ALPES",
    nccenr: "Hautes-Alpes",
    libelle: "Hautes-Alpes"
  },
  {
    dep: "06",
    reg: 93,
    cheflieu: "06088",
    tncc: 4,
    ncc: "ALPES MARITIMES",
    nccenr: "Alpes-Maritimes",
    libelle: "Alpes-Maritimes"
  },
  {
    dep: "07",
    reg: 84,
    cheflieu: "07186",
    tncc: 5,
    ncc: "ARDECHE",
    nccenr: "Ardèche",
    libelle: "Ardèche"
  },
  {
    dep: "08",
    reg: 44,
    cheflieu: "08105",
    tncc: 4,
    ncc: "ARDENNES",
    nccenr: "Ardennes",
    libelle: "Ardennes"
  },
  {
    dep: "09",
    reg: 76,
    cheflieu: "09122",
    tncc: 5,
    ncc: "ARIEGE",
    nccenr: "Ariège",
    libelle: "Ariège"
  },
  {
    dep: 10,
    reg: 44,
    cheflieu: 10387,
    tncc: 5,
    ncc: "AUBE",
    nccenr: "Aube",
    libelle: "Aube"
  },
  {
    dep: 11,
    reg: 76,
    cheflieu: 11069,
    tncc: 5,
    ncc: "AUDE",
    nccenr: "Aude",
    libelle: "Aude"
  },
  {
    dep: 12,
    reg: 76,
    cheflieu: 12202,
    tncc: 5,
    ncc: "AVEYRON",
    nccenr: "Aveyron",
    libelle: "Aveyron"
  },
  {
    dep: 13,
    reg: 93,
    cheflieu: 13055,
    tncc: 4,
    ncc: "BOUCHES DU RHONE",
    nccenr: "Bouches-du-Rhône",
    libelle: "Bouches-du-Rhône"
  },
  {
    dep: 14,
    reg: 28,
    cheflieu: 14118,
    tncc: 2,
    ncc: "CALVADOS",
    nccenr: "Calvados",
    libelle: "Calvados"
  },
  {
    dep: 15,
    reg: 84,
    cheflieu: 15014,
    tncc: 2,
    ncc: "CANTAL",
    nccenr: "Cantal",
    libelle: "Cantal"
  },
  {
    dep: 16,
    reg: 75,
    cheflieu: 16015,
    tncc: 3,
    ncc: "CHARENTE",
    nccenr: "Charente",
    libelle: "Charente"
  },
  {
    dep: 17,
    reg: 75,
    cheflieu: 17300,
    tncc: 3,
    ncc: "CHARENTE MARITIME",
    nccenr: "Charente-Maritime",
    libelle: "Charente-Maritime"
  },
  {
    dep: 18,
    reg: 24,
    cheflieu: 18033,
    tncc: 2,
    ncc: "CHER",
    nccenr: "Cher",
    libelle: "Cher"
  },
  {
    dep: 19,
    reg: 75,
    cheflieu: 19272,
    tncc: 3,
    ncc: "CORREZE",
    nccenr: "Corrèze",
    libelle: "Corrèze"
  },
  {
    dep: 21,
    reg: 27,
    cheflieu: 21231,
    tncc: 3,
    ncc: "COTE D OR",
    nccenr: "Côte-d'Or",
    libelle: "Côte-d'Or"
  },
  {
    dep: 22,
    reg: 53,
    cheflieu: 22278,
    tncc: 4,
    ncc: "COTES D ARMOR",
    nccenr: "Côtes-d'Armor",
    libelle: "Côtes-d'Armor"
  },
  {
    dep: 23,
    reg: 75,
    cheflieu: 23096,
    tncc: 3,
    ncc: "CREUSE",
    nccenr: "Creuse",
    libelle: "Creuse"
  },
  {
    dep: 24,
    reg: 75,
    cheflieu: 24322,
    tncc: 3,
    ncc: "DORDOGNE",
    nccenr: "Dordogne",
    libelle: "Dordogne"
  },
  {
    dep: 25,
    reg: 27,
    cheflieu: 25056,
    tncc: 2,
    ncc: "DOUBS",
    nccenr: "Doubs",
    libelle: "Doubs"
  },
  {
    dep: 26,
    reg: 84,
    cheflieu: 26362,
    tncc: 3,
    ncc: "DROME",
    nccenr: "Drôme",
    libelle: "Drôme"
  },
  {
    dep: 27,
    reg: 28,
    cheflieu: 27229,
    tncc: 5,
    ncc: "EURE",
    nccenr: "Eure",
    libelle: "Eure"
  },
  {
    dep: 28,
    reg: 24,
    cheflieu: 28085,
    tncc: 1,
    ncc: "EURE ET LOIR",
    nccenr: "Eure-et-Loir",
    libelle: "Eure-et-Loir"
  },
  {
    dep: 29,
    reg: 53,
    cheflieu: 29232,
    tncc: 2,
    ncc: "FINISTERE",
    nccenr: "Finistère",
    libelle: "Finistère"
  },
  {
    dep: "2A",
    reg: 94,
    cheflieu: "2A004",
    tncc: 3,
    ncc: "CORSE DU SUD",
    nccenr: "Corse-du-Sud",
    libelle: "Corse-du-Sud"
  },
  {
    dep: "2B",
    reg: 94,
    cheflieu: "2B033",
    tncc: 3,
    ncc: "HAUTE CORSE",
    nccenr: "Haute-Corse",
    libelle: "Haute-Corse"
  },
  {
    dep: 30,
    reg: 76,
    cheflieu: 30189,
    tncc: 2,
    ncc: "GARD",
    nccenr: "Gard",
    libelle: "Gard"
  },
  {
    dep: 31,
    reg: 76,
    cheflieu: 31555,
    tncc: 3,
    ncc: "HAUTE GARONNE",
    nccenr: "Haute-Garonne",
    libelle: "Haute-Garonne"
  },
  {
    dep: 32,
    reg: 76,
    cheflieu: 32013,
    tncc: 2,
    ncc: "GERS",
    nccenr: "Gers",
    libelle: "Gers"
  },
  {
    dep: 33,
    reg: 75,
    cheflieu: 33063,
    tncc: 3,
    ncc: "GIRONDE",
    nccenr: "Gironde",
    libelle: "Gironde"
  },
  {
    dep: 34,
    reg: 76,
    cheflieu: 34172,
    tncc: 5,
    ncc: "HERAULT",
    nccenr: "Hérault",
    libelle: "Hérault"
  },
  {
    dep: 35,
    reg: 53,
    cheflieu: 35238,
    tncc: 1,
    ncc: "ILLE ET VILAINE",
    nccenr: "Ille-et-Vilaine",
    libelle: "Ille-et-Vilaine"
  },
  {
    dep: 36,
    reg: 24,
    cheflieu: 36044,
    tncc: 5,
    ncc: "INDRE",
    nccenr: "Indre",
    libelle: "Indre"
  },
  {
    dep: 37,
    reg: 24,
    cheflieu: 37261,
    tncc: 1,
    ncc: "INDRE ET LOIRE",
    nccenr: "Indre-et-Loire",
    libelle: "Indre-et-Loire"
  },
  {
    dep: 38,
    reg: 84,
    cheflieu: 38185,
    tncc: 5,
    ncc: "ISERE",
    nccenr: "Isère",
    libelle: "Isère"
  },
  {
    dep: 39,
    reg: 27,
    cheflieu: 39300,
    tncc: 2,
    ncc: "JURA",
    nccenr: "Jura",
    libelle: "Jura"
  },
  {
    dep: 40,
    reg: 75,
    cheflieu: 40192,
    tncc: 4,
    ncc: "LANDES",
    nccenr: "Landes",
    libelle: "Landes"
  },
  {
    dep: 41,
    reg: 24,
    cheflieu: 41018,
    tncc: 2,
    ncc: "LOIR ET CHER",
    nccenr: "Loir-et-Cher",
    libelle: "Loir-et-Cher"
  },
  {
    dep: 42,
    reg: 84,
    cheflieu: 42218,
    tncc: 3,
    ncc: "LOIRE",
    nccenr: "Loire",
    libelle: "Loire"
  },
  {
    dep: 43,
    reg: 84,
    cheflieu: 43157,
    tncc: 3,
    ncc: "HAUTE LOIRE",
    nccenr: "Haute-Loire",
    libelle: "Haute-Loire"
  },
  {
    dep: 44,
    reg: 52,
    cheflieu: 44109,
    tncc: 3,
    ncc: "LOIRE ATLANTIQUE",
    nccenr: "Loire-Atlantique",
    libelle: "Loire-Atlantique"
  },
  {
    dep: 45,
    reg: 24,
    cheflieu: 45234,
    tncc: 2,
    ncc: "LOIRET",
    nccenr: "Loiret",
    libelle: "Loiret"
  },
  {
    dep: 46,
    reg: 76,
    cheflieu: 46042,
    tncc: 2,
    ncc: "LOT",
    nccenr: "Lot",
    libelle: "Lot"
  },
  {
    dep: 47,
    reg: 75,
    cheflieu: 47001,
    tncc: 2,
    ncc: "LOT ET GARONNE",
    nccenr: "Lot-et-Garonne",
    libelle: "Lot-et-Garonne"
  },
  {
    dep: 48,
    reg: 76,
    cheflieu: 48095,
    tncc: 3,
    ncc: "LOZERE",
    nccenr: "Lozère",
    libelle: "Lozère"
  },
  {
    dep: 49,
    reg: 52,
    cheflieu: 49007,
    tncc: 2,
    ncc: "MAINE ET LOIRE",
    nccenr: "Maine-et-Loire",
    libelle: "Maine-et-Loire"
  },
  {
    dep: 50,
    reg: 28,
    cheflieu: 50502,
    tncc: 3,
    ncc: "MANCHE",
    nccenr: "Manche",
    libelle: "Manche"
  },
  {
    dep: 51,
    reg: 44,
    cheflieu: 51108,
    tncc: 3,
    ncc: "MARNE",
    nccenr: "Marne",
    libelle: "Marne"
  },
  {
    dep: 52,
    reg: 44,
    cheflieu: 52121,
    tncc: 3,
    ncc: "HAUTE MARNE",
    nccenr: "Haute-Marne",
    libelle: "Haute-Marne"
  },
  {
    dep: 53,
    reg: 52,
    cheflieu: 53130,
    tncc: 3,
    ncc: "MAYENNE",
    nccenr: "Mayenne",
    libelle: "Mayenne"
  },
  {
    dep: 54,
    reg: 44,
    cheflieu: 54395,
    tncc: 0,
    ncc: "MEURTHE ET MOSELLE",
    nccenr: "Meurthe-et-Moselle",
    libelle: "Meurthe-et-Moselle"
  },
  {
    dep: 55,
    reg: 44,
    cheflieu: 55029,
    tncc: 3,
    ncc: "MEUSE",
    nccenr: "Meuse",
    libelle: "Meuse"
  },
  {
    dep: 56,
    reg: 53,
    cheflieu: 56260,
    tncc: 2,
    ncc: "MORBIHAN",
    nccenr: "Morbihan",
    libelle: "Morbihan"
  },
  {
    dep: 57,
    reg: 44,
    cheflieu: 57463,
    tncc: 3,
    ncc: "MOSELLE",
    nccenr: "Moselle",
    libelle: "Moselle"
  },
  {
    dep: 58,
    reg: 27,
    cheflieu: 58194,
    tncc: 3,
    ncc: "NIEVRE",
    nccenr: "Nièvre",
    libelle: "Nièvre"
  },
  {
    dep: 59,
    reg: 32,
    cheflieu: 59350,
    tncc: 2,
    ncc: "NORD",
    nccenr: "Nord",
    libelle: "Nord"
  },
  {
    dep: 60,
    reg: 32,
    cheflieu: 60057,
    tncc: 5,
    ncc: "OISE",
    nccenr: "Oise",
    libelle: "Oise"
  },
  {
    dep: 61,
    reg: 28,
    cheflieu: 61001,
    tncc: 5,
    ncc: "ORNE",
    nccenr: "Orne",
    libelle: "Orne"
  },
  {
    dep: 62,
    reg: 32,
    cheflieu: 62041,
    tncc: 2,
    ncc: "PAS DE CALAIS",
    nccenr: "Pas-de-Calais",
    libelle: "Pas-de-Calais"
  },
  {
    dep: 63,
    reg: 84,
    cheflieu: 63113,
    tncc: 2,
    ncc: "PUY DE DOME",
    nccenr: "Puy-de-Dôme",
    libelle: "Puy-de-Dôme"
  },
  {
    dep: 64,
    reg: 75,
    cheflieu: 64445,
    tncc: 4,
    ncc: "PYRENEES ATLANTIQUES",
    nccenr: "Pyrénées-Atlantiques",
    libelle: "Pyrénées-Atlantiques"
  },
  {
    dep: 65,
    reg: 76,
    cheflieu: 65440,
    tncc: 4,
    ncc: "HAUTES PYRENEES",
    nccenr: "Hautes-Pyrénées",
    libelle: "Hautes-Pyrénées"
  },
  {
    dep: 66,
    reg: 76,
    cheflieu: 66136,
    tncc: 4,
    ncc: "PYRENEES ORIENTALES",
    nccenr: "Pyrénées-Orientales",
    libelle: "Pyrénées-Orientales"
  },
  {
    dep: 67,
    reg: 44,
    cheflieu: 67482,
    tncc: 2,
    ncc: "BAS RHIN",
    nccenr: "Bas-Rhin",
    libelle: "Bas-Rhin"
  },
  {
    dep: 68,
    reg: 44,
    cheflieu: 68066,
    tncc: 2,
    ncc: "HAUT RHIN",
    nccenr: "Haut-Rhin",
    libelle: "Haut-Rhin"
  },
  {
    dep: 69,
    reg: 84,
    cheflieu: 69123,
    tncc: 2,
    ncc: "RHONE",
    nccenr: "Rhône",
    libelle: "Rhône"
  },
  {
    dep: 70,
    reg: 27,
    cheflieu: 70550,
    tncc: 3,
    ncc: "HAUTE SAONE",
    nccenr: "Haute-Saône",
    libelle: "Haute-Saône"
  },
  {
    dep: 71,
    reg: 27,
    cheflieu: 71270,
    tncc: 0,
    ncc: "SAONE ET LOIRE",
    nccenr: "Saône-et-Loire",
    libelle: "Saône-et-Loire"
  },
  {
    dep: 72,
    reg: 52,
    cheflieu: 72181,
    tncc: 3,
    ncc: "SARTHE",
    nccenr: "Sarthe",
    libelle: "Sarthe"
  },
  {
    dep: 73,
    reg: 84,
    cheflieu: 73065,
    tncc: 3,
    ncc: "SAVOIE",
    nccenr: "Savoie",
    libelle: "Savoie"
  },
  {
    dep: 74,
    reg: 84,
    cheflieu: 74010,
    tncc: 3,
    ncc: "HAUTE SAVOIE",
    nccenr: "Haute-Savoie",
    libelle: "Haute-Savoie"
  },
  {
    dep: 75,
    reg: 11,
    cheflieu: 75056,
    tncc: 0,
    ncc: "PARIS",
    nccenr: "Paris",
    libelle: "Paris"
  },
  {
    dep: 76,
    reg: 28,
    cheflieu: 76540,
    tncc: 3,
    ncc: "SEINE MARITIME",
    nccenr: "Seine-Maritime",
    libelle: "Seine-Maritime"
  },
  {
    dep: 77,
    reg: 11,
    cheflieu: 77288,
    tncc: 0,
    ncc: "SEINE ET MARNE",
    nccenr: "Seine-et-Marne",
    libelle: "Seine-et-Marne"
  },
  {
    dep: 78,
    reg: 11,
    cheflieu: 78646,
    tncc: 4,
    ncc: "YVELINES",
    nccenr: "Yvelines",
    libelle: "Yvelines"
  },
  {
    dep: 79,
    reg: 75,
    cheflieu: 79191,
    tncc: 4,
    ncc: "DEUX SEVRES",
    nccenr: "Deux-Sèvres",
    libelle: "Deux-Sèvres"
  },
  {
    dep: 80,
    reg: 32,
    cheflieu: 80021,
    tncc: 3,
    ncc: "SOMME",
    nccenr: "Somme",
    libelle: "Somme"
  },
  {
    dep: 81,
    reg: 76,
    cheflieu: 81004,
    tncc: 2,
    ncc: "TARN",
    nccenr: "Tarn",
    libelle: "Tarn"
  },
  {
    dep: 82,
    reg: 76,
    cheflieu: 82121,
    tncc: 2,
    ncc: "TARN ET GARONNE",
    nccenr: "Tarn-et-Garonne",
    libelle: "Tarn-et-Garonne"
  },
  {
    dep: 83,
    reg: 93,
    cheflieu: 83137,
    tncc: 2,
    ncc: "VAR",
    nccenr: "Var",
    libelle: "Var"
  },
  {
    dep: 84,
    reg: 93,
    cheflieu: 84007,
    tncc: 2,
    ncc: "VAUCLUSE",
    nccenr: "Vaucluse",
    libelle: "Vaucluse"
  },
  {
    dep: 85,
    reg: 52,
    cheflieu: 85191,
    tncc: 3,
    ncc: "VENDEE",
    nccenr: "Vendée",
    libelle: "Vendée"
  },
  {
    dep: 86,
    reg: 75,
    cheflieu: 86194,
    tncc: 3,
    ncc: "VIENNE",
    nccenr: "Vienne",
    libelle: "Vienne"
  },
  {
    dep: 87,
    reg: 75,
    cheflieu: 87085,
    tncc: 3,
    ncc: "HAUTE VIENNE",
    nccenr: "Haute-Vienne",
    libelle: "Haute-Vienne"
  },
  {
    dep: 88,
    reg: 44,
    cheflieu: 88160,
    tncc: 4,
    ncc: "VOSGES",
    nccenr: "Vosges",
    libelle: "Vosges"
  },
  {
    dep: 89,
    reg: 27,
    cheflieu: 89024,
    tncc: 5,
    ncc: "YONNE",
    nccenr: "Yonne",
    libelle: "Yonne"
  },
  {
    dep: 90,
    reg: 27,
    cheflieu: 90010,
    tncc: 2,
    ncc: "TERRITOIRE DE BELFORT",
    nccenr: "Territoire de Belfort",
    libelle: "Territoire de Belfort"
  },
  {
    dep: 91,
    reg: 11,
    cheflieu: 91228,
    tncc: 5,
    ncc: "ESSONNE",
    nccenr: "Essonne",
    libelle: "Essonne"
  },
  {
    dep: 92,
    reg: 11,
    cheflieu: 92050,
    tncc: 4,
    ncc: "HAUTS DE SEINE",
    nccenr: "Hauts-de-Seine",
    libelle: "Hauts-de-Seine"
  },
  {
    dep: 93,
    reg: 11,
    cheflieu: 93008,
    tncc: 3,
    ncc: "SEINE SAINT DENIS",
    nccenr: "Seine-Saint-Denis",
    libelle: "Seine-Saint-Denis"
  },
  {
    dep: 94,
    reg: 11,
    cheflieu: 94028,
    tncc: 2,
    ncc: "VAL DE MARNE",
    nccenr: "Val-de-Marne",
    libelle: "Val-de-Marne"
  },
  {
    dep: 95,
    reg: 11,
    cheflieu: 95500,
    tncc: 2,
    ncc: "VAL D OISE",
    nccenr: "Val-d'Oise",
    libelle: "Val-d'Oise"
  },
  {
    dep: 971,
    reg: "01",
    cheflieu: 97105,
    tncc: 3,
    ncc: "GUADELOUPE",
    nccenr: "Guadeloupe",
    libelle: "Guadeloupe"
  },
  {
    dep: 972,
    reg: "02",
    cheflieu: 97209,
    tncc: 3,
    ncc: "MARTINIQUE",
    nccenr: "Martinique",
    libelle: "Martinique"
  },
  {
    dep: 973,
    reg: "03",
    cheflieu: 97302,
    tncc: 3,
    ncc: "GUYANE",
    nccenr: "Guyane",
    libelle: "Guyane"
  },
  {
    dep: 974,
    reg: "04",
    cheflieu: 97411,
    tncc: 0,
    ncc: "LA REUNION",
    nccenr: "La Réunion",
    libelle: "La Réunion"
  },
  {
    dep: 976,
    reg: "06",
    cheflieu: 97608,
    tncc: 0,
    ncc: "MAYOTTE",
    nccenr: "Mayotte",
    libelle: "Mayotte"
  }
];

export default data.reduce((a, b) => `${a} ${b.ncc}`, "");
