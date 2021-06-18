/// CAPEXP Association Task
/// 3 November 2019


var shuffleSequence = seq(
                          "setcounter", // set counter immediately to start next Latin square list
                          "Welcome",
                          "Consent",
                          "Instructions01",
                          sepWith("sep",
                              seq("practice")),
                          "Instructions02",
                          sepWith("sep",
                               rshuffle(anyOf(
                                   "A_mcverbAB", "B_mcverbCD", "C_rcverbAC", "D_rcverbBD", "E_rcnounAC", "F_rcnounBD"))),
                          "sr",
                          "Outro",
                          "Close"
                          );

var showProgressBar =        true;
var progressBarText =        "Fortschritt";
var continueMessage =        "Hier klicken um fortzufahren.";
var manualSendResults =      true;
var sendingResultsMessage =  "Die Ergebnisse werden an den Server gesendet.";
var completionMessage =      "Die Ergebnisse wurden erfolgreich an den Server gesendet. Sie erhalten nun den Prolific-Completion Code";


var defaults = [
    "Form",{continueMessage:"Hier klicken um fortzufahren."},
    "Message",{continueMessage:"Hier klicken um fortzufahren."},
    "Question",{
        as: [
                [1,"1"],
                [2,"2"],
                [3,"3"],
                [4,"4"],
                [5,"5"],
                [6,"6"],
                [7,"7"]
            ],
        presentAsScale: true,
        leftComment: "nicht plausibel",
        rightComment: "sehr plausibel"}
];


var items =[
    ["setcounter", "__SetCounter__", {  }],

    [ "Welcome",
      "Form",
      {"html": {include: "Welcome.html" }}
    ],

    [ "Consent",
      "Form",
      {"html": {include: "Consent.html" }}
    ],

    [ "Instructions01",
      "Form",
      {"html": {include: "Instructions01.html" }}
    ],

    [ "Instructions02",
      "Form",
      {"html": {include: "Instructions02.html" }}
    ],

    [ "Outro",
      "Form",
      {"html": {include: "Outro.html" }}
    ],

    [ "Close",
      "Message",
      { html: "Sie können das Fenster jetzt schließen.", transfer: null}
    ],

    [ "sep",
      "Separator",
      {transfer: 500, normalMessage:""}
    ],

	["sr", "__SendResults__", { }],


  ["practice", 'Question',{q:'Ludmilla verließ die Universität  -  Sofort ging sie in die Vorlesung '}],
  ["practice", 'Question',{q:'Urs bezahlte die Studiengebühren   -   Danach bekam er einen Exmatrikulationsbescheid '}],
  ["practice", 'Question',{q:'Torsten steigt aus dem Swimmingpool  -  Sofort trocknete er sich mit dem Handtuch '}],
  ["practice", 'Question',{q:'Francesca kocht Spaghetti  -  Später nimmt sie das Sieb '}],
  ["practice", 'Question',{q:'Alena bereitet ihr Referat vor  -  Schnell kommt sie unter Zeitdruck  '}],
  ["practice", 'Question',{q:'Xenia geht aus dem Haus  -  Schnell schlüppft sie in ihre Pantoffeln   '}],
  ["practice", 'Question',{q:'Mariam setzt das Mikrofon auf  -  Danach betritt sie die Bühne '}],


/// Experimental Items

[["V_r" , 1],'Question', {q:' Annika betrat die Boutique Eine Zeit lang suchte sie nach einer Hose '}],
[["V_r" , 1],'Question', {q:' Annika verließ die Boutique Eine Zeit lang suchte sie nach einer Hose '}],
[["V_r" , 1],'Question', {q:' Annika zerschnitt die Boutique Eine Zeit lang suchte sie nach einer Hose '}],
[["V_u" , 1],'Question', {q:' Annika verließ die Boutique Eine Zeit lang suchte sie nach einem Taxi '}],
[["V_u" , 1],'Question', {q:' Annika betrat die Boutique  Eine Zeit lang suchte sie nach einem Taxi '}],
[["V_u" , 1],'Question', {q:' Annika zerschnitt die Boutique  Eine Zeit lang suchte sie nach einem Taxi '}]
];
