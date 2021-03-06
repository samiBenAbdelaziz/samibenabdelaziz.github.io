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
      url: 'correction/:test#objectif',
      templateUrl: 'correction.html',
      controller: 'correction',
      controllerAs: 'correction'
    }).state('home.recap', {
      url:'recap',
      templateUrl:'recap.html',
      controller: 'recap',
      controllerAs: 'recap'
    })
  })
  .run(function($state){
    $state.go('home');
  })
  .controller('ctrl', function ($state, $scope) {
    var ctrl = this;
    ctrl.score = 0;
    ctrl.negScore = 0;
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
        end: true,
        reponse: ["L’enfant reconsulte au bout de 8 heures dans un tableau de collapsus par déshydratation sévère","ARRET DE L'EPREUVE"]
      },
      {
        id:15,
        label: "Prescrire du racecadotril (Tiorfan®) sachets",
        note:1,
        reponse:["Choix utile"],
      },
      {
        id:16,
        label: "Prescrire du cefotaxime (Claforan®) 700 mg/j en IV",
        note:-2,
        reponse:["Non indiqué", "Risqus iatrogènes"],
      },
      {
        id:17,
        label: "Prescrire du metoclopramide (Primperan) en intramusculaire",
        note:-2,
        reponse:["Non indiqué"],
      },
      {
        id:18,
        label: "Prescrire des lavages du nez au serum physiologique",
        note:1,
        reponse:["Choix utile"],
      },
      {
        id:19,
        label: "Faire une coproculture",
        note:-1,
        reponse:["Non faite", "Non indiquée"],
      },
      {
        id:20,
        label: "Prescrire des soins du siège à l’éosine aqueuse",
        note:1,
        reponse:["Choix utile"],
      },
      
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
      },
      {
        id: 16,
        label: "Prélever une calcémie",
        note:1,
        reponse: ["calcémie: 90 mg/l (2,25 mmol/l)", "Choix utile"],
      },
      {
        id: 17,
        label: "Mettre une perfusion intraveineuse de SG5%: 360 ml/j",
        note:-2,
        reponse: ["Anas refait une hypoglycémie après 2 heures"],
      },
      {
        id: 18,
        label: "Surveiller les glycémies capillaires/4H",
        note:1,
        reponse: ["Choix utile"],
      },
      {
        id: 19,
        label: "Faire une échographie cardiaque",
        note:-2,
        reponse: ["refusée par le cardiologue", "Pas d’indication"],
      },
      {
        id: 20,
        label: "Mettre une perfusion intraveineuse de SG10%: 360 ml/j",
        note:2,
        reponse: ["Perfusion mise en place", "Choix essentiel"],
      },
      
    ];
    ctrl.list3 = [
      {
        id:1,
        label:"Demander une électrophorèse de l’hémoglobine",
        note:-1,
        reponse:["Hb A1: 97%", "Hb A2: 2%", "Hb F: 1%"],
      },
      {
        id:2,
        label:"Donner de la prednisone (cp à 5 mg): 5 cp/j",
        note:0,
        end: true,
        reponse:["ARRÊT DU TEST", "Vous allez masquer  une leucémie aigue  et retarder la prise en charge"],
      },
      {
        id:3,
        label:"Demander une NFS",
        note:2,
        reponse:[
          "GB: 40,000/mm3",
          "PNN= 5800	Lymphocytes: 30,000/mm3",
          "Monocytes: 4000/mm3    Éosinophiles: 200/mm3",
          "GR= 2,8 106/mm3",
          "Hb: 8 g/dl   VGM: 88 fl  TCMH: 29 pg",
          "Réticulocytes: 1%",
          "Plaquettes: 47 000/mm3",]
      },
      {
        id:4,
        label:"Prélever des hémocultures",
        note:1,
        reponse:[
          "Hémocultures faites",
          "Culture négative",
        ],
      },
      {
        id:5,
        label:"Demander un groupe sanguin avec phénotypage",
        note:2,
        reponse:["Groupe sanguin B positif E+ C+ Kell négatif"],
      },
      {
        id:6,
        label:"Demander une échographie abdominale",
        note:1,
        reponse:[
          "Pas d’hépatomégalie",
          "Splénomégalie à 8 cm",
          "Multiples adénopathies intra-abdominales",
          "Pas d’épanchement péritonéal",
        ],
      },
      {
        id:7,
        label:"Donner de l’acide-acétyl-salicylique sachets 250 mg : 1sachet x 5/j",
        note:-2,
        reponse:["risque de complication"],
      },
      {
        id:8,
        label:"Mettre sous Rocephine: 700 mg/j en IV",
        note:-1,
        reponse:[],
      },
      {
        id:9,
        label:"Demander un frottis sanguin",
        note:2,
        reponse:["Présence de 35% de blastes circulants"],
      },
      {
        id:10,
        label:"Donner du paracétamol: dose n°14 x 4/j",
        note:1,
        reponse:["La température baisse à 38,2 puis remonte au bout de 3 heures à 39°C"],
      },
      {
        id:11,
        label:"Faire un myélogramme",
        note:2,
        reponse:["Aspect en faveur d’une leucémie aigue myéloblastique"],
      },
      {
        id:12,
        label:"Demander des radiographies des genoux et des chevilles",
        note:-1,
        reponse:["	Radiographies normales"],
      },
      {
        id:13,
        label:"Demander la sérologie de la leishmaniose",
        note:0,
        reponse:["Non faite"],
      },
      {
        id:14,
        label:"Faire un ECG",
        note:-1,
        reponse:["ECG normal"],
      },
      {
        id:15,
        label:"Demander une CRP",
        note:1,
        reponse:["CRP= 120 mg/l"],
      },
      {
        id:16,
        label:"Transfuser par des culots globulaires phénotypés",
        note:-1,
        reponse:["Pas d’indication"],
      },
      {
        id:17,
        label:"Faire un temps de saignement",
        note:-1,
        reponse:["Non fait"],
      },
      {
        id:18,
        label:"Transfuser par des culots plaquettaires",
        note:-1,
        reponse:["Pas d’indication"],
      },
    ];
    ctrl.list4 = [
      {
        id:1,
        label:"Rechercher des antécédents familiaux d’épilepsie",
        note:2,
        reponse:["Pas d’antécédents familiaux d’épilepsie"],
      },
      {
        id:2,
        label:"Vérifier le statut vaccinal de Lina",
        note:2,
        reponse:[
          "BCG, hépatite B à la naissance",
          "DTC Polio, HiB et hépatite à 2 mois",
          "DTC Polio, HiB à 3 mois",
          "Vaccin de 6 mois reporté car a eu une bronchiolite"],
      },
      {
        id:3,
        label:"Préciser son développement psychomoteur",
        note:2,
        reponse:[
          "Sourire réponse à 35 jours",
          "Tenue de la tête à 2 mois et demi",
          "Position assise avec appui à 6 mois",
          "Préhension (+)",
          "Babillage depuis 1 mois",]
      },
      {
        id:4,
        label:"Vérifier la prise de vitamine D",
        note:2,
        reponse:[
          "A pris du sterogyl® 3  gouttes par jour jusqu’à l’âge de 6 mois",
          "À 6mois a pris une dose de vitamine D3: 200000U pers os",
        ],
      },
      {
        id:5,
        label:"Vérifier si Lina a eu un traumatisme récent",
        note:1,
        reponse:["Lina est gardée par sa mère", "Pas de notion de traumatisme récent"],
      },
      {
        id:6,
        label:"Rechercher la présence de médicaments ou de toxiques à portée",
        note:1,
        reponse:[
          "Lina est gardée par sa mère",
          "Pas de médicaments ou de toxiques à sa portée",
        ],
      },
      {
        id:7,
        label:"Mesurer la pression artérielle ",
        note:1,
        reponse:["Pression artérielle 90/55 mmHg"],
      },
      {
        id:8,
        label:"Demander un examen du fond d’œil",
        note:-1,
        reponse:["Refusé par l’ophtalmologue de garde."],
      },
      {
        id:9,
        label:"Faire une otoscopie",
        note:2,
        reponse:["Tympans complets légèrement congestifs"],
      },
      {
        id:10,
        label:"Faire un examen des urines à la bandelette réactive Multistix®",
        note:2,
        reponse:["Urines limpides/ pH:5", "Densité Urinaire: 1015/ A,G,P,H,L,N: (-)"],
      },
      {
        id:11,
        label:"Faire une glycémie au doigt",
        note:2,
        reponse:["Glycémie au doigt: 0,76g/l"],
      },
      {
        id:12,
        label:"Demander une calcémie",
        note:-1,
        reponse:["Non faite car non indiquée"],
      },
      {
        id:13,
        label:"Demander une numération formule sanguine",
        note:-1,
        reponse:["Non faite CAR non indiquée"],
      },
      {
        id:14,
        label:"Prélever une hémoculture",
        note:-1,
        reponse:["Non faite car non indiquée"],
      },
      {
        id:15,
        label:"Demander un ionogramme sanguin",
        note:-1,
        reponse:["Non fait car non indiqué"],
      },
      {
        id:16,
        label:"Réaliser une ponction lombaire",
        note:2,
        reponse:[
          "Liquide eau de roche normotendu",
          "Globules rouges 2 élém/mm3, GB: 1 élém/mm3",
          "Glucorrachie: 0,45 g/l; Albuminorrachie: 0,1g/l",
          "Examen direct: négatif"],
      },
      {
        id:17,
        label:"Pratiquer une radiographie du  thorax au lit ",
        note:-1,
        reponse:["Non faite car non indiquée",]
      },
      {
        id:18,
        label:"Demander un rendez-vous proche d’électroencéphalogramme  (dans les 48H)",
        note:-1,
        reponse:["Rendez-vous pris dans 15 jours"],
      },
      {
        id:19,
        label:"Demander une échographie transfontanellaire",
        note:-2,
        reponse:["Refusée par le radiologue de garde car non indiquée"],
      },
      {
        id:20,
        label:"Demander des transaminases",
        note:1,
        reponse:[
          "ASAT: 39U/l",
          "ALAT:22U/L",
        ],
      },
      {
        id:21,
        label:"Prescrire du paracétamol sirop dose de poids 4 fois par jour",
        note:2,
        reponse:["Paracétamol donné", "Température contrôlée à 38,2° après 1 H"],
      },
      {
        id:22,
        label:"Donner du valium®: 0,5 mg/Kg en intra-rectal",
        note:-1,
        reponse:["Non donné", "Lina n’est pas en train de convulser"],
      },
      {
        id:23,
        label:"Prescrire un bolus de phenobarbital (Gardenal®): 20 mg/Kg en IL lente",
        note:-2,
        reponse:["Inutile", "Il ne s’agit pas d’un état de mal convulsif"],
      },
      {
        id:24,
        label:"Prescrire du valium® gouttes 0,5 mg/Kg/j tant que persiste la fièvre",
        note:-1,
        reponse:["Non donné car inutile"],
      },
      {
        id:25,
        label:"Prescrire du valproate (Depakine®) sirop  30mg/Kg/j ",
        note:2,
        reponse:["Depakine® commencée ce jour", "Ordonnance faite pour 3 mois"],
      },
      {
        id:26,
        label:"Rassurer les parents et laisser partir Lina ",
        note:-2,
        reponse:["L’enfant refait des pics de fièvre à 40°C et reconvulse chez lui", "Il est ramené aux urgences après 4 heures"],
      },
    ];

    ctrl.showTest = function(test){
      ctrl.selectedTestId = test;
      if (ctrl.candidate){
        ctrl.noname = false;
        ctrl.candidate = ctrl.candidate.replace(/ /g,'_') + ctrl.selectedTestId;
        // localStorage[ctrl.candidate] = '';
        if (ctrl.selectedTestId === 1){
          ctrl.firstSelected = true;
        }
        else if (ctrl.selectedTestId === 2){
          ctrl.secondSelected = true;
        }
        else if (ctrl.selectedTestId === 3){
          ctrl.thirdSelected = true;
        }
        else if (ctrl.selectedTestId === 4){
          ctrl.forthSelected = true;
        }
        ctrl.selectedTest = true;
      }
      else {
        ctrl.noname = true;
      }
      // ctrl.handleAuthClick();
    }

    ctrl.select = function(item,list){
      if (!item.clicked && !ctrl.end){
        ctrl.selectedItem = item;
        item.clicked = true;
        ctrl.score += item.note;
        if(item.note<0){
          ctrl.negScore+=item.note;
        }
        // localStorage[ctrl.candidate] = JSON.stringify({ reponse: ctrl[list], note: ctrl.score});
        if (item.note === 0 && item.end){
          ctrl.score = 0;
          ctrl.end = true;
          ctrl.fin();
          return;
        }

      }
    }

    function getNote(id){
      var totalNeg = 0;
      var total = 0;
      switch(id){
        case 1:
          ctrl.list.forEach(function(element) {
            total += element.note
            if (element.note < 0){
              totalNeg += element.note;
            }
          });
          break;
        case 2:
          ctrl.list2.forEach(function(element) {
            total += element.note
            if (element.note < 0){
              totalNeg += element.note;
            }
          });
          break;
        case 3:
          ctrl.list3.forEach(function(element) {
            total += element.note
            if (element.note < 0){
              totalNeg += element.note;
            }
          });
          break;
        case 4:
          ctrl.list4.forEach(function(element) {
            total += element.note
            if (element.note < 0){
              totalNeg += element.note;
            }
          });
          break;
      }
      return ((ctrl.score - ctrl.negScore) / (total - totalNeg)) * 20;
    }


    ctrl.fin = function(){
      console.log(getNote(ctrl.selectedTestId));
      ctrl.note = ctrl.end? 0 : getNote(ctrl.selectedTestId);
      ctrl.showResult = true;
      ctrl.end = true;
      $state.go('home.correction', {test:ctrl.selectedTestId, note: ctrl.note, score: ctrl.score});
    }

    ctrl.recap = function(){
      ctrl.selectedTest = true;
      $state.go('home.recap')
    }

  /* var clientId = '313464398156-qhq9b4bpvfq08lnir6e75luplj98aqa2.apps.googleusercontent.com';
    var apiKey = 'AIzaSyAIwjXk7adZMrPCPNnHOCoUruT5HeTTDuE';
    var scopes = 'https://www.googleapis.com/auth/gmail.send';

    function handleClientLoad() {
      gapi.client.setApiKey(apiKey);
      window.setTimeout(checkAuth, 1);
    }

    function checkAuth() {
      gapi.auth.authorize({
        client_id: clientId,
        scope: scopes,
        immediate: true
      }, handleAuthResult);
    }

    ctrl.handleAuthClick = function() {
      gapi.auth.authorize({
        client_id: clientId,
        scope: scopes,
        immediate: false
      }, handleAuthResult);
      return false;
    }

    function handleAuthResult(authResult) {
      if(authResult && !authResult.error) {
        $scope.$apply(function() {
          if (ctrl.candidate){
            ctrl.noname = false;
            ctrl.candidate = ctrl.candidate.replace(/ /g,'_')+ctrl.selectedTestId;
            localStorage[ctrl.candidate] = '';
            if (ctrl.selectedTestId === 1){
              ctrl.firstSelected = true;
            }
            else if (ctrl.selectedTestId === 2){
              ctrl.secondSelected = true;
            }
            ctrl.selectedTest = true;
          }
          else {
            ctrl.noname = true;
          }
        });
        // loadGmailApi();

      } else {
        $('#authorize-button').on('click', function(){
          ctrl.handleAuthClick();
        });
      }
    }

    function loadGmailApi() {
      gapi.client.load('gmail', 'v1', displayInbox);
    }

    function displayInbox() {
      var request = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'labelIds': 'INBOX',
        'maxResults': 10
      });
      request.execute(function(response) {
        $.each(response.messages, function() {
          var messageRequest = gapi.client.gmail.users.messages.get({
            'userId': 'me',
            'id': this.id
          });
          messageRequest.execute(appendMessageRow);
        });
      });
    }

    function appendMessageRow(message) {
      $('.table-inbox tbody').append(
        '<tr>\
          <td>'+getHeader(message.payload.headers, 'From')+'</td>\
          <td>\
            <a href="#message-modal-' + message.id +
              '" data-toggle="modal" id="message-link-' + message.id+'">' +
              getHeader(message.payload.headers, 'Subject') +
            '</a>\
          </td>\
          <td>'+getHeader(message.payload.headers, 'Date')+'</td>\
        </tr>'
      );
      var reply_to = (getHeader(message.payload.headers, 'Reply-to') !== '' ?
        getHeader(message.payload.headers, 'Reply-to') :
        getHeader(message.payload.headers, 'From')).replace(/\"/g, '&quot;');

      var reply_subject = 'Re: '+getHeader(message.payload.headers, 'Subject').replace(/\"/g, '&quot;');
      $('body').append(
        '<div class="modal fade" id="message-modal-' + message.id +
            '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
          <div class="modal-dialog modal-lg">\
            <div class="modal-content">\
              <div class="modal-header">\
                <button type="button"\
                        class="close"\
                        data-dismiss="modal"\
                        aria-label="Close">\
                  <span aria-hidden="true">&times;</span></button>\
                <h4 class="modal-title" id="myModalLabel">' +
                  getHeader(message.payload.headers, 'Subject') +
                '</h4>\
              </div>\
              <div class="modal-body">\
                <iframe id="message-iframe-'+message.id+'" srcdoc="<p>Loading...</p>">\
                </iframe>\
              </div>\
              <div class="modal-footer">\
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
                <button type="button" class="btn btn-primary reply-button" data-dismiss="modal" data-toggle="modal" data-target="#reply-modal"\
                onclick="fillInReply(\
                  \''+reply_to+'\', \
                  \''+reply_subject+'\', \
                  \''+getHeader(message.payload.headers, 'Message-ID')+'\'\
                  );"\
                >Reply</button>\
              </div>\
            </div>\
          </div>\
        </div>'
      );
      $('#message-link-'+message.id).on('click', function(){
        var ifrm = $('#message-iframe-'+message.id)[0].contentWindow.document;
        $('body', ifrm).html(getBody(message.payload));
      });
    }

    function sendEmail()
    {
      $('#send-button').addClass('disabled');

      sendMessage(
        {
          'To': $('#compose-to').val(),
          'Subject': $('#compose-subject').val()
        },
        $('#compose-message').val(),
        composeTidy
      );

      return false;
    }

    function composeTidy()
    {
      $('#compose-modal').modal('hide');

      $('#compose-to').val('');
      $('#compose-subject').val('');
      $('#compose-message').val('');

      $('#send-button').removeClass('disabled');
    }

    function sendReply()
    {
      $('#reply-button').addClass('disabled');

      sendMessage(
        {
          'To': $('#reply-to').val(),
          'Subject': $('#reply-subject').val(),
          'In-Reply-To': $('#reply-message-id').val()
        },
        $('#reply-message').val(),
        replyTidy
      );

      return false;
    }

    function replyTidy()
    {
      $('#reply-modal').modal('hide');

      $('#reply-message').val('');

      $('#reply-button').removeClass('disabled');
    }

    function fillInReply(to, subject, message_id)
    {
      $('#reply-to').val(to);
      $('#reply-subject').val(subject);
      $('#reply-message-id').val(message_id);
    }

    function sendMessage(headers_obj, message, callback)
    {
      var email = '';

      for(var header in headers_obj)
        email += header += ": "+headers_obj[header]+"\r\n";

      email += "\r\n" + message;

      var sendRequest = gapi.client.gmail.users.messages.send({
        'userId': 'me',
        'resource': {
          'raw': window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_')
        }
      });

      return sendRequest.execute(callback);
    }

    function getHeader(headers, index) {
      var header = '';
      $.each(headers, function(){
        if(this.name.toLowerCase() === index.toLowerCase()){
          header = this.value;
        }
      });
      return header;
    }

    function getBody(message) {
      var encodedBody = '';
      if(typeof message.parts === 'undefined')
      {
        encodedBody = message.body.data;
      }
      else
      {
        encodedBody = getHTMLPart(message.parts);
      }
      encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
      return decodeURIComponent(escape(window.atob(encodedBody)));
    }

    function getHTMLPart(arr) {
      for(var x = 0; x <= arr.length; x++)
      {
        if(typeof arr[x].parts === 'undefined')
        {
          if(arr[x].mimeType === 'text/html')
          {
            return arr[x].body.data;
          }
        }
        else
        {
          return getHTMLPart(arr[x].parts);
        }
      }
      return '';
    }
    */


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
      },
      {
        label: "Prescrire du racecadotril (Tiorfan®) sachets",
        reponse:["Choix utile"],
        justification: ["Le racécadotril (Tiorfan®) peut être indiqué du fait de sa capacité à réduire le débit des selles sans effet sur la motricité intestinale."]
      },
      {
        label: "Prescrire du cefotaxime (Claforan®) 700 mg/j en IV",
        reponse:["Non indiqué", "Risqus iatrogènes"],
        justification: ["Il n’y a aucun argument en faveur d’une infection bactérienne"]
      },
      {
        label: "Prescrire du metoclopramide (Primperan) en intramusculaire",
        reponse:["Non indiqué"],
        justification: ["Les antiémétiques ne sont pas recommandés dans une gastroentérite aiguë"]
      },
      {
        label: "Prescrire des lavages du nez au serum physiologique",
        reponse:["Choix utile"],
        justification: [`l’obstruction nasale chez le nourrisson:
        - peut causer une dyspnée haute
        - favorise la survenue d’otite moyenne aigue`]
      },
      {
        label: "Faire une coproculture",
        reponse:["Non faite", "Non indiquée"],
        justification: ["La diarrhée n’est pas glairo-sanglante", "Pas d’éléments en faveur d’une diarrhée invasive"]
      },
      {
        label: "Prescrire des soins du siège à l’éosine aqueuse",
        reponse:["Choix utile"],
        justification: ["Utile pour assécher les lésions et éviter les surinfections mycosiques"]
      },
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
        justification : ["La glycémie à la bandelette n’est qu’un moyen de dépistage, toute anomalie doit être confirmée par le dosage veineux de la glycémie qui est le Gold Standard"]
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
      },
      {
        label: "Prélever une calcémie",
        reponse: ["calcémie: 90 mg/l (2,25 mmol/l)", "Choix utile"],
        justification:["devant tout nouveau-né symptomatique il faut évoquer les causes métaboliques « occasionnelles » à type d’hypo et hypercalcémie."],
      },
      {
        label: "Mettre une perfusion intraveineuse de SG5%: 360 ml/j",
        reponse: ["Anas refait une hypoglycémie après 2 heures"],
        justification:["le SG5% n’est pas adapté pour le nouveau-né surtout en hypoglycémie car il ne couvre pas les besoins glucidiques recommandés"],
      },
      {
        label: "Surveiller les glycémies capillaires/4H",
        reponse: ["Choix utile"],
        justification:["la surveillance des GAT permet de vérifier la normalisation des glycémies et de détecter les éventuelles récidives."],
      },
      {
        label: "Faire une échographie cardiaque",
        reponse: ["refusée par le cardiologue", "Pas d’indication"],
        justification:["pas de signes en faveur d’une insuffisance cardiaque ou en faveur d’une cardiopathie congénitale"],
      },
      {
        label: "Mettre une perfusion intraveineuse de SG10%: 360 ml/j",
        reponse: ["Perfusion mise en place", "Choix essentiel"],
        justification:["la perfusion de SG10% permet d’assurer un apport régulier et suffisant pour éviter les hypoglycémies."],
      },
    ];
    correction.list3 = [
      {
        label:"Demander une électrophorèse de l’hémoglobine",
        justification: ["Vous avez probablement pensé à une hémoglobinopathie notamment une drépanocytose mais ce diagnostic n’explique pas le purpura"],
        reponse:["Hb A1: 97%", "Hb A2: 2%", "Hb F: 1%"],
      },
      {
        label:"Donner de la prednisone (cp à 5 mg): 5 cp/j",
        justification: ["La corticothérapie n’a aucune place car même si devant des polyarthralgies le diagnostic de RAA est évoqué ceci n’explique pas le purpura ni les douleurs osseuses. Et de toute façon, même dans le RAA la corticothérapie ne serait pas indiquée."],
        reponse:["ARRÊT DU TEST", "Vous allez masquer  une leucémie aigue  et retarder la prise en charge"],
      },
      {
        label:"Demander une NFS",
        justification: ["Choix essentiel, la numération est nécessaire devant tout pupura.", "Dans ce cas elle permet aussi d’objectiver d’autres anomalies: hyperleucocytose à prédominance lymphocytaire, une monocytose, une anémie normochrome normocytaire arégénérative et une thrombopénie"],
        reponse:[
          "GB: 40,000/mm3",
          "PNN= 5800	Lymphocytes: 30,000/mm3",
          "Monocytes: 4000/mm3    Éosinophiles: 200/mm3",
          "GR= 2,8 106/mm3",
          "Hb: 8 g/dl   VGM: 88 fl  TCMH: 29 pg",
          "Réticulocytes: 1%",
          "Plaquettes: 47 000/mm3",]
      },
      {
        label:"Prélever des hémocultures",
        justification: ["Hazem est fébrile avec altération de l’état général, les hémocultures perttent de rechercher une bactériémie pour guider une éventuelle antibiothérapie"],
        reponse:[
          "Hémocultures faites",
          "Culture négative",
        ],
      },
      {
        label:"Demander un groupe sanguin avec phénotypage",
        justification: ["Choix essentiel", "Hazem a une anémie, il peut nécessiter une transfusion", "Avoir le phénotypage disponible permet de transfuser par du sang compatible pour éviter les immunisations secondaires"],
        reponse:["Groupe sanguin B positif E+ C+ Kell négatif"],
      },
      {
        label:"Demander une échographie abdominale",
        justification: ["Choix utile, l’échographie abdominale permet de rechercher un syndrome tumoral"],
        reponse:[
          "Pas d’hépatomégalie",
          "Splénomégalie à 8 cm",
          "Multiples adénopathies intra-abdominales",
          "Pas d’épanchement péritonéal",
        ],
      },
      {
        label:"Donner de l’acide-acétyl-salicylique sachets 250 mg : 1sachet x 5/j",
        justification: ["Le traitement anti-inflammatoire n’a aucune place il ne s’agit pas d’une maladie rhumatismale.", "Les AINS ne sont pas dénués d’effets indésirables, ils risquent de majorer le risque hémorragique chez ce patient ayant une thrombopénie"],
        reponse:["risque de complication"],
      },
      {
        label:"Mettre sous Rocephine: 700 mg/j en IV",
        justification: ["Aucune indication", "L’antibiothérapie ne doit pas être donnée sans preuve d’infection bactérienne. Il n’ y a pas d’éléments de gravité immédiate qui justifierait un traitement probabiliste."],
        reponse:[],
      },
      {
        label:"Demander un frottis sanguin",
        justification: ["Choix essentiel", "Le frottis sanguin est un examen simple et rapide", "Une hémopathie maligne est fortement suspectée sur les données cliniques et de l’hémogramme"],
        reponse:["Présence de 35% de blastes circulants"],
      },
      {
        label:"Donner du paracétamol: dose n°14 x 4/j",
        justification: ["Choix utile puisque Hazem est fébrile"],
        reponse:["La température baisse à 38,2 puis remonte au bout de 3 heures à 39°C"],
      },
      {
        label:"Faire un myélogramme",
        justification: ["Choix essentiel", "Le myélogramme est indiqué devant les anomalies de l’hémogramme et du frottis sanguin évoquant une hémopathie maligne"],
        reponse:["Aspect en faveur d’une leucémie aigue myéloblastique"],
      },
      {
        label:"Demander des radiographies des genoux et des chevilles",
        justification: ["Choix inutile", "Une scintigraphie osseuse serait plus utile pour rechercher des métastases osseuses"],
        reponse:["	Radiographies normales"],
      },
      {
        label:"Demander la sérologie de la leishmaniose",
        justification: ["Choix indifférent", "La leishmaniose viscérale peut être évoquée au début devant la fièvre prolongée et la splénomégalie mais les données de l’hémogramme et du frottis ne sont pas en faveur de ce diagnostic"],
        reponse:["Non faite"],
      },
      {
        label:"Faire un ECG",
        justification: ["Cet examen est inutile", "Il n’y a pas d’éléments cliniques en faveur d’une anomalie cardiaque"],
        reponse:["ECG normal"],
      },
      {
        label:"Demander une CRP",
        justification: ["Choix utile", "Devant un tableau de fièvre prolongée, la CRP permet de rechercher un syndrome inflammatoire biologique"],
        reponse:["CRP= 120 mg/l"],
      },
      {
        label:"Transfuser par des culots globulaires phénotypés",
        justification: ["Choix inutile car il n’ya pas de signes de mauvaise tolérance de l’anémie.", "Le traitement de la leucémie aigue se complique d’une aplasie médullaire et Hazem aura besoin très probablement de transfusions plus tard.", "Une transfusion inutile peut provoquer une immunisation et donc l’échec des transfusions ultérieures."],
        reponse:["Pas d’indication"],
      },
      {
        label:"Faire un temps de saignement",
        justification: ["Examen inutile car Hazem a un pupura thrombopénique", "La réalisation d’un temps de saignement n’a aucun intérêt", "C’est un geste invasif avec risque de cicatrices"],
        reponse:["Non fait"],
      },
      {
        label:"Transfuser par des culots plaquettaires",
        justification: ["Choix inutile car il n’y a pas de syndrome hémorragique", "Le traitement de la leucémie aigue se complique d’une aplasie médullaire et Hazem aura besoin très probablement de transfusions plus tard.", "Une transfusion inutile peut provoquer une immunisation et donc l’échec des transfusions ultérieures."],
        reponse:["Pas d’indication"],
      },
    ];
    correction.list4 = [
      {
        label:"Rechercher des antécédents familiaux d’épilepsie",
        justification : [
          "La présence d’antécédents familiaux d’épilepsie est associée à un risque plus élevé de développer une épilepsie.",
          "Cet élément sera pris en considération lors de la décision ou non de mettre sous traitement convulsivant en continu.",
        ],
        reponse:["Pas d’antécédents familiaux d’épilepsie"],
      },
      {
        label:"Vérifier le statut vaccinal de Lina",
        justification : ["La vaccination de Lina n’est pas à jour",
          "Ceci justifie la réalisation d’une ponction lombaire chez cette enfant de moins de 12 mois",
        ],
        reponse:[
          "BCG, hépatite B à la naissance",
          "DTC Polio, HiB et hépatite à 2 mois",
          "DTC Polio, HiB à 3 mois",
          "Vaccin de 6 mois reporté car a eu une bronchiolite"],
      },
      {
        label:"Préciser son développement psychomoteur",
        justification : ["Le développement psychomoteur de Lina est normal",
          "Une anomalie du développement psychomoteur (retard ou régression) ferait évoquer un épilepsie dont il faudra rechercher l’étiologie.",
          ],
        reponse:[
          "Sourire réponse à 35 jours",
          "Tenue de la tête à 2 mois et demi",
          "Position assise avec appui à 6 mois",
          "Préhension (+)",
          "Babillage depuis 1 mois",]
      },
      {
        label:"Vérifier la prise de vitamine D",
        justification : ["La prophylaxie par la vitamine D est correcte.",
          "En l’absence ou en cas d’irrégularité de prise de vitamine D, un rachitisme doit être suspecté et une calcémie doit être prélevée à la recherche d’une hypocalcémie",
          ],
        reponse:[
          "A pris du sterogyl® 3  gouttes par jour jusqu’à l’âge de 6 mois",
          "À 6mois a pris une dose de vitamine D3: 200000U pers os",
        ],
      },
      {
        label:"Vérifier si Lina a eu un traumatisme récent",
        justification : ["La présence de fièvre ne doit pas faire éliminer les causes occasionnelles de convulsion telle qu’un traumatisme crânien.",
          "En cas de crise atypique, si une histoire de traumatisme crânien est retrouvée, une imagerie cérébrale (scanner++) serait justifiée.",
          ],
        reponse:["Lina est gardée par sa mère", "Pas de notion de traumatisme récent"],
      },
      {
        label:"Rechercher la présence de médicaments ou de toxiques à portée",
        justification : ["La prise de toxiques doit être recherchée d’autant plus que Lina reste somnolente",
          "Certains toxiques nécessitent un traitement spécifique",
          ],
        reponse:[
          "Lina est gardée par sa mère",
          "Pas de médicaments ou de toxiques à sa portée",
        ],
      },
      {
        label:"Mesurer la pression artérielle ",
        justification : ["La pression artérielle est normale pour l’âge",
          "Devant des convulsions même fébriles la pression artérielle doit être vérifiée car une la convulsion peut être causée par une hypertension artérielle nécessitant un traitement urgent"
          ],
        reponse:["Pression artérielle 90/55 mmHg"],
      },
      {
        label:"Demander un examen du fond d’œil",
        justification : ["Le fond d’œil n’a aucun intérêt car d’une part Lina n’a pas de signes neurologiques pouvant faire évoquer une hypertension intracrânienne d’autre part le fond n’a plus d’indication pour le diagnostic d’HTIC en cas de doute un scanner cérébral serait plus approprié."],
        reponse:["Refusé par l’ophtalmologue de garde."],
      },
      {
        label:"Faire une otoscopie",
        justification : ["L’examen des tympans est systématique chez tout nourrisson fébrile",
          "Lina a une otite congestive qui ne nécessite pas de traitement antibiotique"
          ],
        reponse:["Tympans complets légèrement congestifs"],
      },
      {
        label:"Faire un examen des urines à la bandelette réactive Multistix®",
        justification : ["La bandelette urinaire a deux intérêts:",
        "1. Rechercher des anomalies en faveur d’une infection urinaire chez cette enfant fébrile sous antibiotique",
        "2. Rechercher des signes en faveur d’un syndrome hémolytique et urémique ou une autre pathologie rénale pourvoyeuse d’HTA."
      ],
        reponse:["Urines limpides/ pH:5", "Densité Urinaire: 1015/ A,G,P,H,L,N: (-)"],
      },
      {
        label:"Faire une glycémie au doigt",
        justification : ["Lina a convulsé à deux reprises et elle reste somnolente, la glycémie capillaire permet de dépister une éventuelle hypoglycémie nécessitant un traitement urgent."],
        reponse:["Glycémie au doigt: 0,76g/l"],
      },
      {
        label:"Demander une calcémie",
        justification : ["La calcémie n’est pas indiquée devant une convulsion fébrile sans signes évocateurs ou pathologie pourvoyeuse d’hypocalcémie",
          "La prophylaxie par la vitamine D est correcte",
          "Il n’y a pas de signes cliniques en faveur de rachitisme",
          "Il n’y a pas d’autres signes évocateurs d’hypocalcémie"
          ],
        reponse:["Non faite car non indiquée"],
      },
      {
        label:"Demander une numération formule sanguine",
        justification : [
          "Pas de pâleur",
          "Pas de purpura",
          "Pas de signes infectieux sévères.",
          
        ],
        reponse:["Non faite CAR non indiquée"],
      },
      {
        label:"Prélever une hémoculture",
        justification : [
          "Il n’est pas recommandé de réaliser une hémoculture de routine après une convulsion fébrile typique.",
          "Il n’y a pas de signes de gravité faisant évoquer une bactériémie",
          
        ],
        reponse:["Non faite car non indiquée"],
      },
      {
        label:"Demander un ionogramme sanguin",
        justification : [
          "Il n’est pas recommandé de réaliser un ionogramme systématiquement devant convulsion fébrile",
          "Lina n’a pas de troubles de l’hydratation ni de signes digestifs (vomissements, diarrhée) pourvoyeurs de troubles électrolytique",
          
        ],
        reponse:["Non fait car non indiqué"],
      },
      {
        label:"Réaliser une ponction lombaire",
        justification : [
          "La ponction lombaire était indiquée chez Lina devant l’association de ces éléments:",
          "Age > 1an",
          "Vaccination incomplète (HiB) et pas de vaccination par le pneumocoque",
          "Prise préalable d’antibiotique (pouvant abatardir le tableau de méningite bactérienne)",
         
        ],
        reponse:[
          "Liquide eau de roche normotendu",
          "Globules rouges 2 élém/mm3, GB: 1 élém/mm3",
          "Glucorrachie: 0,45 g/l; Albuminorrachie: 0,1g/l",
          "Examen direct: négatif"],
      },
      {
        label:"Pratiquer une radiographie du  thorax au lit ",
        justification : ["Il n’y a pas d’anomalie à l’examen pulmonaire"],
        reponse:["Non faite car non indiquée",]
      },
      {
        label:"Demander un rendez-vous proche d’électroencéphalogramme  (dans les 48H)",
        justification : [
          "L’EEG n’est pas recommandé dans les cas de convulsion fébrile typique. ",
          `Chez Lina la convulsion est atypique/ complexe  car elle a récidivé dans les 24H 
          ➔ L’EEG peut être envisagé chez elle. Mais cet EEG devrait idéalement être fait au moins 7 jours après la convulsion fébrile atypique.`,
          "Un EEG fait de façon précoce peut montrer des anomalies non spécifiques",
        ],
        reponse:["Rendez-vous pris dans 15 jours"],
      },
      {
        label:"Demander une échographie transfontanellaire",
        justification : [
          "L’imagerie cérébrale n’est pas indiquée systématiquement devant un enfant avec ",
          "une convulsion fébrile typique. ",
          "L’imagerie cérébrale n’est pas indiquée systématiquement devant un enfant ayant présenté une première convulsion fébrile atypique.",
          " Elle peut être envisagée chez les enfants ayant présenté une convulsion fébrile focale ou avec plusieurs caractéristiques atypiques, selon le jugement clinique. ",
          
        ],
        reponse:["Refusée par le radiologue de garde car non indiquée"],
      },
      {
        label:"Demander des transaminases",
        justification : [
          "Lina a une crise atypique/complexe",
          "Un traitement préventif par valproate va être prescrit",
          "Ce traitement peut avoir une toxicité hépatique",
          "Les transaminases faites avant le début du traitement permettrait d’éliminer une hépatopathie préexistante qui est une contre indication au valproate.",
        ],
        reponse:[
          "ASAT: 39U/l",
          "ALAT:22U/L",
        ],
      },
      {
        label:"Prescrire du paracétamol sirop dose de poids 4 fois par jour",
        justification : ["Le  traitement de la fièvre est essentiel en cas de convulsion fébrile pour abaisser la température et éviter la récidive des convulsions"],
        reponse:["Paracétamol donné", "Température contrôlée à 38,2° après 1 H"],
      },
      {
        label:"Donner du valium®: 0,5 mg/Kg en intra-rectal",
        justification : ["Un traitement pharmacologique peut être envisagé chez le patient dont la convulsion fébrile dure plus de 5 minutes."],
        reponse:["Non donné", "Lina n’est pas en train de convulser"],
      },
      {
        label:"Prescrire un bolus de phenobarbital (Gardenal®): 20 mg/Kg en IL lente",
        justification : [
          "Le phenobarbital IV comporte un risque de dépression respiratoire ",
          "Il ne doit être prescrit qu’en cas d’état de mal épileptique.",
          
        ],
        reponse:["Inutile", "Il ne s’agit pas d’un état de mal convulsif"],
      },
      {
        label:"Prescrire du valium® gouttes 0,5 mg/Kg/j tant que persiste la fièvre",
        justification : [
          "Le valium n’est utile que lors des convulsions",
          "Il n’y a pas de recommandation quant à l’intérêt de la forme orale du diazepam dans le traitement des convulsions fébriles",
          
        ],
        reponse:["Non donné car inutile"],
      },
      {
        label:"Prescrire du valproate (Depakine®) sirop  30mg/Kg/j ",
        justification : [
          "Lina a présenté une crise atypique (récidive dans les 24h)➔ un traitement anticonvulsivant prophylactique est indiqué.",
          "Le valproate a moins d’effets indésirables que le phenobarbital",
          "Le traitement intermittent par benzodiazepines en intrarectal (diazepam)ou per os (midazolam) ne sont pas encore disponibles en Tunisie",
          
        ],
        reponse:["Depakine® commencée ce jour", "Ordonnance faite pour 3 mois"],
      },
      {
        label:"Rassurer les parents et laisser partir Lina ",
        justification : [],
        reponse:["L’enfant refait des pics de fièvre à 40°C et reconvulse chez lui", "Il est ramené aux urgences après 4 heures"],
      },
    ];
    correction.note = $state.params.note;
    correction.score = $state.params.score;
    correction.testId = $state.params.test;
    if ($state.params.test == 1){
      correction.selectedList = correction.list;
    }
    else if ($state.params.test == 2){
      correction.selectedList = correction.list2;
    }
    else if ($state.params.test == 3){
      correction.selectedList = correction.list3;
    }
    else if ($state.params.test == 4){
      correction.selectedList = correction.list4;
    }
    correction.reset = function(){
      $state.go('home', {}, {reload: true});
    }
  }).controller('recap',function(){
    var recap = this;
    recap.validate = function(){
      var pass = recap.cypher();
      if (pass.s === 753 && pass.p === 81267812556971030000){
        recap.valid = true;
      }
    }

    recap.cypher = function(){
      var s = 0;
      for (var i=0;i<recap.pass.length;i++){
        s+=recap.pass.charCodeAt(i);
      }
      var p = 1;
      for (var i=0;i<recap.pass.length;i++){
        p*=recap.pass.charCodeAt(i);
      }
      return {s:s,p:p};

    }
    recap.listCandidats = {};
    recap.candidats = {};
    // for (var prop in localStorage){
    //  recap.listCandidats[prop] = JSON.parse(localStorage[prop]);
    // }
    delete recap.listCandidats.length;
    for (var candidat in recap.listCandidats){
      recap.candidats[candidat] = {reponses: recap.listCandidats[candidat].reponse.filter(function(rep){
        return rep.clicked;
      })};
      recap.candidats[candidat].note = recap.listCandidats[candidat].note;
      recap.candidats[candidat].nom = candidat.replace(/_/g, ' ');
    }
  })
})();
