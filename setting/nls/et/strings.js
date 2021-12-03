///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "units": {
    "areaSquareFeetUnit": "ruutjalga",
    "areaAcresUnit": "aakrit",
    "areaSquareMetersUnit": "ruutmeetrit",
    "areaSquareKilometersUnit": "ruutkilomeetrit",
    "areaHectaresUnit": "hektarit",
    "areaSquareMilesUnit": "Ruutmiili",
    "lengthFeetUnit": "ft",
    "lengthMilesUnit": "mi",
    "lengthMetersUnit": "m",
    "lengthKilometersUnit": "km"
  },
  "analysisTab": {
    "analysisTabLabel": "Analüüs",
    "selectAnalysisLayerLabel": "Analüüsikihid",
    "addLayerLabel": "Lisa kihid",
    "noValidLayersForAnalysis": "Valitud veebikaardilt ei leitud kehtivaid kihte.",
    "noValidFieldsForAnalysis": "Valitud veebikaardilt ei leitud kehtivaid väljasid. Palun eemaldage valitud kiht.",
    "allowGroupingLabel": "Grupeeri objektid veerust sama väärtuse alusel",
    "groupingHintDescription": "Vihje: vaikimisi grupeeritakse kõik objektid, mille valitud väljadel on sama väärtus, nii, et need kuvataks aruandes ühe kirjena. Keelake grupeerimine sarnaste atribuutide alusel, et kuvada iga objekti jaoks omaette kirje.",
    "addLayersHintText": "Vihje: valige kihid ja väljad, mis kaasatakse analüüsi ja aruandesse",
    "queryCapabilityHintText": "Loetletakse ainult päringuga kihte",
    "addLayerNameTitle": "Kihi nimi",
    "addFieldsLabel": "Lisa väli",
    "addFieldsPopupTitle": "Vali väljad",
    "addFieldsNameTitle": "Väljanimed",
    "aoiToolsLegendLabel": "Huviala tööriistade paneel",
    "aoiToolsDescriptionLabel": "Valige ja sildistage tööriistad, mis on saadaval huviala loomiseks.",
    "placenameLabel": "Kohanimi",
    "drawToolsLabel": "Vali joonistamise töövahendid",
    "uploadShapeFileLabel": "Shape-faili üleslaadimine",
    "coordinatesLabel": "Koordinaadid",
    "coordinatesDrpDwnHintText": "Vihje: valige ühik sisestatud läbimiste kuvamiseks",
    "coordinatesBearingDrpDwnHintText": "Vihje: valige peiling sisestatud läbimiste kuvamiseks",
    "allowShapefilesUploadLabel": "Lubage kasutajatel üles laadida Shape-failid, et kaasata need analüüsi",
    "allowShapefilesUploadLabelHintText": "Vihje: lisage valikuvariant vahekaardile Aruanne, kuhu kasutajad saavad üles laadida oma andmeid Shape-failina, et kaasata need analüüsi aruandesse",
    "allowVisibleLayerAnalysisLabel": "Ära analüüsi ega raporteeri mittenähtavaid kihte",
    "allowVisibleLayerAnalysisHintText": "Vihje: välja lülitatud või mõõtkava nähtavuse seadete tõttu mittenähtavaid kihte ei analüüsita ega kaasata prinditud või allalaaditud tulemitesse.",
    "areaUnitsLabel": "Analüüsi tulemuste ühikud (pindala)",
    "lengthUnitsLabel": "Analüüsi tulemuste ühikud (pikkus)",
    "maxFeatureForAnalysisLabel": "Analüüsitavate objektide maksimaalne arv",
    "maxFeatureForAnalysisHintText": "Vihje: seadke analüüsi kaasatavate objektide maksimaalne arv",
    "searchToleranceLabelText": "Otsingutolerants",
    "searchToleranceHint": "Vihje: otsingu tolerantsi kasutatakse punktide ja joonte sisendi analüüsimiseks",
    "placenameButtonText": "Kohanimi",
    "drawToolsButtonText": "Joonista",
    "shapefileButtonText": "Shape fail",
    "coordinatesButtonText": "Koordinaadid",
    "invalidLayerErrorMsg": "Konfigureerige väljad:",
    "drawToolSelectableLayersLabel": "Valige selekteeritavad (valitavad) kihid",
    "drawToolSelectableLayersHint": "Vihje: valige kihid, mis sisaldavad objekte, mida saab valida käsuga Vali joonistamise töövahend",
    "drawToolsSettingsFieldsetLabel": "Joonistamise töövahendid",
    "drawToolPointLabel": "Punkt",
    "drawToolPolylineLabel": "Joon",
    "drawToolExtentLabel": "Kuvaulatus",
    "drawToolPolygonLabel": "Polügoon",
    "drawToolCircleLabel": "Ring",
    "selectDrawToolsText": "Valige joonistamise töövahendid, mis on saadaval huviala loomiseks.",
    "selectingDrawToolErrorMessage": "Valige vähemalt üks joonistamise töövahend või valikukiht, et kasutada AOI töövahendite jaoks valikut Joonistamise töövahendid.",
    "sortingSettingsLegend": "Sortimisseaded",
    "ascendingLabel": "Kasvav",
    "descendingLabel": "Kahanev",
    "sortFieldSelectLabel": "Vali sortimisväli",
    "statisticsCountLabel": "Statistika: arv",
    "statisticsTotalLengthLabel": "Statistika: kogupikkus",
    "statisticsTotalAreaLabel": "Statistika: kogupindala"
  },
  "downloadTab": {
    "downloadLegend": "Allalaadimissätted",
    "reportLegend": "Aruande sätted",
    "downloadTabLabel": "Allalaadimine",
    "syncEnableOptionLabel": "Objektikihid",
    "syncEnableOptionHint": "Vihje: valige kihid, mida saab alla laadida, ja määrake formaadid, milles iga kiht on saadaval. Allalaaditud andmekogumid sisaldavad selliseid objekte, mis langevad kokku huvialaga.",
    "syncEnableOptionNote": "Märkus: geoandmebaasi faili ja Shape-faili allalaadimised nõuavad sünkroonimist lubavaid kihte. Shape-faili formaate toetavad ainult ArcGIS Online’is majutatud objektikihid.",
    "extractDataTaskOptionLabel": "Andmete väljavõtte toiminguga geotöötlusteenus",
    "extractDataTaskOptionHint": "Vihje: kasutage avaldatud andmete väljavõtte toiminguga geotöötlusteenust huvialaga lõikuvate objektide allalaadimiseks faili geoandmebaasi või Shape-faili vormingus.",
    "cannotDownloadOptionLabel": "Keela allalaadimine",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Kihi nimi",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "Faili geoandmebaas",
      "ShapefileFormatLabel": "Shape fail",
      "allowDownloadLabel": "Luba allalaadimine"
    },
    "setButtonLabel": "Määra",
    "GPTaskLabel": "Määrake geotöötlusteenuse URL",
    "printGPServiceLabel": "Printimise teenuse URL",
    "setGPTaskTitle": "Määrake nõutud geotöötlusteenuse URL",
    "logoLabel": "Logo",
    "logoChooserHint": "Vihje: klõpsake pildi ikooni, et muuta logo aruande vasakus ülanurgas",
    "footnoteLabel": "Joonealune märkus",
    "columnTitleColorPickerLabel": "Aruande veeru pealkirja värvus",
    "reportTitleLabel": "Aruande pealkiri",
    "displaySummaryLabel": "Kuva kokkuvõte",
    "hideZeroValueRowLabel": "Peida read, mille kõigi analüüsiväljade väärtus on 0",
    "hideNullValueRowLabel": "Peida read, mille kõigil analüüsiväljadel puudub andmeväärtus (0 või tühi)",
    "errorMessages": {
      "invalidGPTaskURL": "Kehtetu geotöötlusteenus. Valige geotöötlusteenus, mis sisaldab andmete väljavõtte toimingut.",
      "noExtractDataTaskURL": "Valige geotöötlusteenus, mis sisaldab andmete väljavõtte toimingut.",
      "duplicateCustomOption": "Kirje ${duplicateValueSizeName} jaoks on olemas duplikaat.",
      "invalidLayoutWidth": "Sisestatud laius ei sobi: ${customLayoutOptionValue}.",
      "invalidLayoutHeight": "Sisestatud kõrgus ei sobi: ${customLayoutOptionValue}.",
      "invalidLayoutPageUnits": "Valitud on sobimatu leheühik: ${customLayoutOptionValue}.",
      "failtofetchbuddyTaskDimension": "Kaastoimingu dimensiooniteabe toomisel ilmnes tõrge. Proovige uuesti.",
      "failtofetchbuddyTaskName": "Kaastoimingu nime toomisel ilmnes tõrge. Proovige uuesti.",
      "failtofetchChoiceList": "Prinditeenusest valikuloendi toomisel ilmnes tõrge. Proovige uuesti.",
      "invalidWidth": "Laius ei sobi.",
      "invalidHeight": "Kõrgus ei sobi."
    },
    "addCustomLayoutTitle": "Lisa kohandatud paigutus",
    "customLayoutOptionHint": "Vihje: lisage paigutus prinditeenusest prindisuvandite loendisse.",
    "reportDefaultOptionLabel": "Vaikimisi paigutus",
    "pageSizeUnits": {
      "millimeters": "Millimeetrid",
      "points": "Punktid"
    },
    "noDataTextRepresentation": "Andmeväärtused puuduvad",
    "naTextRepresentation": "Kehtiv väärtus puudub",
    "noDataDefaultText": "Andmed puuduvad",
    "notApplicableDefaultText": "Pole saadaval"
  },
  "generalTab": {
    "generalTabLabel": "Üldine",
    "tabLabelsLegend": "Paneeli märgised",
    "tabLabelsHint": "Vihje: määrake märgised",
    "AOITabLabel": "Huviala paneel",
    "ReportTabLabel": "Aruande paneel",
    "bufferSettingsLegend": "Puhvri seaded",
    "defaultBufferDistanceLabel": "Puhvri vaikeulatus",
    "defaultBufferUnitsLabel": "Puhvri ühikud",
    "generalBufferSymbologyHint": "Vihje: sümbolid, mida kasutatakse puhvriala näitamiseks määratletud huviala ümber",
    "aoiGraphicsSymbologyLegend": "Huviala sümbolid",
    "aoiGraphicsSymbologyHint": "Vihje: määrake sümbolid punkt-, joon- ja polügoonhuvialade määratlemiseks",
    "pointSymbologyLabel": "Punkt",
    "previewLabel": "Eelvaade",
    "lineSymbologyLabel": "Joon",
    "polygonSymbologyLabel": "Polügoon",
    "aoiBufferSymbologyLabel": "Puhvri sümbolid",
    "pointSymbolChooserPopupTitle": "Aadressi või punktasukoha sümbol",
    "polygonSymbolChooserPopupTitle": "Hulknurga sümbol",
    "lineSymbolChooserPopupTitle": "Joone sümbol",
    "aoiSymbolChooserPopupTitle": "Puhvri sümbol",
    "aoiTabText": "AOI",
    "reportTabText": "Aruanne",
    "invalidSymbolValue": "Sobimatu sümboli väärtus."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Otsinguallika seaded",
    "searchSourceSettingTitle": "Otsinguallika seaded",
    "searchSourceSettingTitleHintText": "Lisa ja seadista geokodeerimise teenuseid või objektikihte otsinguallikatena. Need allikad määravad, mis info on leitav otsingukasti kaudu",
    "addSearchSourceLabel": "Lisa otsinguallikas",
    "featureLayerLabel": "Objektikiht",
    "geocoderLabel": "Geokodeerija",
    "generalSettingLabel": "Üldseade",
    "allPlaceholderLabel": "Kohatäite tekst kõigi otsimiseks:",
    "allPlaceholderHintText": "Vihje: sisestage kõikide kihtide ja geokodeerija otsimisel kohatäitena kuvatav tekst",
    "generalSettingCheckboxLabel": "Kuva leitud objekti või asukoha hüpikaken",
    "countryCode": "Riigi või piirkonna kood(id)",
    "countryCodeEg": "nt ",
    "countryCodeHint": "Kui jätate selle välja tühjaks, teostatakse otsing kõikides riikides ja piirkondades",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Otsi ainult praegusest kaardiulatusest",
    "locatorUrl": "Geokodeerija URL",
    "locatorName": "Geokodeerija nimi",
    "locatorExample": "Näide",
    "locatorWarning": "Seda geokodeerimisteenuse versiooni ei toetata. Vidin toetab geokodeerimisteenust alates versioonist 10.0 ja uuemates versioonides.",
    "locatorTips": "Soovitused pole saadaval, sest geokodeerimisteenus ei toeta soovituste võimalust.",
    "layerSource": "Kihi allikas",
    "setLayerSource": "Määra kihi allikas",
    "setGeocoderURL": "Määra geokodeerija URL",
    "searchLayerTips": "Soovitused pole saadaval, sest objektiteenus ei toeta leheküljelise jaotuse võimalust.",
    "placeholder": "Kohatäitja tekst",
    "searchFields": "Otsinguväljad",
    "displayField": "Kuvamise väli",
    "exactMatch": "Täpne vaste",
    "maxSuggestions": "Maksimaalsed soovitused",
    "maxResults": "Maksimaalsed tulemused",
    "enableLocalSearch": "Luba kohalik otsing",
    "minScale": "Min mõõtkava",
    "minScaleHint": "Kui kaardi mõõkava on sellest mõõtkavast suurem, rakendatakse kohalik otsing",
    "radius": "Raadius",
    "radiusHint": "Määrab praeguse kaardi keskpunkti ümber asuva ala raadiuse, mida kasutatakse geokodeerimise kandidaatide järjestuse võimendamiseks, nii et asukohale lähimad kandidaadid tagastatakse esimesena",
    "setSearchFields": "Määra otsinguväljad",
    "set": "Määra",
    "invalidUrlTip": "URL ${URL} ei sobi või pole kättesaadav.",
    "invalidSearchSources": "Otsinguallika sobimatud seaded"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Täitke nõutavad väljad",
    "bufferDistanceFieldsErrorMsg": "Sisestage kehtivad väärtused",
    "invalidSearchToleranceErrorMsg": "Sisestage otsingu tolerantsi jaoks kehtiv väärtus",
    "atLeastOneCheckboxCheckedErrorMsg": "Sobimatu konfiguratsioon: vajalik on vähemalt üks huviala töövahend.",
    "noLayerAvailableErrorMsg": "Ühtegi kihti pole saadaval",
    "layerNotSupportedErrorMsg": "Ei ole toetatud ",
    "noFieldSelected": "Kasutage analüüsiks väljade valimiseks muutmise toimingut.",
    "duplicateFieldsLabels": "Duplikaatmärgis \"${labelText}\" lisatud : \"${itemNames}\"",
    "noLayerSelected": "Valige analüüsiks vähemalt üks kiht.",
    "errorInSelectingLayer": "Ei saa kihti valida. Palun proovige uuesti",
    "errorInMaxFeatureCount": "Sisestage analüüsiks kehtiv maksimaalne objektide arv."
  }
});