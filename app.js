(function () {
'use strict';

  angular.module('app', [])
  .controller('ctrl', function (Balance) {
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
        reponse: ["L’enfant reconsulte au bout de 8 heures dans un tableau de collapsus par déshydratation sévère"]
      }
    ];

    ctrl.select = function(item){
      if (!item.clicked && !ctrl.end){
        ctrl.selectedItem = item;
        item.clicked = true;
        ctrl.note += item.note;
        localStorage.list = JSON.stringify(ctrl.list);
      }
    }

    ctrl.fin = function(){
      ctrl.showResult = true;
      ctrl.end = true;
    }
  })
  .service("Balance",function(){
    var service = this;
    service.itterator = 0;
    service.weigh = function(balls){
      service.itterator ++
      var spare = [];
      var ballset = balls;
      if (ballset.length%2){
        spare.push(ballset[ballset.length-1]);
        ballset = ballset.slice(0,ballset.length-1)
      }
      var l = ballset.slice(0,ballset.length/2);
      var r = ballset.slice(ballset.length/2,ballset.length);
      if (l.length === 1){
        if (l[0].value === r[0].value){
          return spare[0];
        }
        else if (r[0].value>l[0].value){
          return r[0];
        }
        else {
          return l[0];
        }
      }
      else {
        var rs = r.reduce(function (a, b) {return {value: a.value + b.value};});
        var ls = l.reduce(function (a, b) {return {value: a.value + b.value};});
        if (ls.value === rs.value){
          return spare[0];
        }
        else if (rs.value > ls.value){
          return service.weigh(r);
        }
        else {
          return service.weigh(l);
        }
      }
    }
  });
  
})();
