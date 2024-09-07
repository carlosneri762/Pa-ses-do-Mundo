const dados = [
    {
        nome: "França",
        capital: "Paris",
        lingua: "Francês",
        moeda: "Euro",
        populacao: 67061000,
        area: 640679,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/220px-Flag_of_France.svg.png"
    },
    {
        nome: "Alemanha",
        capital: "Berlim",
        lingua: "Alemão",
        moeda: "Euro",
        populacao: 83175000,
        area: 357021,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/220px-Flag_of_Germany.svg.png"
    },
    {
        nome: "Reino Unido",
        capital: "Londres",
        lingua: "Inglês",
        moeda: "Libra Esterlina",
        populacao: 68269000,
        area: 243610,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/220px-Flag_of_the_United_Kingdom.svg.png"
    },
    {
        nome: "Irlanda",
        capital: "Dublin",
        lingua: "Irlandês, Inglês",
        moeda: "Euro",
        populacao: 5000000,
        area: 70273,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Ireland.svg/220px-Flag_of_Ireland.svg.png"
    },
    {
        nome: "Países Baixos",
        capital: "Amsterdã",
        lingua: "Neerlandês",
        moeda: "Euro",
        populacao: 17441000,
        area: 41543,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/220px-Flag_of_the_Netherlands.svg.png"
    },
    {
        nome: "Bélgica",
        capital: "Bruxelas",
        lingua: "Francês, Neerlandês, Alemão",
        moeda: "Euro",
        populacao: 11650000,
        area: 30528,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/220px-Flag_of_Belgium.svg.png"
    },
    {
        nome: "Luxemburgo",
        capital: "Luxemburgo",
        lingua: "Francês, Alemão, Luxemburguês",
        moeda: "Euro",
        populacao: 645300,
        area: 2586,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/220px-Flag_of_Luxembourg.svg.png"
    },
    {
        nome: "Mônaco",
        capital: "Mônaco",
        lingua: "Francês",
        moeda: "Euro",
        populacao: 39244,
        area: 2.02,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flag_of_Monaco.svg/220px-Flag_of_Monaco.svg.png"
    },
    {
        nome: "Andorra",
        capital: "Andorra la Vella",
        lingua: "Catalão",
        moeda: "Euro",
        populacao: 77265,
        area: 468,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/220px-Flag_of_Andorra.svg.png"
    },
    {
        nome: "Suécia",
        capital: "Estocolmo",
        lingua: "Sueco",
        moeda: "Coroa Sueca",
        populacao: 10353442,
        area: 447425,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/220px-Flag_of_Sweden.svg.png"
      },
      {
        nome: "Noruega",
        capital: "Oslo",
        lingua: "Norueguês",
        moeda: "Coroa Norueguesa",
        populacao: 5421241,
        area: 385199,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_Norway.svg/220px-Flag_of_Norway.svg.png"
      },
      {
        nome: "Dinamarca",
        capital: "Copenhague",
        lingua: "Dinamarquês",
        moeda: "Coroa Dinamarquesa",
        populacao: 5831404,
        area: 43094,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/220px-Flag_of_Denmark.svg.png"
      },
      {
        nome: "Finlândia",
        capital: "Helsinque",
        lingua: "Finlandês",
        moeda: "Euro",
        populacao: 5540720,
        area: 338424,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/220px-Flag_of_Finland.svg.png"
      },
      {
        nome: "Islândia",
        capital: "Reykjavík",
        lingua: "Islandês",
        moeda: "Coroa Islandesa",
        populacao: 364253,
        area: 103000,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/220px-Flag_of_Iceland.svg.png"
      },
      {
        nome: "Ucrânia",
        capital: "Kiev",
        lingua: "Ucraniano",
        moeda: "Hryvnia",
        populacao: 41499900,
        area: 603550,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/220px-Flag_of_Ukraine.svg.png"
      },
      {
        nome: "Bielorrússia",
        capital: "Minsk",
        lingua: "Bielorrusso",
        moeda: "Rublo Bielorrusso",
        populacao: 9449323,
        area: 207600,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/220px-Flag_of_Belarus.svg.png"
      },
      {
        nome: "Moldávia",
        capital: "Chisinau",
        lingua: "Moldavo",
        moeda: "Leu Moldavo",
        populacao: 2657637,
        area: 33846,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/220px-Flag_of_Moldova.svg.png"
      },
      {
        nome: "Romênia",
        capital: "Bucareste",
        lingua: "Romeno",
        moeda: "Leu Romeno",
        populacao: 19237691,
        area: 238397,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/220px-Flag_of_Romania.svg.png"
      },
      {
        nome: "Bulgária",
        capital: "Sófia",
        lingua: "Búlgaro",
        moeda: "Lev Búlgaro",
        populacao: 6951482,
        area: 110879,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_Bulgaria.svg/220px-Flag_of_Bulgaria.svg.png"
      },
      {
        nome: "Grécia",
        capital: "Atenas",
        lingua: "Grego",
        moeda: "Euro",
        populacao: 10423054,
        area: 131957,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/220px-Flag_of_Greece.svg.png"
      },
      {
        nome: "Albânia",
        capital: "Tirana",
        lingua: "Albanês",
        moeda: "Lek Albanês",
        populacao: 2877797,
        area: 28748,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/220px-Flag_of_Albania.svg.png"
      },
      {
        nome: "Macedônia do Norte",
        capital: "Skopje",
        lingua: "Macedônio",
        moeda: "Dinar Macedônio",
        populacao: 2083459,
        area: 25713,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_North_Macedonia.svg/220px-Flag_of_North_Macedonia.svg.png"
      },
      {
        nome: "Kosovo",
        capital: "Pristina",
        lingua: "Albanês, Servo-Croata",
        moeda: "Euro",
        populacao: 1831000,
        area: 10887,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Flag_of_Kosovo.svg/220px-Flag_of_Kosovo.svg.png"
      },
      {
        nome: "Sérvia",
        capital: "Belgrado",
        lingua: "Sérvio",
        moeda: "Dinar Sérvio",
        populacao: 8775576,
        area: 88361,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Serbia.svg/220px-Flag_of_Serbia.svg.png"
      },
      {
        nome: "Montenegro",
        capital: "Podgorica",
        lingua: "Montenegrino",
        moeda: "Euro",
        populacao: 622359,
        area: 13812,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Montenegro.svg/220px-Flag_of_Montenegro.svg.png"
      },
      {
        nome: "Croácia",
        capital: "Zagreb",
        lingua: "Croata",
        moeda: "Kuna Croata",
        populacao: 4105267,
        area: 56594,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/220px-Flag_of_Croatia.svg.png"
      },
      {
        nome: "Bósnia e Herzegovina",
        capital: "Sarajevo",
        lingua: "Bósnio, Croata, Servo",
        moeda: "Marco Bósnio",
        populacao: 3280819,
        area: 51209,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_Bosnia_and_Herzegovina.svg/220px-Flag_of_Bosnia_and_Herzegovina.svg.png"
      },
      {
        nome: "Eslovênia",
        capital: "Liubliana",
        lingua: "Esloveno",
        moeda: "Euro",
        populacao: 2078654,
        area: 20273,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Slovenia.svg/220px-Flag_of_Slovenia.svg.png"
      },
      {
        nome: "Estônia",
        capital: "Tallinn",
        lingua: "Estoniano",
        moeda: "Euro",
        populacao: 1326535,
        area: 45227,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/220px-Flag_of_Estonia.svg.png"
      },
      {
        nome: "Letônia",
        capital: "Riga",
        lingua: "Letão",
        moeda: "Euro",
        populacao: 1886198,
        area: 64559,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/220px-Flag_of_Latvia.svg.png"
      },
      {
        nome: "Lituânia",
        capital: "Vilnius",
        lingua: "Lituano",
        moeda: "Euro",
        populacao: 2722264,
        area: 65300,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/220px-Flag_of_Lithuania.svg.png"
      },
      {
        nome: "Austrália",
        capital: "Canberra",
        lingua: "Inglês",
        moeda: "Dólar australiano",
        populacao: 25500111,
        area: 7692024,
        continente: "Oceania",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia.svg/220px-Flag_of_Australia.svg.png"
      },
      {
        nome: "Nova Zelândia",
        capital: "Wellington",
        lingua: "Inglês, Maori",
        moeda: "Dólar neozelandês",
        populacao: 5120000,
        area: 268021,
        continente: "Oceania",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/220px-Flag_of_New_Zealand.svg.png"
      },
      {
        nome: "Papua-Nova Guiné",
        capital: "Port Moresby",
        lingua: "Tok Pisin, Inglês",
        moeda: "Kina",
        populacao: 8947027,
        area: 462840,
        continente: "Oceania",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Papua_New_Guinea.svg/220px-Flag_of_Papua_New_Guinea.svg.png"
      },
      {
        nome: "Fiji",
        capital: "Suva",
        lingua: "Fijiano, Inglês",
        moeda: "Dólar fijiano",
        populacao: 922444,
        area: 18272,
        continente: "Oceania",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Fiji.svg/220px-Flag_of_Fiji.svg.png"
      },
      {
        nome: "Ilhas Salomão",
        capital: "Honiara",
        lingua: "Inglês, idiomas melanésios",
        moeda: "Dólar das Ilhas Salomão",
        populacao: 686878,
        area: 28400,
        continente: "Oceania",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Solomon_Islands.svg/220px-Flag_of_the_Solomon_Islands.svg.png"
      },
      {
        nome: "Vanuatu",
        capital: "Port Vila",
        lingua: "Bislama, inglês, francês",
        moeda: "Vatu",
        populacao: 307150,
        area: 12189,
        continente: "Oceania",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Vanuatu.svg/220px-Flag_of_Vanuatu.svg.png"
      },
      {
        nome: "Samoa",
        capital: "Apia",
        lingua: "Samoano, inglês",
        moeda: "Tala",
        populacao: 198410,
        area: 2842,
        continente: "Oceania",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Flag_of_Samoa.svg/220px-Flag_of_Samoa.svg.png"
      },
      {
        nome: "Tonga",
        capital: "Nuku'alofa",
        lingua: "Tongan, inglês",
        moeda: "Paʻanga",
        populacao: 105897,
        area: 748,
        continente: "Oceania",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tonga.svg/220px-Flag_of_Tonga.svg.png"
      },
      {
        nome: "Micronésia",
        capital: "Palikir",
        lingua: "Inglês",
        moeda: "Dólar americano",
        populacao: 115021,
        area: 702,
        continente: "Oceania",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Micronesia.svg/220px-Flag_of_Micronesia.svg.png"
      },
      {
        nome: "Palau",
        capital: "Ngerulmud",
        lingua: "Inglês, Palauan",
        moeda: "Dólar americano",
        populacao: 18095,
        area: 459,
        continente: "Oceania",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Palau.svg/220px-Flag_of_Palau.svg.png"
      },
      {
        nome: "Nauru",
        capital: "Yaren",
        lingua: "Nauruano, inglês",
        moeda: "Dólar australiano",
        populacao: 11347,
        area: 21,
        continente: "Oceania",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Nauru.svg/220px-Flag_of_Nauru.svg.png"
      },
      {
        nome: "Tuvalu",
        capital: "Funafuti",
        lingua: "Tuvaluano, inglês",
        moeda: "Dólar australiano",
        populacao: 11792,
        area: 26,
        continente: "Oceania",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tuvalu.svg/220px-Flag_of_Tuvalu.svg.png"
      },
      {
        nome: "Kiribati",
        capital: "Tarawa do Sul",
        lingua: "Gilbertese, inglês",
        moeda: "Dólar australiano",
        populacao: 119944,
        area: 811,
        continente: "Oceania",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Kiribati.svg/220px-Flag_of_Kiribati.svg.png"
      },
      {
        nome: "Ilhas Marshall",
        capital: "Majuro",
        lingua: "Marshallês, inglês",
        moeda: "Dólar americano",
        populacao: 59194,
        area: 181,
        continente: "Oceania",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Flag_of_the_Marshall_Islands.svg/220px-Flag_of_the_Marshall_Islands.svg.png"
      },
      {
        nome: "Canadá",
        capital: "Ottawa",
        lingua: "Inglês, Francês",
        moeda: "Dólar canadense",
        populacao: 38005238,
        area: 9984670,
        continente: "América do Norte",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/220px-Flag_of_Canada.svg.png"
      },
      {
        nome: "Estados Unidos",
        capital: "Washington, D.C.",
        lingua: "Inglês",
        moeda: "Dólar americano",
        populacao: 331002651,
        area: 9833517,
        continente: "América do Norte",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/250px-Flag_of_the_United_States.svg.png"
    
      },
      {
        nome: "México",
        capital: "Cidade do México",
        lingua: "Espanhol",
        moeda: "Peso mexicano",
        populacao: 128932753,
        area: 1964375,
        continente: "América do Norte",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Mexico.svg/220px-Flag_of_Mexico.svg.png"
      },
      {
        nome: "Guatemala",
        capital: "Cidade da Guatemala",
        lingua: "Espanhol",
        moeda: "Quetzal",
        populacao: 17915026,
        area: 108890,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/220px-Flag_of_Guatemala.svg.png"
      },
      {
        nome: "Belize",
        capital: "Belmopan",
        lingua: "Inglês, espanhol",
        moeda: "Dólar belizeño",
        populacao: 411934,
        area: 22966,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Belize.svg/220px-Flag_of_Belize.svg.png"
      },
      {
        nome: "Honduras",
        capital: "Tegucigalpa",
        lingua: "Espanhol",
        moeda: "Lempira",
        populacao: 9904327,
        area: 112492,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_Honduras.svg/220px-Flag_of_Honduras.svg.png"
      },
      {
        nome: "El Salvador",
        capital: "San Salvador",
        lingua: "Espanhol",
        moeda: "Dólar americano",
        populacao: 6486150,
        area: 21041,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/220px-Flag_of_El_Salvador.svg.png"
      },
      {
        nome: "Nicarágua",
        capital: "Manágua",
        lingua: "Espanhol",
        moeda: "Córdoba",
        populacao: 6624554,
        area: 130375,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/220px-Flag_of_Nicaragua.svg.png"
      },
      {
        nome: "Costa Rica",
        capital: "San José",
        lingua: "Espanhol",
        moeda: "Colón",
        populacao: 5105100,
        area: 51100,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica.svg/220px-Flag_of_Costa_Rica.svg.png"
      },
      {
        nome: "Panamá",
        capital: "Cidade do Panamá",
        lingua: "Espanhol",
        moeda: "Balboa",
        populacao: 4314768,
        area: 75517,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/220px-Flag_of_Panama.svg.png"
      },
      {
        nome: "Cuba",
        capital: "Havana",
        lingua: "Espanhol",
        moeda: "Peso cubano",
        populacao: 11332368,
        area: 109884,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Cuba.svg/220px-Flag_of_Cuba.svg.png"
      },
      {
        nome: "República Dominicana",
        capital: "Santo Domingo",
        lingua: "Espanhol",
        moeda: "Peso dominicano",
        populacao: 11190927,
        area: 48730,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_the_Dominican_Republic.svg/220px-Flag_of_the_Dominican_Republic.svg.png"
      },
      {
        nome: "Haiti",
        capital: "Porto Príncipe",
        lingua: "Criolo haitiano, francês",
        moeda: "Gourde",
        populacao: 11402533,
        area: 27750,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/220px-Flag_of_Haiti.svg.png"
      },
      {
        nome: "Jamaica",
        capital: "Kingston",
        lingua: "Inglês",
        moeda: "Dólar jamaicano",
        populacao: 2961161,
        area: 10991,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Jamaica.svg/220px-Flag_of_Jamaica.svg.png"
      },
      {
        nome: "Bahamas",
        capital: "Nassau",
        lingua: "Inglês",
        moeda: "Dólar bahamense",
        populacao: 393243,
        area: 13943,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_the_Bahamas.svg/220px-Flag_of_the_Bahamas.svg.png"
      },
      {
        nome: "Barbados",
        capital: "Bridgetown",
        lingua: "Inglês",
        moeda: "Dólar de Barbados",
        populacao: 287025,
        area: 431,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Barbados.svg/220px-Flag_of_Barbados.svg.png"
      },
      {
        nome: "Trinidad e Tobago",
        capital: "Porto de Espanha",
        lingua: "Inglês",
        moeda: "Dólar de Trinidad e Tobago",
        populacao: 1399491,
        area: 5131,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Trinidad_and_Tobago.svg/220px-Flag_of_Trinidad_and_Tobago.svg.png"
      },
      {
        nome: "Saint Kitts e Nevis",
        capital: "Basseterre",
        lingua: "Inglês",
        moeda: "Dólar do Caribe Oriental",
        populacao: 53192,
        area: 261,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Saint_Kitts_and_Nevis.svg/220px-Flag_of_Saint_Kitts_and_Nevis.svg.png"
      },
      {
        nome: "Antígua e Barbuda",
        capital: "Saint John's",
        lingua: "Inglês",
        moeda: "Dólar do Caribe Oriental",
        populacao: 97928,
        area: 442,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Antigua_and_Barbuda.svg/220px-Flag_of_Antigua_and_Barbuda.svg.png"
      },
      {
        nome: "Dominica",
        capital: "Roseau",
        lingua: "Inglês",
        moeda: "Dólar do Caribe Oriental",
        populacao: 71931,
        area: 751,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Flag_of_Dominica.svg/220px-Flag_of_Dominica.svg.png"
      },
      {
        nome: "São Vicente e Granadinas",
        capital: "Kingstown",
        lingua: "Inglês",
        moeda: "Dólar do Caribe Oriental",
        populacao: 110947,
        area: 389,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Saint_Vincent_and_the_Grenadines.svg/220px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png"
      },
      {
        nome: "Granada",
        capital: "Saint George's",
        lingua: "Inglês",
        moeda: "Dólar do Caribe Oriental",
        populacao: 112519,
        area: 344,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Saint_Vincent_and_the_Grenadines.svg/220px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png"
      },
      {
        nome: "Santa Lúcia",
        capital: "Castries",
        lingua: "Inglês",
        moeda: "Dólar do Caribe Oriental",
        populacao: 186138,
        area: 616,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/220px-Flag_of_Saint_Lucia.svg.png"
      },
      {
        nome: "Aruba",
        capital: "Oranjestad",
        lingua: "Papiamento, holandês, inglês",
        moeda: "Florim arubano",
        populacao: 106765,
        area: 180,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Aruba.svg/220px-Flag_of_Aruba.svg.png"
      },
      {
        nome: "Curaçao",
        capital: "Willemstad",
        lingua: "Papiamento, holandês, inglês",
        moeda: "Florim de Curaçao",
        populacao: 160000,
        area: 444,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Curaçao.svg/220px-Flag_of_Curaçao.svg.png"
      },
      {
        nome: "Sint Maarten",
        capital: "Philipsburg",
        lingua: "Holandês, inglês, papiamento",
        moeda: "Dólar americano",
        populacao: 41000,
        area: 34.4,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Flag_of_Sint_Maarten.svg/220px-Flag_of_Sint_Maarten.svg.png"
      },
      {
        nome: "Bonaire",
        capital: "Kralendijk",
        lingua: "Papiamento, holandês, inglês",
        moeda: "Dólar americano",
        populacao: 19991,
        area: 288,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Curaçao.svg/220px-Flag_of_Curaçao.svg.png"
      },
      {
        nome: "Sint Eustatius",
        capital: "Oranjestad",
        lingua: "Holandês, inglês, papiamento",
        moeda: "Dólar americano",
        populacao: 3000,
        area: 21,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Flag_of_Sint_Maarten.svg/220px-Flag_of_Sint_Maarten.svg.png"
      },
      {
        nome: "Saba",
        capital: "The Bottom",
        lingua: "Holandês, inglês, papiamento",
        moeda: "Dólar americano",
        populacao: 1900,
        area: 13,
        continente: "América Central",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Flag_of_Sint_Maarten.svg/220px-Flag_of_Sint_Maarten.svg.png"
      },
      {
        nome: "Colômbia",
        capital: "Bogotá",
        lingua: "Espanhol",
        moeda: "Peso colombiano",
        populacao: 51000000,
        area: 1141748,
        continente: "América do Sul",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Colombia.svg/220px-Flag_of_Colombia.svg.png"
      },
      {
        nome: "Venezuela",
        capital: "Caracas",
        lingua: "Espanhol",
        moeda: "Bolívar soberano",
        populacao: 28000000,
        area: 916445,
        continente: "América do Sul",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Venezuela.svg/220px-Flag_of_Venezuela.svg.png"
      },
      {
        nome: "Guiana",
        capital: "Georgetown",
        lingua: "Inglês",
        moeda: "Dólar guianense",
        populacao: 790000,
        area: 214969,
        continente: "América do Sul",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Guyana.svg/220px-Flag_of_Guyana.svg.png"
      },
      {
        nome: "Suriname",
        capital: "Paramaribo",
        lingua: "Neerlandês",
        moeda: "Dólar surinamês",
        populacao: 590000,
        area: 163270,
        continente: "América do Sul",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Suriname.svg/220px-Flag_of_Suriname.svg.png"
      },
      {
        nome: "Brasil",
        capital: "Brasília",
        lingua: "Português",
        moeda: "Real",
        populacao: 215000000,
        area: 8515767,
        continente: "América do Sul",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/220px-Flag_of_Brazil.svg.png"
      },
      {
        nome: "Equador",
        capital: "Quito",
        lingua: "Espanhol",
        moeda: "Dólar americano",
        populacao: 17700000,
        area: 283561,
        continente: "América do Sul",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Ecuador.svg/220px-Flag_of_Ecuador.svg.png"
      },
      {
        nome: "Peru",
        capital: "Lima",
        lingua: "Espanhol",
        moeda: "Sol",
        populacao: 33200000,
        area: 1285216,
        continente: "América do Sul",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/220px-Flag_of_Peru.svg.png"
      },
      {
        nome: "Bolívia",
        capital: "La Paz (sede de governo), Sucre (sede judicial)",
        lingua: "Espanhol, quechua, aimará",
        moeda: "Boliviano",
        populacao: 11700000,
        area: 1098581,
        continente: "América do Sul",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/220px-Flag_of_Bolivia.svg.png"
      },
      {
        nome: "Chile",
        capital: "Santiago",
        lingua: "Espanhol",
        moeda: "Peso chileno",
        populacao: 19100000,
        area: 756102,
        continente: "América do Sul",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Chile.svg/220px-Flag_of_Chile.svg.png"
      },
      {
        nome: "Argentina",
        capital: "Buenos Aires",
        lingua: "Espanhol",
        moeda: "Peso argentino",
        populacao: 45300000,
        area: 2780400,
        continente: "América do Sul",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/220px-Flag_of_Argentina.svg.png"
      },
      {
        nome: "Uruguai",
        capital: "Montevidéu",
        lingua: "Espanhol",
        moeda: "Peso uruguaio",
        populacao: 3500000,
        area: 181034,
        continente: "América do Sul",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/220px-Flag_of_Uruguay.svg.png"
      },
      {
        nome: "Paraguai",
        capital: "Assunção",
        lingua: "Espanhol, guarani",
        moeda: "Guarani",
        populacao: 7100000,
        area: 406752,
        continente: "América do Sul",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Paraguay.svg/220px-Flag_of_Paraguay.svg.png"
      },
      {
        nome: "Afeganistão",
        capital: "Cabul",
        lingua: "Pashto, dari",
        moeda: "Afegani",
        populacao: 40218234,
        area: 652230,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Afghanistan.svg/220px-Flag_of_Afghanistan.svg.png"
      },
      {
        nome: "Arábia Saudita",
        capital: "Riad",
        lingua: "Árabe",
        moeda: "Riyal saudita",
        populacao: 35112628,
        area: 2149690,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/220px-Flag_of_Saudi_Arabia.svg.png"
      },
      {
        nome: "Armênia",
        capital: "Yerevan",
        lingua: "Armênio",
        moeda: "Dram armênio",
        populacao: 2963234,
        area: 29743,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/220px-Flag_of_Armenia.svg.png"
      },
      {
        nome: "Azerbaijão",
        capital: "Baku",
        lingua: "Azeri",
        moeda: "Manat azerbaijano",
        populacao: 10139135,
        area: 86600,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/220px-Flag_of_Azerbaijan.svg.png"
      },
      {
        nome: "Bahrein",
        capital: "Manama",
        lingua: "Árabe",
        moeda: "Dinar bahrainita",
        populacao: 1703368,
        area: 765,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/220px-Flag_of_Bahrain.svg.png"
      },
      {
        nome: "Bangladesh",
        capital: "Daca",
        lingua: "Bengali",
        moeda: "Taka",
        populacao: 164689060,
        area: 147570,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Bangladesh.svg/220px-Flag_of_Bangladesh.svg.png"
      },
      {
        nome: "Brunei",
        capital: "Bandar Seri Begawan",
        lingua: "Malaio",
        moeda: "Dólar de Brunei",
        populacao: 437483,
        area: 5765,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/220px-Flag_of_Brunei.svg.png"
      },
      {
        nome: "Butão",
        capital: "Timbu",
        lingua: "Dzongkha",
        moeda: "Ngultrum",
        populacao: 897374,
        area: 38394,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/220px-Flag_of_Bhutan.svg.png"
      },
      {
        nome: "Camboja",
        capital: "Phnom Penh",
        lingua: "Khmer",
        moeda: "Riel",
        populacao: 16718971,
        area: 181035,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/220px-Flag_of_Cambodia.svg.png"
      },
      {
        nome: "Cazaquistão",
        capital: "Nur-Sultan",
        lingua: "Cazaque, russo",
        moeda: "Tenge",
        populacao: 19044597,
        area: 2724900,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Flag_of_Kazakhstan.svg/220px-Flag_of_Kazakhstan.svg.png"
      },
      {
        nome: "Chipre",
        capital: "Nicósia",
        lingua: "Grego, turco",
        moeda: "Euro",
        populacao: 1207361,
        area: 9251,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Cyprus.svg/220px-Flag_of_Cyprus.svg.png"
      },
      {
        nome: "Coreia do Norte",
        capital: "Pionyang",
        lingua: "Coreano",
        moeda: "Won norte-coreano",
        populacao: 25778815,
        area: 120538,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Flag_of_North_Korea.svg/220px-Flag_of_North_Korea.svg.png"
      },
      {
        nome: "Coreia do Sul",
        capital: "Seul",
        lingua: "Coreano",
        moeda: "Won sul-coreano",
        populacao: 51849149,
        area: 99720,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/220px-Flag_of_South_Korea.svg.png"
      },
      {
        nome: "Emirados Árabes Unidos",
        capital: "Abu Dhabi",
        lingua: "Árabe",
        moeda: "Dirham dos Emirados Árabes Unidos",
        populacao: 9890400,
        area: 83600,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Arab_Emirates.svg/220px-Flag_of_the_United_Arab_Emirates.svg.png"
      },
      {
        nome: "Filipinas",
        capital: "Manila",
        lingua: "Filipino, inglês",
        moeda: "Peso filipino",
        populacao: 110327997,
        area: 300000,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_the_Philippines.svg/220px-Flag_of_the_Philippines.svg.png"
      },
      {
        nome: "Geórgia",
        capital: "Tbilisi",
        lingua: "Georgiano",
        moeda: "Lari georgiano",
        populacao: 3720385,
        area: 69700,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/220px-Flag_of_Georgia.svg.png"
      },
      {
        nome: "Iraque",
        capital: "Bagdá",
        lingua: "Árabe, curdo",
        moeda: "Dinar iraquiano",
        populacao: 40904500,
        area: 438317,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Iraq.svg/220px-Flag_of_Iraq.svg.png"
      },
      {
        nome: "Irã",
        capital: "Teerã",
        lingua: "Persa",
        moeda: "Rial iraniano",
        populacao: 85031932,
        area: 1648195,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Iran.svg/220px-Flag_of_Iran.svg.png"
      },
      {
        nome: "Israel",
        capital: "Jerusalém",
        lingua: "Hebraico, árabe",
        moeda: "Novo shekel israelense",
        populacao: 9345000,
        area: 22072,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/220px-Flag_of_Israel.svg.png"
      },
      {
        nome: "Japão",
        capital: "Tóquio",
        lingua: "Japonês",
        moeda: "Iene",
        populacao: 126508476,
        area: 377975,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/220px-Flag_of_Japan.svg.png"
      },
      {
        nome: "Jordânia",
        capital: "Amã",
        lingua: "Árabe",
        moeda: "Dinar jordaniano",
        populacao: 10203140,
        area: 89342,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/220px-Flag_of_Jordan.svg.png"
      },
      {
        nome: "Kuwait",
        capital: "Cidade do Kuwait",
        lingua: "Árabe",
        moeda: "Dinar kuwaitiano",
        populacao: 4205759,
        area: 17818,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Kuwait.svg/220px-Flag_of_Kuwait.svg.png"
      },
      {
        nome: "Laos",
        capital: "Vientiane",
        lingua: "Lao",
        moeda: "Kip",
        populacao: 7323225,
        area: 236800,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/220px-Flag_of_Laos.svg.png"
      },
      {
        nome: "Líbano",
        capital: "Beirute",
        lingua: "Árabe, francês",
        moeda: "Libra libanesa",
        populacao: 6825443,
        area: 10452,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Lebanon.svg/220px-Flag_of_Lebanon.svg.png"
      },
      {
        nome: "Malásia",
        capital: "Kuala Lumpur",
        lingua: "Malaio, inglês",
        moeda: "Ringgit malaio",
        populacao: 33100286,
        area: 330803,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_Malaysia.svg/220px-Flag_of_Malaysia.svg.png"
      },
      {
        nome: "Maldivas",
        capital: "Malé",
        lingua: "Divehi",
        moeda: "Rupia das Maldivas",
        populacao: 540544,
        area: 300,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_the_Maldives.svg/220px-Flag_of_the_Maldives.svg.png"
      },
      {
        nome: "Mianmar (Burma)",
        capital: "Naypyidaw",
        lingua: "Birmanês",
        moeda: "Kyat",
        populacao: 54409794,
        area: 676578,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Myanmar.svg/220px-Flag_of_Myanmar.svg.png"
      },
      {
        nome: "Mongólia",
        capital: "Ulaanbaatar",
        lingua: "Mongol",
        moeda: "Tugrik",
        populacao: 3327291,
        area: 1566500,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Flag_of_Mongolia.svg/220px-Flag_of_Mongolia.svg.png"
      },
      {
        nome: "Nepal",
        capital: "Kathmandu",
        lingua: "Nepalês",
        moeda: "Rupia nepalesa",
        populacao: 29679484,
        area: 147181,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_Nepal.svg/220px-Flag_of_Nepal.svg.png"
      },
      {
        nome: "Omã",
        capital: "Mascate",
        lingua: "Árabe",
        moeda: "Rial omaní",
        populacao: 5106344,
        area: 309500,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Oman.svg/220px-Flag_of_Oman.svg.png"
      },
      {
        nome: "Paquistão",
        capital: "Islamabad",
        lingua: "Urdu, inglês",
        moeda: "Rupia paquistanesa",
        populacao: 220892340,
        area: 881913,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/220px-Flag_of_Pakistan.svg.png"
      },
      {
        nome: "Palestina",
        capital: "Ramallah (de facto), Jerusalém (declarada)",
        lingua: "Árabe",
        moeda: "Novo shekel israelense, dinar jordaniano",
        populacao: 5100745,
        area: 6220,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Palestine.svg/220px-Flag_of_Palestine.svg.png"
      },
      {
        nome: "Qatar",
        capital: "Doha",
        lingua: "Árabe",
        moeda: "Riyal catari",
        populacao: 2881061,
        area: 11586,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Flag_of_Qatar.svg/220px-Flag_of_Qatar.svg.png"
      },
      {
        nome: "Rússia",
        capital: "Moscou",
        lingua: "Russo",
        moeda: "Rublo russo",
        populacao: 146085000,
        area: 17098242,
        continente: "Eurásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/220px-Flag_of_Russia.svg.png"
      },
      {
        nome: "Síria",
        capital: "Damasco",
        lingua: "Árabe",
        moeda: "Libra síria",
        populacao: 18270000,
        area: 185180,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Syria.svg/220px-Flag_of_Syria.svg.png"
      },
      {
        nome: "Taiwan (República da China)",
        capital: "Taipei",
        lingua: "Chinês",
        moeda: "Novo dólar taiwanês",
        populacao: 23816257,
        area: 36193,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/220px-Flag_of_the_Republic_of_China.svg.png"
      },
      {
        nome: "Tailândia",
        capital: "Bangcoc",
        lingua: "Tailandês",
        moeda: "Baht",
        populacao: 69799978,
        area: 513120,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/220px-Flag_of_Thailand.svg.png"
      },
      {
        nome: "Timor-Leste",
        capital: "Dili",
        lingua: "Tetum, português",
        moeda: "Dólar americano",
        populacao: 1342800,
        area: 15007,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_East_Timor.svg/220px-Flag_of_East_Timor.svg.png"
      },
      {
        nome: "Turcomenistão",
        capital: "Asgabate",
        lingua: "Turcomano",
        moeda: "Manat turcomeno",
        populacao: 6031187,
        area: 488100,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Turkmenistan.svg/220px-Flag_of_Turkmenistan.svg.png"
      },
      {
        nome: "Turquia",
        capital: "Ancara",
        lingua: "Turco",
        moeda: "Lira turca",
        populacao: 85341392,
        area: 783562,
        continente: "Eurásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Turkey.svg/220px-Flag_of_Turkey.svg.png"
      },
      {
        nome: "Uzbequistão",
        capital: "Tashkent",
        lingua: "Uzbeque",
        moeda: "Sum uzbeque",
        populacao: 34232050,
        area: 448978,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_Uzbekistan.svg/220px-Flag_of_Uzbekistan.svg.png"
      },
      {
        nome: "Vietnã",
        capital: "Hanói",
        lingua: "Vietnamita",
        moeda: "Dong vietnamita",
        populacao: 98540416,
        area: 331212,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/220px-Flag_of_Vietnam.svg.png"
      },
      {
        nome: "Sri Lanka",
        capital: "Sri Jayawardenepura Kotte",
        lingua: "Sinhala, tâmil",
        moeda: "Rupia do Sri Lanka",
        populacao: 21919000,
        area: 65610,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/220px-Flag_of_Sri_Lanka.svg.png"
      },
      {
        nome: "África do Sul",
        capital: "Pretória (executiva), Cidade do Cabo (legislativa), Bloemfontein (judiciária)",
        lingua: "11 línguas oficiais, incluindo africâner, inglês, zulu e xhosa",
        moeda: "Rand sul-africano",
        populacao: 60142978,
        area: 1219090,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_South_Africa.svg/220px-Flag_of_South_Africa.svg.png"
      },
      {
        nome: "Angola",
        capital: "Luanda",
        lingua: "Português",
        moeda: "Kwanza",
        populacao: 32866268,
        area: 1246700,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/220px-Flag_of_Angola.svg.png"
      },
      {
        nome: "Argélia",
        capital: "Argel",
        lingua: "Árabe",
        moeda: "Dinar argelino",
        populacao: 44700000,
        area: 2381741,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/220px-Flag_of_Algeria.svg.png"
      },
      {
        nome: "Benim",
        capital: "Porto Novo",
        lingua: "Francês e Fon",
        moeda: "Franco CFA",
        populacao: 12123198,
        area: 112622,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/220px-Flag_of_Benin.svg.png"
      },
      {
        nome: "Botsuana",
        capital: "Gaborone",
        lingua: "Inglês e Tswana",
        moeda: "Pula",
        populacao: 2351160,
        area: 581730,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Flag_of_Botswana.svg/220px-Flag_of_Botswana.svg.png"
      },
      {
        nome: "Burkina Faso",
        capital: "Uagadugu",
        lingua: "Francês e More",
        moeda: "Franco CFA",
        populacao: 20903278,
        area: 274200,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Burkina_Faso.svg/220px-Flag_of_Burkina_Faso.svg.png"
      },
      {
        nome: "Burundi",
        capital: "Bujumbura",
        lingua: "Francês e Kirundi",
        moeda: "Franco burundês",
        populacao: 11890781,
        area: 27834,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Burundi.svg/220px-Flag_of_Burundi.svg.png"
      },
      {
        nome: "Cabo Verde",
        capital: "Praia",
        lingua: "Português",
        moeda: "Escudo cabo-verdiano",
        populacao: 555988,
        area: 4033,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Cape_Verde.svg/220px-Flag_of_Cape_Verde.svg.png"
      },
      {
        nome: "Camarões",
        capital: "Yaoundé",
        lingua: "Francês e inglês",
        moeda: "Franco CFA",
        populacao: 26545863,
        area: 475442,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/220px-Flag_of_Cameroon.svg.png"
      },
      {
        nome: "Chade",
        capital: "N'Djamena",
        lingua: "Francês e árabe",
        moeda: "Franco CFA",
        populacao: 16425859,
        area: 1284000,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Chad.svg/220px-Flag_of_Chad.svg.png"
      },
      {
        nome: "Comores",
        capital: "Moroni",
        lingua: "Comorense, árabe e francês",
        moeda: "Franco comorense",
        populacao: 869591,
        area: 1861,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_the_Comoros.svg/220px-Flag_of_the_Comoros.svg.png"
      },
      {
        nome: "Costa do Marfim",
        capital: "Yamoussoukro",
        lingua: "Francês",
        moeda: "Franco CFA",
        populacao: 26378275,
        area: 322463,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Ivory_Coast.svg/220px-Flag_of_Ivory_Coast.svg.png"
      },
      {
        nome: "Djibouti",
        capital: "Djibouti",
        lingua: "Francês e árabe",
        moeda: "Franco djiboutiano",
        populacao: 988000,
        area: 23200,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Djibouti.svg/220px-Flag_of_Djibouti.svg.png"
      },
      {
        nome: "Egito",
        capital: "Cairo",
        lingua: "Árabe",
        moeda: "Libra egípcia",
        populacao: 102334403,
        area: 1001450,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/220px-Flag_of_Egypt.svg.png"
      },
      {
        nome: "Eritreia",
        capital: "Asmara",
        lingua: "Tigrinya",
        moeda: "Nakfa",
        populacao: 6106525,
        area: 117600,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Eritrea.svg/220px-Flag_of_Eritrea.svg.png"
      },
      {
        nome: "Essuatíni (Suazilândia)",
        capital: "Mbabane",
        lingua: "Swazi e inglês",
        moeda: "Lilangeni",
        populacao: 1160194,
        area: 17364,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Eswatini.svg/220px-Flag_of_Eswatini.svg.png"
      },
      {
        nome: "Etiópia",
        capital: "Addis Ababa",
        lingua: "Afar, amárico e outras",
        moeda: "Birr etíope",
        populacao: 115032575,
        area: 1104300,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Flag_of_Ethiopia.svg/220px-Flag_of_Ethiopia.svg.png"
      },
      {
        nome: "Gabão",
        capital: "Libreville",
        lingua: "Francês",
        moeda: "Franco CFA",
        populacao: 2225272,
        area: 267668,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Gabon.svg/220px-Flag_of_Gabon.svg.png"
      },
      {
        nome: "Gâmbia",
        capital: "Banjul",
        lingua: "Inglês",
        moeda: "Dalasi",
        populacao: 2416340,
        area: 11300,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Gambia.svg/220px-Flag_of_Gambia.svg.png"
      },
      {
        nome: "Gana",
        capital: "Acra",
        lingua: "Inglês",
        moeda: "Cedi",
        populacao: 31072945,
        area: 238533,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Flag_of_Ghana.svg/220px-Flag_of_Ghana.svg.png"
      },
      {
        nome: "Guiné",
        capital: "Conacri",
        lingua: "Francês",
        moeda: "Franco guineense",
        populacao: 13132743,
        area: 245857,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_Guinea.svg/220px-Flag_of_Guinea.svg.png"
      },
      {
        nome: "Guiné-Bissau",
        capital: "Bissau",
        lingua: "Português",
        moeda: "Franco CFA",
        populacao: 1968002,
        area: 36125,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_Guinea-Bissau.svg/220px-Flag_of_Guinea-Bissau.svg.png"
      },
      {
        nome: "Guiné Equatorial",
        capital: "Malabo",
        lingua: "Espanhol, francês e português",
        moeda: "Franco CFA",
        populacao: 1402980,
        area: 28051,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Equatorial_Guinea.svg/220px-Flag_of_Equatorial_Guinea.svg.png"
      },
      {
        nome: "Lesoto",
        capital: "Maseru",
        lingua: "Sesotho e inglês",
        moeda: "Loti",
        populacao: 2142232,
        area: 30355,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Lesotho.svg/220px-Flag_of_Lesotho.svg.png"
      },
      {
        nome: "Libéria",
        capital: "Monrovia",
        lingua: "Inglês",
        moeda: "Dólar liberiano",
        populacao: 5057677,
        area: 111369,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Flag_of_Liberia.svg/220px-Flag_of_Liberia.svg.png"
      },
      {
        nome: "Líbia",
        capital: "Trípoli",
        lingua: "Árabe",
        moeda: "Dinar líbio",
        populacao: 6871287,
        area: 1759540,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Libya.svg/220px-Flag_of_Libya.svg.png"
      },
      {
        nome: "Madagáscar",
        capital: "Antananarivo",
        lingua: "Malgaxe e francês",
        moeda: "Ariary",
        populacao: 27691177,
        area: 587041,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Madagascar.svg/220px-Flag_of_Madagascar.svg.png"
      },
      {
        nome: "Malawi",
        capital: "Lilongwe",
        lingua: "Chichewa e inglês",
        moeda: "Kwacha",
        populacao: 19127200,
        area: 118484,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Malawi.svg/220px-Flag_of_Malawi.svg.png"
      },
      {
        nome: "Mali",
        capital: "Bamako",
        lingua: "Francês e bambara",
        moeda: "Franco CFA",
        populacao: 20250834,
        area: 1240192,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Mali.svg/220px-Flag_of_Mali.svg.png"
      },
      {
        nome: "Marrocos",
        capital: "Rabat",
        lingua: "Árabe e tamazight",
        moeda: "Dirham marroquino",
        populacao: 36910558,
        area: 446550,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/220px-Flag_of_Morocco.svg.png"
      },
      {
        nome: "Maurício",
        capital: "Port Louis",
        lingua: "Inglês, francês e crioulo",
        moeda: "Rupia mauriciana",
        populacao: 1271885,
        area: 2040,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Mauritius.svg/220px-Flag_of_Mauritius.svg.png"
      },
      {
        nome: "Mauritânia",
        capital: "Nouakchott",
        lingua: "Árabe hassâniya e francês",
        moeda: "Ouguiya",
        populacao: 4630131,
        area: 1030700,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritania.svg/220px-Flag_of_Mauritania.svg.png"
      },
      {
        nome: "Moçambique",
        capital: "Maputo",
        lingua: "Português",
        moeda: "Metical",
        populacao: 31227707,
        area: 801590,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Flag_of_Mozambique.svg/220px-Flag_of_Mozambique.svg.png"
      },
      {
        nome: "Namíbia",
        capital: "Windhoek",
        lingua: "Inglês e afrikâans",
        moeda: "Dólar namibiano",
        populacao: 2540916,
        area: 824292,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Namibia.svg/220px-Flag_of_Namibia.svg.png"
      },
      {
        nome: "Níger",
        capital: "Niamey",
        lingua: "Francês e hausa",
        moeda: "Franco CFA",
        populacao: 24206636,
        area: 1267000,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Niger.svg/220px-Flag_of_Niger.svg.png"
      },
      {
        nome: "Nigéria",
        capital: "Abuja",
        lingua: "Inglês e mais de 500 línguas nativas",
        moeda: "Naira",
        populacao: 216113149,
        area: 923768,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Nigeria.svg/220px-Flag_of_Nigeria.svg.png"
      },
      {
        nome: "Quênia",
        capital: "Nairobi",
        lingua: "Inglês e suaíli",
        moeda: "Shilling queniano",
        populacao: 53771296,
        area: 580367,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/220px-Flag_of_Kenya.svg.png"
      },
      {
        nome: "República Centro-Africana",
        capital: "Bangui",
        lingua: "Francês e sango",
        moeda: "Franco CFA",
        populacao: 4829764,
        area: 622984,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_the_Central_African_Republic.svg/220px-Flag_of_the_Central_African_Republic.svg.png"
      },
      {
        nome: "República Democrática do Congo",
        capital: "Kinshasa",
        lingua: "Francês",
        moeda: "Franco congolês",
        populacao: 89561404,
        area: 2344858,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag_of_the_Democratic_Republic_of_the_Congo.svg/220px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png"
      },
      {
        nome: "República do Congo",
        capital: "Brazzaville",
        lingua: "Francês",
        moeda: "Franco CFA",
        populacao: 5518092,
        area: 342000,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Flag_of_the_Republic_of_the_Congo.svg/220px-Flag_of_the_Republic_of_the_Congo.svg.png"
      },
      {
        nome: "Ruanda",
        capital: "Kigali",
        lingua: "Kinyarwanda, inglês e francês",
        moeda: "Franco ruandês",
        populacao: 13442553,
        area: 26338,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Flag_of_Rwanda.svg/220px-Flag_of_Rwanda.svg.png"
      },
      {
        nome: "São Tomé e Príncipe",
        capital: "São Tomé",
        lingua: "Português",
        moeda: "Dobra",
        populacao: 218157,
        area: 964,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Flag_of_São_Tomé_and_Príncipe.svg/220px-Flag_of_São_Tomé_and_Príncipe.svg.png"
      },
      {
        nome: "Senegal",
        capital: "Dakar",
        lingua: "Francês",
        moeda: "Franco CFA",
        populacao: 16743926,
        area: 196722,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/220px-Flag_of_Senegal.svg.png"
      },
      {
        nome: "Serra Leoa",
        capital: "Freetown",
        lingua: "Inglês",
        moeda: "Leone",
        populacao: 7976985,
        area: 71740,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Sierra_Leone.svg/220px-Flag_of_Sierra_Leone.svg.png"
      },
      {
        nome: "Seychelles",
        capital: "Victoria",
        lingua: "Criolo das Seychelles, inglês e francês",
        moeda: "Rupia das Seychelles",
        populacao: 98462,
        area: 459,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Seychelles.svg/220px-Flag_of_Seychelles.svg.png"
      },
      {
        nome: "Somália",
        capital: "Mogadíscio",
        lingua: "Somali e árabe",
        moeda: "Shilling somali",
        populacao: 15893222,
        area: 637657,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Somalia.svg/220px-Flag_of_Somalia.svg.png"
      },
      {
        nome: "Sudão",
        capital: "Cartum",
        lingua: "Árabe",
        moeda: "Libra sudanesa",
        populacao: 45090471,
        area: 1886097,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Flag_of_Sudan.svg/220px-Flag_of_Sudan.svg.png"
      },
      {
        nome: "Sudão do Sul",
        capital: "Juba",
        lingua: "Inglês",
        moeda: "Libra sul-sudanesa",
        populacao: 11242829,
        area: 644329,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_South_Sudan.svg/220px-Flag_of_South_Sudan.svg.png"
      },
      {
        nome: "Tanzânia",
        capital: "Dodoma",
        lingua: "Suaíli e inglês",
        moeda: "Shilling tanzaniano",
        populacao: 62165743,
        area: 945087,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flag_of_Tanzania.svg/220px-Flag_of_Tanzania.svg.png"
      },
      {
        nome: "Togo",
        capital: "Lomé",
        lingua: "Francês e éwé",
        moeda: "Franco CFA",
        populacao: 8307757,
        area: 56785,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Flag_of_Togo.svg/220px-Flag_of_Togo.svg.png"
      },
      {
        nome: "Tunísia",
        capital: "Tunis",
        lingua: "Árabe",
        moeda: "Dinar tunisino",
        populacao: 11818646,
        area: 163610,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/220px-Flag_of_Tunisia.svg.png"
      },
      {
        nome: "Uganda",
        capital: "Kampala",
        lingua: "Inglês e suaíli",
        moeda: "Shilling ugandense",
        populacao: 45741007,
        area: 241038,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Uganda.svg/220px-Flag_of_Uganda.svg.png"
      },
      {
        nome: "Zâmbia",
        capital: "Lusaka",
        lingua: "Inglês",
        moeda: "Kwacha",
        populacao: 18382006,
        area: 752612,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Zambia.svg/220px-Flag_of_Zambia.svg.png"
      },
      {
        nome: "Zimbábue",
        capital: "Harare",
        lingua: "Inglês, shona e ndebele",
        moeda: "Dólar zimbabuano",
        populacao: 15663255,
        area: 390757,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Zimbabwe.svg/220px-Flag_of_Zimbabwe.svg.png"
      },
      {
        nome: "Áustria",
        capital: "Viena",
        lingua: "Alemão",
        moeda: "Euro",
        populacao: 8902602,
        area: 83871,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_Austria.svg/220px-Flag_of_Austria.svg.png"
      },
      {
        nome: "China",
        capital: "Pequim",
        lingua: "Mandarim",
        moeda: "Yuan renminbi",
        populacao: 1411778000,
        area: 9596961,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_the_People%27s_Republic_of_China.svg/220px-Flag_of_the_People%s_s_Republic_of_China.svg.png"
      },
      {
        nome: "Eslováquia",
        capital: "Bratislava",
        lingua: "Eslovaco",
        moeda: "Euro",
        populacao: 5458827,
        area: 49035,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Flag_of_Slovakia.svg/220px-Flag_of_Slovakia.svg.png"
      },
      {
        nome: "Espanha",
        capital: "Madrid",
        lingua: "Espanhol",
        moeda: "Euro",
        populacao: 47354139,
        area: 505990,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Spain.svg/220px-Flag_of_Spain.svg.png"
      },
      {
        nome: "Holanda",
        capital: "Amsterdã",
        lingua: "Neerlandês",
        moeda: "Euro",
        populacao: 17441137,
        area: 41543,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/220px-Flag_of_the_Netherlands.svg.png"
      },
      {
        nome: "Hungria",
        capital: "Budapeste",
        lingua: "Húngaro",
        moeda: "Forinto húngaro",
        populacao: 9749757,
        area: 93030,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Hungary.svg/220px-Flag_of_Hungary.svg.png"
      },
      {
        nome: "Iêmen",
        capital: "Sanaa",
        lingua: "Árabe",
        moeda: "Rial iemenita",
        populacao: 29825968,
        area: 527968,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_Yemen.svg/220px-Flag_of_Yemen.svg.png"
      },
      {
        nome: "Índia",
        capital: "Nova Délhi",
        lingua: ["Hindi", "Inglês", "Bengali", "Telugu", "Marata", "Tamil"],
        moeda: "Rupia indiana",
        populacao: 1428627662,
        area: 3287263,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/220px-Flag_of_India.svg.png"
      },
      {
        nome: "Indonésia",
        capital: "Jacarta",
        lingua: "Indonésio",
        moeda: "Rupia indonésia",
        populacao: 273523615,
        area: 19045690,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Indonesia.svg/220px-Flag_of_Indonesia.svg.png"
      },
      {
        nome: "Itália",
        capital: "Roma",
        lingua: "Italiano",
        moeda: "Euro",
        populacao: 60483973,
        area: 301336,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/220px-Flag_of_Italy.svg.png"
      },
      {
        nome: "Liechtenstein",
        capital: "Vaduz",
        lingua: "Alemão",
        moeda: "Franco suíço",
        populacao: 39041,
        area: 160,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/220px-Flag_of_Liechtenstein.svg.png"
      },
      {
        nome: "Malta",
        capital: "Valletta",
        lingua: ["Maltês", "Inglês"],
        moeda: "Euro",
        populacao: 525285,
        area: 316,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Malta.svg/220px-Flag_of_Malta.svg.png"
      },
      {
        nome: "Maurícia",
        capital: "Port Louis",
        lingua: ["Inglês", "Francês", "Creole mauriciano"],
        moeda: "Rupia mauriciana",
        populacao: 1271885,
        area: 2040,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Flag_of_Mauritius.svg/220px-Flag_of_Mauritius.svg.png"
      },
      {
        nome: "Myanmar",
        capital: "Naypyidaw",
        lingua: "Birmanês",
        moeda: "Kyat birmanês",
        populacao: 54409794,
        area: 676578,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/220px-Flag_of_Myanmar.svg.png"
      },
      {
        nome: "Polônia",
        capital: "Varsóvia",
        lingua: "Polonês",
        moeda: "Złoty polonês",
        populacao: 37950885,
        area: 312685,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/220px-Flag_of_Poland.svg.png"
      },
      {
        nome: "Portugal",
        capital: "Lisboa",
        lingua: "Português",
        moeda: "Euro",
        populacao: 10196700,
        area: 92090,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/220px-Flag_of_Portugal.svg.png"
      },
      {
        nome: "Quirguistão",
        capital: "Bishkek",
        lingua: "Quirguiz",
        moeda: "Som quirguiz",
        populacao: 6591393,
        area: 199951,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Kyrgyzstan.svg/220px-Flag_of_Kyrgyzstan.svg.png"
      },
      {
        nome: "República Tcheca",
        capital: "Praga",
        lingua: "Tcheco",
        moeda: "Coroa tcheca",
        populacao: 10708981,
        area: 78865,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/220px-Flag_of_the_Czech_Republic.svg.png"
      },
      {
        nome: "San Marino",
        capital: "Cidade de San Marino",
        lingua: "Italiano",
        moeda: "Euro",
        populacao: 33931,
        area: 61.21,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_San_Marino.svg/220px-Flag_of_San_Marino.svg.png"
      },
      {
        nome: "São Cristóvão e Nevis",
        capital: "Basseterre",
        lingua: "Inglês",
        moeda: "Dólar do Leste do Caribe",
        populacao: 51929,
        area: 261,
        continente: "América",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flag_of_Saint_Kitts_and_Nevis.svg/220px-Flag_of_Saint_Kitts_and_Nevis.svg.png"
      },
      {
        nome: "Seicheles",
        capital: "Victoria",
        lingua: ["Crioulo das Seicheles", "Francês", "Inglês"],
        moeda: "Rupia das Seicheles",
        populacao: 98462,
        area: 459,
        continente: "África",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_the_Seychelles.svg/220px-Flag_of_the_Seychelles.svg.png"
      },
      {
        nome: "Singapura",
        capital: "Singapura",
        lingua: "Malaio",
        moeda: "Dólar de Singapura",
        populacao: 5921276,
        area: 721.5,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/220px-Flag_of_Singapore.svg.png"
      },
      {
        nome: "Suíça",
        capital: "Berna",
        lingua: ["Alemão", "Francês", "Italiano", "Romanche"],
        moeda: "Franco suíço",
        populacao: 8751757,
        area: 41284,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/220px-Flag_of_Switzerland.svg.png"
      },
      {
        nome: "Taiwan",
        capital: "Taipei",
        lingua: "Chinês (Mandarim)",
        moeda: "Novo dólar taiwanês",
        populacao: 23816792,
        area: 36197,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/220px-Flag_of_the_Republic_of_China.svg.png"
      },
      {
        nome: "Tajiquistão",
        capital: "Dushanbe",
        lingua: "Tajique",
        moeda: "Somoni tajique",
        populacao: 9537643,
        area: 143100,
        continente: "Ásia",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Tajikistan.svg/220px-Flag_of_Tajikistan.svg.png"
      },
      {
        nome: "Vaticano",
        capital: "Cidade do Vaticano",
        lingua: "Italiano",
        moeda: "Euro",
        populacao: 801,
        area: 0.44,
        continente: "Europa",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Vatican_City.svg/220px-Flag_of_Vatican_City.svg.png"
      }
];