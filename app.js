(function () {
'use strict';

  angular.module('app', ['ui.router', 'ngRoute'])
  .config(function($locationProvider, $routeProvider, $stateProvider){
    $locationProvider.hashPrefix(); // Removes index.html in URL

    $routeProvider.otherwise({redirectTo: ''});
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $stateProvider.state('home',{
      url: '/',
      templateUrl: 'home.html',
      controller: 'ctrl',
      controllerAs: 'ctrl'
    }).state('home.correction', {
      url: 'correction/:test',
      templateUrl: 'correction.html',
      controller: 'correction',
      controllerAs: 'correction'
    }).state('recap', {
      url:'/recap',
      templateUrl:'recap.html',
      controller: 'recap',
      controllerAs: 'recap'
    })
  })
  .run(function($state){
    $state.go('home');
  })
  .controller('ctrl', function ($state) {
    var ctrl = this;
    ctrl.note = 0;
    ctrl.list = [
      {
        id: 1,
        label: "Prélever une C Reactive Proteine",
        note:-1,
        reponse: ["Non faite car inutile"]
      },
      {
        id: 2,
        label: "Prélever un ionogramme sanguin",
        note:+2,
        reponse: ["Na: 132 mEq/l", "K: 3,7 mEq/l", "Cl: 102 mEq/l"]
      },
      {
        id: 3,
        label: "Faire une radiographie de thorax",
        note:-1,
        reponse: ["non faite. Inutile car il l’auscultation pulmonaire est normale"]
      },
      {
        id: 4,
        label: "Faire une examen cytobactériologique des urines (ECBU)",
        note:-1,
        reponse: ["Non fait. Inutile car la bandelette urinaire est négative"]
      },
      {
        id: 5,
        label: "Donner du paracetamol sirop: dose 7 KgX4/jour",
        note:+2,
        reponse: ["paracétamol donné", "Choix utile"]
      },
      {
        id: 6,
        label: "Arrêter l’allaitement maternel et donner un lait sans lactose pendant deux semaines",
        note:-1,
        reponse: ["pas d’indication à l’arrêt de l’allaitement maternel même en cas de diarrhée acide"]
      },
      {
        id: 7,
        label: "Prescrire une réhydratation orale: 350 ml sur 6H par sonde nasogastrique",
        note:+2,
        reponse: ["perfusion nasogastrique débutée","Choix essentiel"]
      },
      {
        id: 8,
        label: "Donner un antiseptique intestinal: ercefuryl®",
        note:-1,
        reponse: ["aucune indication dans les gastroentérites du nourrisson"]
      },
      {
        id: 9,
        label: "Mettre un perfusion intraveineuse de SG5% avec électrolytes: 350ml sur 4H",
        note:-2,
        reponse: ["Non indiquée","Risque iatrogène"]
      },
      {
        id: 10,
        label: "Arrêter l’alimentation pendant 6 heures",
        note:+1,
        reponse: ["alimentation arrêtée pendant 6 heures","Choix utile"]
      },
      {
        id: 11,
        label: "Donner de l’amoxicilline acide clavulanique sirop: dose 7 X 3/jour",
        note:-2,
        reponse: ["non indiquée"]
      },
      {
        id: 12,
        label: "Mettre un collecteur d’urines pour surveiller la diurèse",
        note:+2,
        reponse: ["collecteur mis en place","Choix essentiel: la surveillance de la diurèse est nécessaire au cours de la réhydratation"]
      },
      {
        id: 13,
        label: "Surveiller le poids toutes les 4 heures",
        note:+2,
        reponse: [" poids surveillé toutes les 4 heures","Choix essentiel"]
      },
      {
        id: 14,
        label: "Prescrire 70 ml d’oralyte ® après chaque selle liquide et revoir l’enfant dans 24 heures",
        note:0,
        reponse: ["L’enfant reconsulte au bout de 8 heures dans un tableau de collapsus par déshydratation sévère","ARRET DE L'EPREUVE"]
      }
    ];
    ctrl.list2 = [
      {
        id: 1,
        label: "Mettre sous cefotaxime, ampicilline et gentamicine par voie intraveineuse",
        note:2,
        reponse: ["Antibiothérapie commencée"]
      },
      {
        id: 2,
        label: "Mettre sous O2 par enceinte de Hood avec 6l d’O2/mn",
        note:2,
        reponse: ["La saturation de contrôle est à 92%"]
      },
      {
        id: 3,
        label: "Prélever une hémoculture",
        note:2,
        reponse: ["Hémoculture prélevée, résultat en cours."]
      },
      {
        id: 4,
        label: "Faire une ponction lombaire",
        note:-2,
        reponse: ["Anas fait un malaise avec apnée et désaturation"]
      },
      {
        id: 5,
        label: "Prélever une numération formule sanguine",
        note:2,
        reponse: ["NFS:","GB: 19,560/mm3","Hb: 16 g/dl","Plaquettes: 26,0000/mm3"]
      },
      {
        id: 6,
        label: "Prélever une CRP",
        note:2,
        reponse: ["CRP: 5mg/l"]
      },
      {
        id: 7,
        label: "Faire une radio de thorax au lit",
        note:2,
        reponse: ["Radio de thorax: normale"]
      },
      {
        id: 8,
        label: "Faire une échographie transfontanellaire",
        note:-2,
        reponse: ["Échographie non faite pas d’indication"]
      },
      {
        id: 9,
        label: "Donner du Gardenal: 60 mg en IV sur 30 minutes",
        note:-1,
        reponse: ["Le Gardenal® n’est pas indiqué, Anas n’a pas convulsé"]
      },
      {
        id: 10,
        label: "Mettre un collecteur d’urines pour réaliser l’examen à la bandelette urinaire (Labstix ®)",
        note:2,
        reponse: ["Labstix fait:","pH: 5","A: 2+","P:0","G:0","H:0"]
      },
      {
        id: 11,
        label: "Prélever une glycémie veineuse",
        note:2,
        reponse: ["Glycémie veineuse: 0,26 g/l"]
      },
      {
        id: 12,
        label: "Prélever des gaz du sang",
        note:2,
        reponse: ["Gaz du sang:","pH: 7,21 PCO2: 23mmHg","PaO2: 60 mmHg","HCO3-: 11 mEq/l"]
      },
      {
        id: 13,
        label: "Donner un bolus de SG10%: 15 ml par sonde nasogastrique",
        note:-2,
        reponse: ["Anas fait une fausse route avec malaise"]
      },
      {
        id: 14,
        label: "Prélever une chromatographie des acides aminés sanguins",
        note:2,
        reponse: ["chromatographie des acides aminés envoyée au laboratoire, résultat dans 4 jours."]
      },
      {
        id: 15,
        label: "Prescrire pour le lendemain la collecte des urines pour chromatographie des acides organiques",
        note:-1,
        reponse: ["il faut collecter les urines immédiatement lors de l’épisode aigu et non le lendemain car les anomalies vont disparaitre le lendemain ."]
      }
    ];

    ctrl.showTest = function(test){
      ctrl.selectedTestId = test;
      if (ctrl.candidate){
        ctrl.noname = false;
        ctrl.candidate = ctrl.candidate.replace(/ /g,'_')+test;
        localStorage[ctrl.candidate] = '';
        if (test === 1){
          ctrl.firstSelected = true;
        }
        else if (test === 2){
          ctrl.secondSelected = true;
        }
        ctrl.selectedTest = true;
      }
      else {
        ctrl.noname = true;
      }
    }

    ctrl.select = function(item,list){
      if (!item.clicked && !ctrl.end){
        ctrl.selectedItem = item;
        item.clicked = true;
        ctrl.note += item.note;
        localStorage[ctrl.candidate] = JSON.stringify({ reponse: ctrl[list], note: ctrl.note});
        if (item.note === 0){
          ctrl.note = 0;
          ctrl.fin();
          return;
        }

      }
    }

    ctrl.fin = function(){
      ctrl.showResult = true;
      ctrl.end = true;
      $state.go('home.correction', {test:ctrl.selectedTestId});
    }
  })
  .controller('correction', function($state){
    var correction = this;
    correction.list = [
      {
        label: "Prélever une C Reactive Proteine",
        reponse: ["Non faite car inutile"],
        justification: ["La gastroentérite aigue est le plus souvent d’origine virale chez le nourrisson","Chez Salma, il ya avait une contage chez la sœur, des signes d’imprégnation virale et un examen clinique rassurant  en faveur  d’une origine virale"]
      },
      {
        label: "Prélever un ionogramme sanguin",
        reponse: ["Na: 132 mEq/l", "K: 3,7 mEq/l", "Cl: 102 mEq/l"],
        justification: ["Salma a une déshydratation stade 2, l’ionogramme est nécessaire à la recherche de dyskaliémie ou dysnatrémie.","Dans ce cas, il montre une légère hyponatrémie mais sans indication à une correction."]
      },
      {
        label: "Faire une radiographie de thorax",
        reponse: ["non faite. Inutile car il l’auscultation pulmonaire est normale"],
        justification: ["Il n’y a pas d’élément en faveur d’une infection respiratoire basse bactérienne"]
      },
      {
        label: "Faire une examen cytobactériologique des urines (ECBU)",
        reponse: ["Non fait. Inutile car la bandelette urinaire est négative"],
        justification: ["La bandelette urinaire (Multistix®) est très sensible pour le dépistage des infections urinaires.","Sa négativité chez un nourrisson de plus de 3 mois n’ayant pas reçu d’antibiothérapie préalable et n’ayant pas de déficit immunitaire permet d’écarter le diagnostic d’infection urinaire"]
      },
      {
        label: "Donner du paracetamol sirop: dose 7 KgX4/jour",
        reponse: ["paracétamol donné", "Choix utile"],
        justification: ["Une fièvre élevée chez le nourrisson est associée à un risque de complications à type de déshydratation, convulsions.","Elle doit être traitée par les moyens physiques et les antipyrétiques"]
      },
      {
        label: "Arrêter l’allaitement maternel et donner un lait sans lactose pendant deux semaines",
        reponse: ["pas d’indication à l’arrêt de l’allaitement maternel même en cas de diarrhée acide"],
        justification: ["L’érythème fessier est dû à une diarrhée acide en rapport avec une intolérance acquise au lactose causée par détérioration de l’activité disaccharidique entérocytaire par la diarrhée.","Le changement de lait par un lait sans lactose n’est indiqué qu’en cas de nourrisson allaité par un lait artificiel.","En cas d’allaitement maternel celui-ci ne doit pas être arrêté pour éviter un sevrage précoce. Les bénéfices du lait maternel priment sur le risque d’érythème fessier qui devra être traité symptomatiquement."]
      },
      {
        label: "Prescrire une réhydratation orale: 350 ml sur 6H par sonde nasogastrique",
        reponse: ["perfusion nasogastrique débutée","Choix essentiel"],
        justification: ["La première phase de réhydratation au cours d’une déshydratation stade 2 se fait par voie orale par une perfusion nasogastrique: 100 ml/Kg sur 6 heures"]
      },
      {
        label: "Donner un antiseptique intestinal: ercefuryl®",
        reponse: ["aucune indication dans les gastroentérites du nourrisson"],
        justification: ["Le traitement de la gastroentérite aigue du nourrisson est basé sur la prévention de la déshydratation par la compensation des pertes digestives par solution de réhydratation orale"]
      },
      {
        label: "Mettre un perfusion intraveineuse de SG5% avec électrolytes: 350ml sur 4H",
        reponse: ["Non indiquée","Risque iatrogène"],
        justification: ["Salma a une déshydratation stade 2","Il n’y a pas de contre indication à la voie orale telle qu’un trouble de la conscience","AUCUNE INDICATION à la perfusion intraveineuse"]
      },
      {
        label: "Arrêter l’alimentation pendant 6 heures",
        reponse: ["alimentation arrêtée pendant 6 heures","Choix utile"],
        justification: ["La réalimentation doit être précoce pour permettre la réparation des lésions entérocytaires causées par la diarrhée.","L’allaitement au sein peut être poursuivi si le nourrisson accepte et réclame à téter,  en alternant les prises de SRO et les tétées. Ceci permet une guérison plus rapide de la diarrhée et améliore l’état nutritionnel"]
      },
      {
        label: "Donner de l’amoxicilline acide clavulanique sirop: dose 7 X 3/jour",
        reponse: ["non indiquée"],
        justification: ["Il n’y a aucun argument en faveur d’une infection bactérienne","L’otite congestive est d’origine virale et ne nécessite pas d’antiobiothérapie"]
      },
      {
        label: "Mettre un collecteur d’urines pour surveiller la diurèse",
        reponse: ["collecteur mis en place","Choix essentiel: la surveillance de la diurèse est nécessaire au cours de la réhydratation"],
        justification: ["Une oligurie est associée aux déshydratations d’origine digestive. Elle est expliquée par la compensation rénale de la perte d’eau avec concentration des urines.","La surveillance de la diurèse permet de vérifier l’efficacité de la réhydratation attestée par la normalisation de la diurèse en parallèle avec l’amélioration de l’état d’hydratation.","L’existence d’une polyurie chez un patient encore déshydraté doit faire évoquer une fuite rénale (tubulopathie)"]
      },
      {
        label: "Surveiller le poids toutes les 4 heures",
        reponse: [" poids surveillé toutes les 4 heures","Choix essentiel"],
        justification: ["L’eau représente 70% du poids du nourrisson","Les variations du poids renseignent de façon objective sur les variations de l’état d’hydratation.","La surveillance régulière du poids permet de juger de l’efficacité de la réhydratation et de l’ajuster en cas de besoin."]
      },
      {

        label: "Prescrire 70 ml d’oralyte ® après chaque selle liquide et revoir l’enfant dans 24 heures",
        reponse: ["L’enfant reconsulte au bout de 8 heures dans un tableau de collapsus par déshydratation sévère","ARRET DE L'EPREUVE"],
        justification: ["Salma a perdu 7% de son poids et a un score de déshydratation à  5➔ déshydratation stade 2 ➔ nécessité d’une hospitalisation pour assurer une réhydratation orale par sonde gastrique (pour remplacer les pertes) et pour surveillance.","Les biberons de SRO après chaque selle sont indiquée en cas de diarrhée chez un nourrisson BIEN HYDRATE. Il s’agit d’un traitement préventif et non curatif"]
      }
    ];
    correction.list2 = [
      {
        label: "Mettre sous cefotaxime, ampicilline et gentamicine par voie intraveineuse",
        reponse: ["Antibiothérapie commencée"],
        justification : ["Tout nouveau-né symptomatique doit faire suspecter une infection","L’infection materno-fœtale est une urgence diagnostique et thérapeutique"]
      },
      {
        label: "Mettre sous O2 par enceinte de Hood avec 6l d’O2/mn",
        reponse: ["La saturation de contrôle est à 92%"],
        justification : ["La saturation chez Anas était à 87%< 92%➔ le nouveau-né est hypoxique"]
      },
      {
        label: "Prélever une hémoculture",
        reponse: ["Hémoculture prélevée, résultat en cours."],
        justification : ["Les prélèvements bactériologiques sont essentiels pour avoir une preuve de l’infection et pouvoir adapter l’antibiothérapie probabiliste mise initialement","Ils doivent être prélevés avant le début de l’antibiothérapie sauf en cas de contre indication aux prélèvements (mauvais état hémodynamique)"]
      },
      {
        label: "Faire une ponction lombaire",
        reponse: ["Anas fait un malaise avec apnée et désaturation"],
        justification : ["Anas est en détresse respiratoire","La PL ne doit pas être faite chez un patient instable sur le plan respiratoire ou hémodynamique car elle risque d’aggraver le patient","Elle doit être différée après stabilisation et si une méningite est fortement suspectée l’antibiothérapie peut être débutée avant la réalisation de PL"]
      },
      {
        label: "Prélever une numération formule sanguine",
        reponse: ["NFS:","GB: 19,560/mm3","Hb: 16 g/dl","Plaquettes: 26,0000/mm3"],
        justification : ["La NFS permet de rechercher des anomalies en faveur d’une infection materno-fœtale (élévation ou baisse des leucocytes, des neutrophiles, thrombopénie)"]
      },
      {
        label: "Prélever une CRP",
        reponse: ["CRP: 5mg/l"],
        justification : ["Une élévation de la CRP est un argument en faveur d’une infection materno-fœtale","La négativité de la CRP chez Anas ne permet  pas totalement d’écarter l’infection MAIS elle doit faire envisager les diagnostics différentiels notamment les maladies métaboliques héréditaires"]
      },
      {
        label: "Faire une radio de thorax au lit",
        reponse: ["Radio de thorax: normale"],
        justification : ["La radiographie de thorax est nécessaire devant tout nouveau-né en détresse respiratoire","Chez Anas, elle a été faite au lit car il n’était pas transportable (détresse respiratoire et neurologique)","Une radiographie de thorax normale chez nouveau-né dyspnéique doit faire rechercher d’autres causes de dyspnée: acidose métabolique, d’origine centrale comme  en cas d’hyperammoniémie par exemple"]
      },
      {
        label: "Faire une échographie transfontanellaire",
        reponse: ["Échographie non faite pas d’indication"],
        justification : ["Anas n’est pas transportable car il est en détresse","Il n’y a pas de signe de localisation, la fontanelle est normotendue l’ETF n’est pas indiquée en urgence"]
      },
      {
        label: "Donner du Gardenal: 60 mg en IV sur 30 minutes",
        reponse: ["Le Gardenal® n’est pas indiqué, Anas n’a pas convulsé"],
        justification : ["Le Gardénal®: IV a des effets indésirables surtout le risque e dépression respiratoire. Il ne doit pas être donné en dehors de ses indications."]
      },
      {
        label: "Mettre un collecteur d’urines pour réaliser l’examen à la bandelette urinaire (Labstix ®)",
        reponse: ["Labstix fait:","pH: 5","A: 2+","P:0","G:0","H:0"],
        justification : ["L’examen des urines est essentiel chez tout nouveau-né ayant une hypoglycémie inexpliquée ou à la recherche d’acétonurie","L’examen des urines est essentiel chez tout nouveau-né suspect de maladie métabolique héréditaire (odeur, G, A, pt)","Anas a une acétonurie: l’acétonurie est toujours pathologique chez le nouveau-né et synonyme de maladie métabolique héréditaire"]
      },
      {
        label: "Prélever une glycémie veineuse",
        reponse: ["Glycémie veineuse: 0,26 g/l"],
        justification : [""]
      },
      {
        label: "Prélever des gaz du sang",
        reponse: ["Gaz du sang:","pH: 7,21 PCO2: 23mmHg","PaO2: 60 mmHg","HCO3-: 11 mEq/l"],
        justification : ["La glycémie à la bandelette n’est qu’un moyen de dépistage, toute anomalie doit être confirmée par le dosage veineux de la glycémie qui est le Gold Standard"]
      },
      {
        label: "Donner un bolus de SG10%: 15 ml par sonde nasogastrique",
        reponse: ["Anas fait une fausse route avec malaise"],
        justification : ["Les gaz du sang sont nécessaires devant tout nouveau-né en détresse (respiratoire, hémodynamique et/ou neurologique)","Anas a une acidémie, une hypocapnie, une hypoxie, une hypobasémie ➔ il s’agit d’une acidose métabolique décompensée (avec réponse respiratoire insuffisante)"]
      },
      {
        label: "Prélever une chromatographie des acides aminés sanguins",
        reponse: ["chromatographie des acides aminés envoyée au laboratoire, résultat dans 4 jours."],
        justification : ["La correction de l’hypoglycémie chez le nouveau-né symptomatique se fait par voie intraveineuse","Anas était en détresse respiratoire et neurologique (comateux) donner une alimentation ou des médicaments par voie orale peut causer une fausse route et une pneumopathie d’inhalation."]
      },
      {
        label: "Prescrire pour le lendemain la collecte des urines pour chromatographie des acides organiques",
        reponse: ["il faut collecter les urines immédiatement lors de l’épisode aigu et non le lendemain car les anomalies vont disparaitre le lendemain ."],
        justification : ["La chromatographie des acides aminés fait partie du bilan de première intention chez tout nouveau-né suspect de maladie métabolique héréditaire","Chez Anas une maladie métabolique héréditaire est fortement suspectée devant: la consanguinité, l’intervalle libre, la détresse neurologique et respiratoire, l’hypoglycémie et l’acidocétose."]
      }
    ];
    console.log($state.params.test);
    if ($state.params.test == 1){
      correction.selectedList = correction.list;
    }
    else if ($state.params.test == 2){
      console.log($state.params.test);
      correction.selectedList = correction.list2;
    }
    correction.reset = function(){
      $state.go('home', {}, {reload: true});
    }
  }).controller('recap',function(recapService){
    var recap = this;
    for (var prop in recapService){
      recap[prop] = recapService[prop];
    }

    // recap.listCandidats = {};
    // recap.candidats = {};
    // for (var prop in localStorage){
    //   recap.listCandidats[prop] = JSON.parse(localStorage[prop]);
    // }
    // delete recap.listCandidats.length;
    // console.log(recap.listCandidats);
    // for (var candidat in recap.listCandidats){
    //   recap.candidats[candidat] = {reponses: recap.listCandidats[candidat].reponse.filter(function(rep){
    //     return rep.clicked;
    //   })};
    //   recap.candidats[candidat].note = recap.listCandidats[candidat].note;
    //   recap.candidats[candidat].nom = candidat.replace(/_/g, ' ');
    // }
  }).service('recapService',function(){
    var recap = this;
    recap.listCandidats = {};
    recap.candidats = {};
    for (var prop in localStorage){
      recap.listCandidats[prop] = JSON.parse(localStorage[prop]);
    }
    delete recap.listCandidats.length;
    console.log(recap.listCandidats);
    for (var candidat in recap.listCandidats){
      recap.candidats[candidat] = {reponses: recap.listCandidats[candidat].reponse.filter(function(rep){
        return rep.clicked;
      })};
      recap.candidats[candidat].note = recap.listCandidats[candidat].note;
      recap.candidats[candidat].nom = candidat.replace(/_/g, ' ');
    }
  })
})();
