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

  [["V_r" , 1a],'Question', {q:' Annika betrat die Boutique Eine Zeit lang suchte sie nach einer Hose '}],
[["V_r" , 1b],'Question', {q:' Annika verließ die Boutique Eine Zeit lang suchte sie nach einer Hose '}],
[["V_r" , 1c],'Question', {q:' Annika zerschnitt die Boutique Eine Zeit lang suchte sie nach einer Hose '}],
[["V_u" , 1d],'Question', {q:' Annika verließ die Boutique Eine Zeit lang suchte sie nach einem Taxi '}],
[["V_u" , 1e],'Question', {q:' Annika betrat die Boutique  Eine Zeit lang suchte sie nach einem Taxi '}],
[["V_u" , 1f],'Question', {q:' Annika zerschnitt die Boutique  Eine Zeit lang suchte sie nach einem Taxi '}],
[["V_r" , 2a],'Question', {q:' Jakob betrat die Bäckerei  Sofort kaufte  er ein Brötchen '}],
[["V_r" , 2b],'Question', {q:' Jakob verließ die Bäckerei  Sofort kaufte  er ein Brötchen '}],
[["V_r" , 2c],'Question', {q:' Jakob nähte die Bäckerei  Sofort kaufte  er ein Brötchen '}],
[["V_u" , 2d],'Question', {q:' Jakob verließ die Bäckerei  Sofort kaufte er ein Busticket '}],
[["V_u" , 2e],'Question', {q:' Jakob betrat die Bäckerei  Sofort kaufte er ein Busticket '}],
[["V_u" , 2f],'Question', {q:' Jakob nähte die Bäckerei  Sofort kaufte er ein Busticket '}],
[["V_r" , 5a],'Question', {q:' Lukas ging in den Gartenmarkt  Kurz danach schnitt man seine Haare '}],
[["V_r" , 5b],'Question', {q:' Lukas verließ den Gartenmarkt  Kurz danach schnitt man seine Haare '}],
[["V_r" , 5c],'Question', {q:' Lukas blendete den Gartenmarkt  Kurz danach schnitt man seine Haare '}],
[["V_u" , 5d],'Question', {q:' Lukas verließ den Gartenmarkt  Kurz danach schnitt man seine Haare '}],
[["V_u" , 5e],'Question', {q:' Lukas ging in den Gartenmarkt  Kurz danach schnitt man seine Haare '}],
[["V_u" , 5f],'Question', {q:' Lukas blendete den Gartenmarkt  Kurz danach schnitt man seine Haare '}],
[["V_r" , 6a],'Question', {q:' Franzi betrat das Fitnessstudio  Schnell ging sie zum Laufband '}],
[["V_r" , 6b],'Question', {q:' Franzi verließ das Fitnessstudio  Schnell ging sie zum Laufband '}],
[["V_r" , 6c],'Question', {q:' Franzi klebte das Fitnessstudio  Schnell ging sie zum Laufband '}],
[["V_u" , 6d],'Question', {q:' Franzi verließ das Fitnessstudio  Schnell ging sie zur Tiefgarage '}],
[["V_u" , 6e],'Question', {q:' Franzi betrat das Fitnessstudio  Schnell ging sie zur Tiefgarage '}],
[["V_u" , 6f],'Question', {q:' Franzi klebte das Fitnessstudio  Schnell ging sie zur Tiefgarage '}],
[["V_r" , 7a],'Question', {q:' Jonas schnitt das Obst weg  Kurz danach machte sein Vater Salat '}],
[["V_r" , 7b],'Question', {q:' Jonas warf das Obst weg  Kurz danach machte sein Vater Salat '}],
[["V_r" , 7c],'Question', {q:' Jonas sang das Obst weg  Kurz danach machte sein Vater Salat '}],
[["V_u" , 7d],'Question', {q:' Jonas warf das Obst weg  Kurz danach machte sein Vater Ärger '}],
[["V_u" , 7e],'Question', {q:' Jonas schnitt das Obst weg  Kurz danach machte sein Vater Ärger '}],
[["V_u" , 7f],'Question', {q:' Jonas sang das Obst weg  Kurz danach machte sein Vater Ärger '}],
[["V_r" , 8a],'Question', {q:' Lea kam zur Metzgerei  Schnell kaufte sie eine Wurst '}],
[["V_r" , 8b],'Question', {q:' Lea verließ die Metzgerei  Schnell kaufte sie eine Wurst '}],
[["V_r" , 8c],'Question', {q:' Lea zernagte die Metzgerei  Schnell kaufte sie eine Wurst '}],
[["V_u" , 8d],'Question', {q:' Lea verließ die Metzgerei  Schnell kaufte sie ein Hemd '}],
[["V_u" , 8e],'Question', {q:' Lea kam zur Metzgerei  Schnell kaufte sie ein Hemd '}],
[["V_u" , 8f],'Question', {q:' Lea zernagte die Metzgerei  Schnell kaufte sie ein Hemd '}],
[["V_r" , 9a],'Question', {q:' Claudia fuhr zum See  Dann öffnete sie den Sonnenschirm '}],
[["V_r" , 9b],'Question', {q:' Claudia verließ den See  Dann öffnete sie den Sonnenschirm '}],
[["V_r" , 9c],'Question', {q:' Claudia zermahlte den See  Dann öffnete sie den Sonnenschirm '}],
[["V_u" , 9d],'Question', {q:' Claudia verließ den See  Dann öffnete sie die Haustür '}],
[["V_u" , 9e],'Question', {q:' Claudia fuhr zum See  Dann öffnete sie die Haustür '}],
[["V_u" , 9f],'Question', {q:' Claudia zermahlte den See  Dann öffnete sie die Haustür '}],
[["V_r" , 10a],'Question', {q:' Bruno stieg in die Badewanne  Sofort nahm er die Seife '}],
[["V_r" , 10b],'Question', {q:' Bruno verließ die Badewanne  Sofort nahm er die Seife '}],
[["V_r" , 10c],'Question', {q:' Bruno lehrte die Badewanne  Sofort nahm er die Seife '}],
[["V_u" , 10d],'Question', {q:' Bruno verließ die Badewanne  Sofort nahm er das T-Shirt '}],
[["V_u" , 10e],'Question', {q:' Bruno stieg in die Badewanne  Sofort nahm er das T-Shirt '}],
[["V_u" , 10f],'Question', {q:' Bruno lehrte die Badewanne  Sofort nahm er das T-Shirt '}],
[["V_r" , 12a],'Question', {q:' Manuel ging raus ins Gewitter  Bald öffnete er seinen Regenschirm '}],
[["V_r" , 12b],'Question', {q:' Manuel flüchtete vorm Gewitter  Bald öffnete er seinen Regenschirm '}],
[["V_r" , 12c],'Question', {q:' Manuel demütigte das Gewitter  Bald öffnete er seinen Regenschirm '}],
[["V_u" , 12d],'Question', {q:' Manuel flüchtete vorm Gewitter  Bald öffnete er seinen Kleiderschrank '}],
[["V_u" , 12e],'Question', {q:' Manuel ging raus ins Gewitter  Bald öffnete er seinen Kleiderschrank '}],
[["V_u" , 12f],'Question', {q:' Manuel demütigte das Gewitter  Bald öffnete er seinen Kleiderschrank '}],
[["V_r" , 13a],'Question', {q:' Mia ging raus in die Kälte  Direkt sah sie den Schneefall '}],
[["V_r" , 13b],'Question', {q:' Mia flüchtete vor  der Kälte  Direkt sah sie den Schneefall '}],
[["V_r" , 13c],'Question', {q:' Mia belog die Kälte  Direkt sah sie den Schneefall '}],
[["V_u" , 13d],'Question', {q:' Mia ging raus in die Kälte  Direkt  sah sie den Sperling '}],
[["V_u" , 13e],'Question', {q:' Mia flüchtete vor der Kälte  Direkt  sah sie den Sperling '}],
[["V_u" , 13f],'Question', {q:' Mia belog die Kälte  Direkt  sah sie den Sperling '}],
[["V_r" , 14a],'Question', {q:' Markus betrat die Bank Prompt sah er eine lange Schlange zum Geldautomaten '}],
[["V_r" , 14b],'Question', {q:' Markus verließ die Bank Prompt sah er eine lange Schlange zum Geldautomaten '}],
[["V_r" , 14c],'Question', {q:' Markus kaute die Bank Prompt sah er eine lange Schlange zum Geldautomaten '}],
[["V_u" , 14d],'Question', {q:' Markus verließ die Bank Prompt sah er eine lange Schlange zum Straßenbahn '}],
[["V_u" , 14e],'Question', {q:' Markus betrat die Bank Prompt sah er eine lange Schlange zum Straßenbahn '}],
[["V_u" , 14f],'Question', {q:' Markus kaute die Bank Prompt sah er eine lange Schlange zum Straßenbahn '}],
[["V_r" , 15a],'Question', {q:' Dominik kam spät zur Schule Eilig begrüßte er seinen Lehrer '}],
[["V_r" , 15b],'Question', {q:' Dominik verließ die Schule Eilig begrüßte er seinen Lehrer '}],
[["V_r" , 15c],'Question', {q:' Dominik beschuldigte die Schule Eilig begrüßte er seinen Lehrer '}],
[["V_u" , 15d],'Question', {q:' Dominik verließ die  Schule Eilig begrüßte er seine Mutter '}],
[["V_u" , 15e],'Question', {q:' Dominik kam spät zur Schule Eilig begrüßte er seine Mutter '}],
[["V_u" , 15f],'Question', {q:' Dominik beschuldigte die Schule Eilig begrüßte er seine Mutter '}],
[["V_r" , 16a],'Question', {q:' Emil kam ins Museum  Gleich sah er das Gemälde '}],
[["V_r" , 16b],'Question', {q:' Emil verließ das Museum  Gleich sah er das Gemälde '}],
[["V_r" , 16c],'Question', {q:' Emil ertränkte das Museum  Gleich sah er das Gemälde '}],
[["V_u" , 16d],'Question', {q:' Emil verließ das Museum  Gleich sah er die Ampel '}],
[["V_u" , 16e],'Question', {q:' Emil kam ins Museum  Gleich sah er die Ampel '}],
[["V_u" , 16f],'Question', {q:' Emil ertränkte das Museum  Gleich sah er die Ampel '}],
[["V_r" , 19a],'Question', {q:' Peter betrat die Mensa  Nach einer Weile setzte er sich an den Esstisch  '}],
[["V_r" , 19b],'Question', {q:' Peter verließ die Mensa  Nach einer Weile setzte er sich an den Esstisch  '}],
[["V_r" , 19c],'Question', {q:' Peter trank die Mensa  Nach einer Weile setzte er sich an den Esstisch  '}],
[["V_u" , 19d],'Question', {q:' Peter verließ die Mensa  Nach einer Weile setzte er sich auf ein Moped '}],
[["V_u" , 19e],'Question', {q:' Peter betrat die Mensa  Nach einer Weile setzte er sich auf ein Moped '}],
[["V_u" , 19f],'Question', {q:' Peter trank die Mensa  Nach einer Weile setzte er sich auf ein Moped '}],
[["V_r" , 20a],'Question', {q:' Johan ging zur Vorlesung   Er sprach mit seinem Professor '}],
[["V_r" , 20b],'Question', {q:' Johan verpasste die Vorlesung   Er sprach mit seinem Professor '}],
[["V_r" , 20c],'Question', {q:' Johan schluckte die Vorlesung   Er sprach mit seinem Professor '}],
[["V_u" , 20d],'Question', {q:' Johan verpasste die  Vorlesung    Er sprach mit seinem Bruder '}],
[["V_u" , 20e],'Question', {q:' Johanging zur Vorlesung    Er sprach mit seinem Bruder '}],
[["V_u" , 20f],'Question', {q:' Johan schluckte die Vorlesung    Er sprach mit seinem Bruder '}],
[["V_r" , 21a],'Question', {q:' Adele kam zu einer åbernachtungsparty Sie holte ihr Nachthemd '}],
[["V_r" , 21b],'Question', {q:' Adele verließ eine åbernachtungsparty Sie holte ihr Nachthemd '}],
[["V_r" , 21c],'Question', {q:' Adele nähte eine åbernachtungsparty Sie holte ihr Nachthemd '}],
[["V_u" , 21d],'Question', {q:' Adele verließ eine åbernachtungsparty Sie holte ihren  Regenmantel '}],
[["V_u" , 21e],'Question', {q:' Adele kam zu einer åbernachtungsparty Sie holte ihren  Regenmantel '}],
[["V_u" , 21f],'Question', {q:' Adele nähte eine åbernachtungsparty Sie holte ihren  Regenmantel '}],
[["V_r" , 22a],'Question', {q:' Louis fuhr zum Autohaus  Er sprach mit einem Berater '}],
[["V_r" , 22b],'Question', {q:' Louis verließ das Autohaus  Er sprach mit einem Berater '}],
[["V_r" , 22c],'Question', {q:' Louis nähte das Autohaus  Er sprach mit einem Berater '}],
[["V_u" , 22d],'Question', {q:' Louis verließ das Autohaus  Er sprach mit einem Kellner '}],
[["V_u" , 22e],'Question', {q:' Louis fuhr zum Autohaus  Er sprach mit einem Kellner '}],
[["V_u" , 22f],'Question', {q:' Louis nähte das Autohaus  Er sprach mit einem Kellner '}],
[["V_r" , 24a],'Question', {q:' Hans und seine Freunde gingen zum Picknick  Zuerst nahmen sie den Korb '}],
[["V_r" , 24b],'Question', {q:' Hans und seine Freunde kamen von dem Picknick  Zuerst nahmen sie den Korb '}],
[["V_r" , 24c],'Question', {q:' Hans und seine Freunde telefonierten mit dem Picknick  Zuerst nahmen sie den Korb '}],
[["V_u" , 24d],'Question', {q:' Hans und seine Freunde  gingen zum Picknick  Zuerst nahmen sie die Post '}],
[["V_u" , 24e],'Question', {q:' Hans und seine Freunde  kamen von dem Picknick  Zuerst nahmen sie die Post '}],
[["V_u" , 24f],'Question', {q:' Hans und seine Freunde telefonierten mit dem Picknick  Zuerst nahmen sie die Post '}],
[["V_r" , 25a],'Question', {q:' Katarina badete ihren Sohn  Sie nahm die Seife '}],
[["V_r" , 25b],'Question', {q:' Katarina trocknete ihren Sohn  Sie nahm die Seife '}],
[["V_r" , 25c],'Question', {q:' Katarina baute ihren Sohn  Sie nahm die Seife '}],
[["V_u" , 25d],'Question', {q:' Katarina trocknete ihren Sohn  Sie nahm die Socken '}],
[["V_u" , 25e],'Question', {q:' Katarina badete ihren Sohn  Sie nahm die Socken '}],
[["V_u" , 25f],'Question', {q:' Katarina baute ihren Sohn  Sie nahm die Socken '}],
[["V_r" , 26a],'Question', {q:' Mary betrat das Postamt  Sofort bekam sie ein Paket '}],
[["V_r" , 26b],'Question', {q:' Mary verließ das Postamt  Sofort bekam sie ein Paket '}],
[["V_r" , 26c],'Question', {q:' Mary massierte das Postamt  Sofort bekam sie ein Paket '}],
[["V_u" , 26d],'Question', {q:' Mary verließ das Postamt  Sofort bekam sie ein Taxi '}],
[["V_u" , 26e],'Question', {q:' Mary betrat das Postamt  Sofort bekam sie ein Taxi '}],
[["V_u" , 26f],'Question', {q:' Mary massierte das Postamt  Sofort bekam sie ein Taxi '}],
[["V_r" , 27a],'Question', {q:' Annika ging zu einem Geschäftstreffen  Sie trug ihren Hosenanzug '}],
[["V_r" , 27b],'Question', {q:' Annika kam von einem Geschäftstreffen  Sie trug ihren Hosenanzug '}],
[["V_r" , 27c],'Question', {q:' Annika packte ein Geschäftstreffen  Sie trug ihren Hosenanzug '}],
[["V_u" , 27d],'Question', {q:' Annika  ging zu einem Geschäftstreffen  Sie trug ihre Hausschuhe '}],
[["V_u" , 27e],'Question', {q:' Annika kam von einem Geschäftstreffen  Sie trug ihre Hausschuhe '}],
[["V_u" , 27f],'Question', {q:' Annika packte ein Geschäftstreffen  Sie trug ihre Hausschuhe '}],
[["V_r" , 28a],'Question', {q:' Peter kam zum Bahnhof  Wenig später kaufte er eine Fahrkarte '}],
[["V_r" , 28b],'Question', {q:' Peter verließ den Bahnhof  Wenig später kaufte er eine Fahrkarte '}],
[["V_r" , 28c],'Question', {q:' Peter badete den Bahnhof  Wenig später kaufte er eine Fahrkarte '}],
[["V_u" , 28d],'Question', {q:' Peter verließ den Bahnhof  Wenig später kaufte er eine Theaterkarte '}],
[["V_u" , 28e],'Question', {q:' Peter kam zum Bahnhof  Wenig später kaufte er eine Theaterkarte '}],
[["V_u" , 28f],'Question', {q:' Peter badete den Bahnhof  Wenig später kaufte er eine Theaterkarte '}],
[["V_r" , 29a],'Question', {q:' Mathias backte die Geburtstagstorte  Er mischte den Kuchenteig '}],
[["V_r" , 29b],'Question', {q:' Mathias aß die Geburtstagstorte  Er mischte den Kuchenteig '}],
[["V_r" , 29c],'Question', {q:' Mathias bleichte die Geburtstagstorte  Er mischte den Kuchenteig '}],
[["V_u" , 29d],'Question', {q:' Mathias aß die Geburtstagstorte  Er mischte die Spielkarten '}],
[["V_u" , 29e],'Question', {q:' Mathias backte die Geburtstagstorte  Er mischte die Spielkarten '}],
[["V_u" , 29f],'Question', {q:' Mathias bleichte die Geburtstagstorte  Er mischte die Spielkarten '}],
[["V_r" , 30a],'Question', {q:' Erika ging zu einem Fußballspiel  Sie eilte zum Stadion '}],
[["V_r" , 30b],'Question', {q:' Erika kam von einem Fußballspiel  Sie eilte zum Stadion '}],
[["V_r" , 30c],'Question', {q:' Erika malte mit einem Fußballspiel  Sie eilte zum Stadion '}],
[["V_u" , 30d],'Question', {q:' Erika kam von einem Fußballspiel  Sie eilte zum Restaurant '}],
[["V_u" , 30e],'Question', {q:' Erika ging zu einem Fußballspiel  Sie eilte zum Restaurant '}],
[["V_u" , 30f],'Question', {q:' Erika malte mit einem Fußballspiel  Sie eilte zum Restaurant '}],
[["V_r" , 31a],'Question', {q:' Michael verließ die Apotheke   Er kaufte Vitamine '}],
[["V_r" , 31b],'Question', {q:' Michael ging in die Apotheke   Er kaufte Vitamine '}],
[["V_r" , 31c],'Question', {q:' Michael nähte die Apotheke   Er kaufte Vitamine '}],
[["V_u" , 31d],'Question', {q:' Michael verließ die Apotheke   Er kaufte Rotwein '}],
[["V_u" , 31e],'Question', {q:' Michael ging in die Apotheke   Er kaufte Rotwein '}],
[["V_u" , 31f],'Question', {q:' Michael nähte die Apotheke   Er kaufte Rotwein '}],
[["V_r" , 32a],'Question', {q:' Susan bekam eine Grippe  Sie hielt Bettruhe '}],
[["V_r" , 32b],'Question', {q:' Susan genas von einer Grippe  Sie hielt Bettruhe '}],
[["V_r" , 32c],'Question', {q:' Susan badete eine Grippe  Sie hielt Bettruhe '}],
[["V_u" , 32d],'Question', {q:' Susan genas von einer Grippe  Sie hielt eine Feier '}],
[["V_u" , 32e],'Question', {q:' Susan bekam eine Grippe  Sie hielt eine Feier '}],
[["V_u" , 32f],'Question', {q:' Susan badete eine Grippe  Sie hielt eine Feier '}],
[["V_r" , 33a],'Question', {q:' Renate ging zum Schneider  Sie suchte nach einem Kleid '}],
[["V_r" , 33b],'Question', {q:' Renate kam vom Schneider  Sie suchte nach einem Kleid '}],
[["V_r" , 33c],'Question', {q:' Renate braute den Schneider  Sie suchte nach einem Kleid '}],
[["V_u" , 33d],'Question', {q:' Renate kam vom Schneider  Sie suchte nach ihrem Schlüssel '}],
[["V_u" , 33e],'Question', {q:' Renate ging zum Schneider  Sie suchte nach ihrem Schlüssel '}],
[["V_u" , 33f],'Question', {q:' Renate braute den Schneider  Sie suchte nach ihrem Schlüssel '}],
[["V_r" , 34a],'Question', {q:' Thomas ging zum Schlosser  Er kopierte seinen Schlüssel  '}],
[["V_r" , 34b],'Question', {q:' Thomas kam vom Schlosser  Er kopierte seinen Schlüssel '}],
[["V_r" , 34c],'Question', {q:' Thomas aß den Schlosser  Er kopierte seinen Schlüssel  '}],
[["V_u" , 34d],'Question', {q:' Thomas kam vom Schlosser  Er kopierte seine Unterlagen '}],
[["V_u" , 34e],'Question', {q:' Thomas ging zum Schlosser  Er kopierte seine Unterlagen '}],
[["V_u" , 34f],'Question', {q:' Thomas aß den Schlosser  Er kopierte seine Unterlagen '}],
[["V_r" , 35a],'Question', {q:' Klaus fütterte die Katze  Er befüllte einen Napf '}],
[["V_r" , 35b],'Question', {q:' Klaus tränkte die Katze  Er befüllte einen Napf '}],
[["V_r" , 35c],'Question', {q:' Klaus angelte die Katze  Er befüllte einen Napf '}],
[["V_u" , 35d],'Question', {q:' Klaus tränkte die Katze  Er befüllte eine Kanne '}],
[["V_u" , 35e],'Question', {q:' Klaus fütterte die Katze  Er befüllte eine Kanne '}],
[["V_u" , 35f],'Question', {q:' Klaus angelte die Katze  Er befüllte eine Kanne '}],
[["V_r" , 36a],'Question', {q:' Lea und ihre Freunde gingen zum Sportgeschäft  Sie bezahlten den Fußball '}],
[["V_r" , 36b],'Question', {q:' Lea und ihre Freunde kamen aus dem Sportgeschäft  Sie bezahlten den Fußball '}],
[["V_r" , 36c],'Question', {q:' Lea und ihre Freunde zwickten das Sportgeschäft  Sie bezahlten den Fußball '}],
[["V_u" , 36d],'Question', {q:' Lea und ihre Freunde kamen aus dem Sportgeschäft  Sie bezahlten den Kaffee '}],
[["V_u" , 36e],'Question', {q:' Lea und ihre Freunde gingen zum Sportgeschäft  Sie bezahlten den Kaffee '}],
[["V_u" , 36f],'Question', {q:' Lea und ihre Freunde zwickten das Sportgeschäft  Sie bezahlten den Kaffee '}],
[["V_r" , 38a],'Question', {q:' Susi betrat das Tiergehege  Präzise untersuchte sie die Hunde '}],
[["V_r" , 38b],'Question', {q:' Susi kopierte das Tiergehege  Präzise untersuchte sie die Hunde '}],
[["V_r" , 38c],'Question', {q:' Susi betrat das Tiergehege  Präzise untersuchte sie die Hunde '}],
[["V_u" , 38d],'Question', {q:' Susi verließ das Tiergehege  Präzise untersuchte sie die Häuser '}],
[["V_u" , 38e],'Question', {q:' Susi betrat das Tiergehege  Präzise untersuchte sie die Häuser '}],
[["V_u" , 38f],'Question', {q:' Susi kopierte das Tiergehege  Präzise untersuchte sie die Häuser '}],
[["V_r" , 39a],'Question', {q:' Claudia betrat das Tiergeschäft  Eine Zeit lang stand sie vor dem Futter '}],
[["V_r" , 39b],'Question', {q:' Claudia verließ das Tiergeschäft  Eine Zeit lang stand sie vor dem Futter '}],
[["V_r" , 39c],'Question', {q:' Claudia briet das Tiergeschäft  Eine Zeit lang stand sie vor dem Futter '}],
[["V_u" , 39d],'Question', {q:' Claudia verließ das Tiergeschäft  Eine Zeit lang stand sie vor der Optiker '}],
[["V_u" , 39e],'Question', {q:' Claudia betrat das Tiergeschäft  Eine Zeit lang stand sie vor der Optiker '}],
[["V_u" , 39f],'Question', {q:' Claudia briet das Tiergeschäft  Eine Zeit lang stand sie vor der Optiker '}],
[["V_r" , 40a],'Question', {q:' Hugo betrat die Buchhandlung  Schnell suchte er einen Krimi '}],
[["V_r" , 40b],'Question', {q:' Hugo verließ die Buchhandlung  Schnell suchte er einen Krimi '}],
[["V_r" , 40c],'Question', {q:' Hugo mahlte die Buchhandlung  Schnell suchte er einen Krimi '}],
[["V_u" , 40d],'Question', {q:' Hugo verließ die Buchhandlung  Schnell suchte er eine Orange '}],
[["V_u" , 40e],'Question', {q:' Hugo betrat die Buchhandlung  Schnell suchte er eine Orange '}],
[["V_u" , 40f],'Question', {q:' Hugo mahlte die Buchhandlung  Schnell suchte er eine Orange '}],
[["V_r" , 41a],'Question', {q:' Sven betrat die Apotheke  Schnell kaufte er die Salbe '}],
[["V_r" , 41b],'Question', {q:' Sven verließ die Apotheke  Schnell kaufte er die Salbe '}],
[["V_r" , 41c],'Question', {q:' Sven salzte die Apotheke  Schnell kaufte er die Salbe '}],
[["V_u" , 41d],'Question', {q:' Sven verließ die Apotheke  Schnell kaufte er den Döner '}],
[["V_u" , 41e],'Question', {q:' Sven betrat die Apotheke  Schnell kaufte er den Döner '}],
[["V_u" , 41f],'Question', {q:' Sven salzte die Apotheke  Schnell kaufte er den Döner '}],
[["V_r" , 42a],'Question', {q:' Jürgen betrat die Bäckerei  Wenig später sah er das Croissant '}],
[["V_r" , 42b],'Question', {q:' Jürgen verließ die Bäckerei  Wenig später sah er das Croissant '}],
[["V_r" , 42c],'Question', {q:' Jürgen tanzte die Bäckerei  Wenig später sah er das Croissant '}],
[["V_u" , 42d],'Question', {q:' Jürgen verließ die Bäckerei  Wenig später sah er den Verkehr '}],
[["V_u" , 42e],'Question', {q:' Jürgen betrat die Bäckerei  Wenig später sah er den Verkehr '}],
[["V_u" , 42f],'Question', {q:' Jürgen tanzte die Bäckerei  Wenig später sah er den Verkehr '}],
[["V_r" , 43a],'Question', {q:' Frauke ging ins Stadion  Schnell fand sie ihre Tribüne '}],
[["V_r" , 43b],'Question', {q:' Frauke verließ das Stadion  Schnell fand sie ihre Tribüne '}],
[["V_r" , 43c],'Question', {q:' Frauke druckte das Stadion  Schnell fand sie ihre Tribüne '}],
[["V_u" , 43d],'Question', {q:' Frauke verließ das Stadion  Schnell fand sie ihren Roller '}],
[["V_u" , 43e],'Question', {q:' Frauke ging ins Stadion  Schnell fand sie ihren Roller '}],
[["V_u" , 43f],'Question', {q:' Frauke druckte das Stadion  Schnell fand sie ihren Roller '}],
[["V_r" , 44a],'Question', {q:' Bernd betrat den Kiosk  Dann kaufte er eine Zeitung '}],
[["V_r" , 44b],'Question', {q:' Bernd verließ den Kiosk  Dann kaufte er eine Zeitung '}],
[["V_r" , 44c],'Question', {q:' Bernd strickte den Kiosk  Dann kaufte er eine Zeitung '}],
[["V_u" , 44d],'Question', {q:' Bernd verließ den Kiosk  Dann kaufte er eine Pfanne '}],
[["V_u" , 44e],'Question', {q:' Bernd betrat den Kiosk  Dann kaufte er eine Pfanne '}],
[["V_u" , 44f],'Question', {q:' Bernd strickte den Kiosk  Dann kaufte er eine Pfanne '}],
[["V_r" , 46a],'Question', {q:' Kim betrat das Hotel  Gleich ging sie zum Concierge '}],
[["V_r" , 46b],'Question', {q:' Kim verließ das Hotel  Gleich ging sie zum Concierge '}],
[["V_r" , 46c],'Question', {q:' Kim jagte das Hotel  Gleich ging sie zum Concierge '}],
[["V_u" , 46d],'Question', {q:' Kim verließ das Hotel  Gleich ging sie zum Ohrenarzt '}],
[["V_u" , 46e],'Question', {q:' Kim betrat das Hotel  Gleich ging sie zum Ohrenarzt '}],
[["V_u" , 46f],'Question', {q:' Kim jagte das Hotel  Gleich ging sie zum Ohrenarzt '}],
[["V_r" , 47a],'Question', {q:' Susi betrat die Arztpraxis  Freundlich sprach sie mit der Krankenschwester '}],
[["V_r" , 47b],'Question', {q:' Susi verließ die Arztpraxis  Freundlich sprach sie mit der Krankenschwester '}],
[["V_r" , 47c],'Question', {q:' Susi badete die Arztpraxis  Freundlich sprach sie mit der Krankenschwester '}],
[["V_u" , 47d],'Question', {q:' Susi verließ die Arztpraxis  Freundlich sprach sie mit dem Abteilungsleiter '}],
[["V_u" , 47e],'Question', {q:' Susi betrat die Arztpraxis  Freundlich sprach sie mit dem Abteilungsleiter '}],
[["V_u" , 47f],'Question', {q:' Susi badete die Arztpraxis  Freundlich sprach sie mit dem Abteilungsleiter '}],
[["V_r" , 48a],'Question', {q:' Manfred erreichte das Theater Wenig später ging er zur Loge '}],
[["V_r" , 48b],'Question', {q:' Manfred verließ das Theater Wenig später ging er zur Loge '}],
[["V_r" , 48c],'Question', {q:' Manfred fütterte das Theater Wenig später ging er zur Loge '}],
[["V_u" , 48d],'Question', {q:' Manfred verließ das Theater Wenig später ging er zum Moped '}],
[["V_u" , 48e],'Question', {q:' Manfred erreichte das Theater Wenig später ging er zum Moped '}],
[["V_u" , 48f],'Question', {q:' Manfred fütterte das Theater Wenig später ging er zum Moped '}],
[["V_r" , 49a],'Question', {q:' Werner betrat die Kirche  Nachdenklich betrachtete er die Kerzen '}],
[["V_r" , 49b],'Question', {q:' Werner verließ die Kirche  Nachdenklich betrachtete er die Kerzen '}],
[["V_r" , 49c],'Question', {q:' Werner dünstete die Kirche  Nachdenklich betrachtete er die Kerzen '}],
[["V_u" , 49d],'Question', {q:' Werner verließ die Kirche  Nachdenklich betrachtete er die Wolke '}],
[["V_u" , 49e],'Question', {q:' Werner betrat die Kirche  Nachdenklich betrachtete er die Wolke '}],
[["V_u" , 49f],'Question', {q:' Werner verließ die Kirche  Nachdenklich betrachtete er die Wolke '}],
[["V_r" , 50a],'Question', {q:' Gerda betrat das Spa  Nach einer Weile bekam sie eine Kopfmassage '}],
[["V_r" , 50b],'Question', {q:' Gerda verließ das Spa  Nach einer Weile bekam sie eine Kopfmassage '}],
[["V_r" , 50c],'Question', {q:' Gerda pürierte das Spa  Nach einer Weile bekam sie eine Kopfmassage '}],
[["V_u" , 50d],'Question', {q:' Gerda verließ das Spa  Nach einer Weile bekam sie einen Blumenstrauß '}],
[["V_u" , 50e],'Question', {q:' Gerda betrat das Spa  Nach einer Weile bekam sie einen Blumenstrauß '}],
[["V_u" , 50f],'Question', {q:' Gerda pürierte das Spa  Nach einer Weile bekam sie einen Blumenstrauß '}],
[["V_r" , 51a],'Question', {q:' Augusta betrat die Reitschule  Schnell setzte sie sich auf den Pferdesattel '}],
[["V_r" , 51b],'Question', {q:' Augusta verließ die Reitschule  Schnell setzte sie sich auf den Pferdesattel '}],
[["V_r" , 51c],'Question', {q:' Augusta pfefferte die Reitschule  Schnell setzte sie sich auf den Pferdesattel '}],
[["V_u" , 51d],'Question', {q:' Augusta verließ die Reitschule  Schnell setzte sie sich auf den Fahrradsattel '}],
[["V_u" , 51e],'Question', {q:' Augusta betrat die Reitschule  Schnell setzte sie sich auf den Fahrradsattel '}],
[["V_u" , 51f],'Question', {q:' Augusta pfefferte die Reitschule  Schnell setzte sie sich auf den Fahrradsattel '}],
[["V_r" , 52a],'Question', {q:' Gerhardt begann seinen Feuerwehreinsatz  Er nahm den Gummischlauch '}],
[["V_r" , 52b],'Question', {q:' Gerhardt verpasste seinen Feuerwehreinsatz  Er nahm den Gummischlauch '}],
[["V_r" , 52c],'Question', {q:' Gerhardt kaute seinen Feuerwehreinsatz  Er nahm den Gummischlauch '}],
[["V_u" , 52d],'Question', {q:' Gerhardt verpasste seinen Feuerwehreinsatz  Er nahm den Brückentag '}],
[["V_u" , 52e],'Question', {q:' Gerhardt begann seinen Feuerwehreinsatz  Er nahm den Brückentag '}],
[["V_u" , 52f],'Question', {q:' Gerhardt kaute seinen Feuerwehreinsatz  Er nahm den Brückentag '}],
[["V_r" , 53a],'Question', {q:' Eleonore begann das Fußballspiel  Sofort machte sie ein Eigentor '}],
[["V_r" , 53b],'Question', {q:' Eleonore beendete das Fußballspiel  Sofort machte sie ein Eigentor '}],
[["V_r" , 53c],'Question', {q:' Eleonore züchtete das Fußballspiel  Sofort machte sie ein Eigentor '}],
[["V_u" , 53d],'Question', {q:' Eleonore beendete das Fußballspiel  Sofort machte sie ihre Einkäufe '}],
[["V_u" , 53e],'Question', {q:' Eleonore begann das Fußballspiel  Sofort machte sie ihre Einkäufe '}],
[["V_u" , 53f],'Question', {q:' Eleonore züchtete das Fußballspiel  Sofort machte sie ihre Einkäufe '}],
[["V_r" , 55a],'Question', {q:' Jenni schnitt die Gurken  Dann machte sie einen Salat '}],
[["V_r" , 55b],'Question', {q:' Jenni zerkochte die Gurken  Dann machte sie einen Salat '}],
[["V_r" , 55c],'Question', {q:' Jenni bebaute die Gurken  Dann machte sie einen Salat '}],
[["V_u" , 55d],'Question', {q:' Jenni zerkochte die Gurken  Dann machte sie einen Kuchen '}],
[["V_u" , 55e],'Question', {q:' Jenni schnitt die Gurken  Dann machte sie einen Kuchen '}],
[["V_u" , 55f],'Question', {q:' Jenni bebaute die Gurken  Dann machte sie einen Kuchen '}],
[["V_r" , 56a],'Question', {q:' Michael töpferte eine Vase  Dann stellte  er das Gefäß '}],
[["V_r" , 56b],'Question', {q:' Michael zerstörte eine Vase  Dann stellte  er das Gefäß '}],
[["V_r" , 56c],'Question', {q:' Michael fischte eine Vase  Dann stellte  er das Gefäß '}],
[["V_u" , 56d],'Question', {q:' Michael zerstörte eine Vase  Dann stellte er den åberrest '}],
[["V_u" , 56e],'Question', {q:' Michael töpferte eine Vase  Dann stellte er den åberrest '}],
[["V_u" , 56f],'Question', {q:' Michael fischte eine Vase  Dann stellte er den åberrest '}],
[["V_r" , 59a],'Question', {q:' Maximilian beendete ihr Jurastudium an der Universität  Gleich danach arbeitete er als Anwalt '}],
[["V_r" , 59b],'Question', {q:' Maximilian begann ihr Jurastudium an der Universität  Gleich danach arbeitete er als Anwalt '}],
[["V_r" , 59c],'Question', {q:' Maximilian zerriss ihr Jurastudium an der Universität  Gleich danach arbeitete er als Anwalt '}],
[["V_u" , 59d],'Question', {q:' Maximilian begann ihr Jurastudium an der Universität  Gleich danach arbeitete er als Kellner '}],
[["V_u" , 59e],'Question', {q:' Maximilian beendete ihr Jurastudium an der Universität  Gleich danach arbeitete er als Kellner '}],
[["V_u" , 59f],'Question', {q:' Maximilian zerriss ihr Jurastudium an der Universität  Gleich danach arbeitete er als Kellner '}],
[["V_r" , 60a],'Question', {q:' Jonathan ging zum Bergsteigen  Dann stellte er sich auf den Gipfel '}],
[["V_r" , 60b],'Question', {q:' Jonathan kam vom Bergsteigen  Dann stellte er sich auf den Gipfel '}],
[["V_r" , 60c],'Question', {q:' Jonathan brach das Bergsteigen  Dann stellte er sich auf den Gipfel '}],
[["V_u" , 60d],'Question', {q:' Jonathan kam vom Bergsteigen  Dann stellte er sich auf den Parkplatz '}],
[["V_u" , 60e],'Question', {q:' Jonathan ging zum Bergsteigen  Dann stellte er sich auf den Parkplatz '}],
[["V_u" , 60f],'Question', {q:' Jonathan brach das Bergsteigen  Dann stellte er sich auf den Parkplatz '}],
[["V_r" , 61a],'Question', {q:' Cedric kaufte die Tabletten  Später übergab er die Medizin seiner Mutter '}],
[["V_r" , 61b],'Question', {q:' Cedric verlor die Tabletten  Später übergab er die Medizin seiner Mutter '}],
[["V_r" , 61c],'Question', {q:' Cedric belog die Tabletten  Später übergab er die Medizin seiner Mutter '}],
[["V_u" , 61d],'Question', {q:' Cedric verlor die Tabletten  Später übergab er die Rechnung seiner Mutter '}],
[["V_u" , 61e],'Question', {q:' Cedric kaufte die Tabletten  Später übergab er die Rechnung seiner Mutter '}],
[["V_u" , 61f],'Question', {q:' Cedric belog die Tabletten  Später übergab er die Rechnung seiner Mutter '}],
[["V_r" , 65a],'Question', {q:' Lasse begann einen Tanzkurs  Sofort ging er in die Tanzschule  '}],
[["V_r" , 65b],'Question', {q:' Lasse beendete einen Tanzkurs  Sofort ging er in die Tanzschule  '}],
[["V_r" , 65c],'Question', {q:' Lasse schwamm einen Tanzkurs  Sofort ging er in die Tanzschule  '}],
[["V_u" , 65d],'Question', {q:' Lasse beendete einen Tanzkurs   Sofort ging er in ein Restaurant '}],
[["V_u" , 65e],'Question', {q:' Lasse begann einen Tanzkurs   Sofort ging er in ein Restaurant '}],
[["V_u" , 65f],'Question', {q:' Lasse schwamm einen Tanzkurs   Sofort ging er in ein Restaurant '}],
[["V_r" , 67a],'Question', {q:' Gregori erhob Daten  Dann begann er mit der Analyse '}],
[["V_r" , 67b],'Question', {q:' Gregori löschte Daten  Dann begann er mit der Analyse '}],
[["V_r" , 67c],'Question', {q:' Gregori briet Daten  Dann begann er mit der Analyse '}],
[["V_u" , 67d],'Question', {q:' Gregori löschte Daten  Dann begann er mit der Panik '}],
[["V_u" , 67e],'Question', {q:' Gregori erhob Daten  Dann begann er mit der Panik '}],
[["V_u" , 67f],'Question', {q:' Gregori briet Daten  Dann begann er mit der Panik '}],
[["V_r" , 68a],'Question', {q:' Martin spielte die Geige  Dann verstaute er behutsam den Bogen '}],
[["V_r" , 68b],'Question', {q:' Martin zerstörte die Geige  Dann verstaute er behutsam den Bogen '}],
[["V_r" , 68c],'Question', {q:' Martin angelte die Geige  Dann verstaute er behutsam den Bogen '}],
[["V_u" , 68d],'Question', {q:' Martin spielte die Trompete  Dann verstaute er behutsam den Hammer '}],
[["V_u" , 68e],'Question', {q:' Martin zerstörte die Trompete  Dann verstaute er behutsam den Hammer '}],
[["V_u" , 68f],'Question', {q:' Martin angelte die Trompete  Dann verstaute er behutsam den Hammer '}],
[["V_r" , 69a],'Question', {q:' Mark eröffnete eine neue Bankfiliale  Dann begrüßte er die Kunden '}],
[["V_r" , 69b],'Question', {q:' Mark schloss eine neue Bankfiliale  Dann begrüßte er die Kunden '}],
[["V_r" , 69c],'Question', {q:' Mark salbte eine neue Bankfiliale  Dann begrüßte er die Kunden '}],
[["V_u" , 69d],'Question', {q:' Mark schloss eine neue Bankfiliale  Dann begrüßte er den Buttler '}],
[["V_u" , 69e],'Question', {q:' Mark eröffnete eine neue Bankfiliale  Dann begrüßte er den Buttler '}],
[["V_u" , 69f],'Question', {q:' Mark salbte eine neue Bankfiliale  Dann begrüßte er den Buttler '}],
[["V_r" , 71a],'Question', {q:' Theodor beendete seine Schicht  Dann machte er Feierabend '}],
[["V_r" , 71b],'Question', {q:' Theodor begann seine Schicht  Dann machte er Feierabend '}],
[["V_r" , 71c],'Question', {q:' Theodor zerlumpte seine Schicht  Dann machte er Feierabend '}],
[["V_u" , 71d],'Question', {q:' Theodor beendete seine Schicht  Dann machte er einen Fehler '}],
[["V_u" , 71e],'Question', {q:' Theodor begann seine Schicht  Dann machte er einen Fehler '}],
[["V_u" , 71f],'Question', {q:' Theodor zerlumpte seine Schicht  Dann machte er einen Fehler '}],
[["V_r" , 72a],'Question', {q:' Markus betrat die Werkstatt  Höflich sprach er mit einem Mechaniker '}],
[["V_r" , 72b],'Question', {q:' Markus verließ die Werkstatt  Höflich sprach er mit einem Mechaniker '}],
[["V_r" , 72c],'Question', {q:' Markus badete die Werkstatt  Höflich sprach er mit einem Mechaniker '}],
[["V_u" , 72d],'Question', {q:' Markus verließ die Werkstatt  Höflich sprach er mit einem Rechtsanwalt '}],
[["V_u" , 72e],'Question', {q:' Markus betrat die Werkstatt  Höflich sprach er mit einem Rechtsanwalt '}],
[["V_u" , 72f],'Question', {q:' Markus badete die Werkstatt  Höflich sprach er mit einem Rechtsanwalt '}],


];
