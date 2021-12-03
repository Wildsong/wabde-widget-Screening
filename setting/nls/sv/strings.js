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
    "areaSquareFeetUnit": "Kvadratfot",
    "areaAcresUnit": "Tunnland",
    "areaSquareMetersUnit": "Kvadratmeter",
    "areaSquareKilometersUnit": "Kvadratkilometer",
    "areaHectaresUnit": "Hektar",
    "areaSquareMilesUnit": "Kvadratmil (engelska)",
    "lengthFeetUnit": "Fot",
    "lengthMilesUnit": "Mile",
    "lengthMetersUnit": "Meter",
    "lengthKilometersUnit": "Kilometer"
  },
  "analysisTab": {
    "analysisTabLabel": "Analys",
    "selectAnalysisLayerLabel": "Analyslager",
    "addLayerLabel": "Lägg till lager",
    "noValidLayersForAnalysis": "Inga giltiga lager hittades i den valda webbkartan.",
    "noValidFieldsForAnalysis": "Inga giltiga fält hittades i den valda webbkartan. Ta bort det valda lagret.",
    "allowGroupingLabel": "Gruppera geoobjekt efter fält med samma värde",
    "groupingHintDescription": "Tips! Som standard grupperas alla geoobjekt med samma värde för de valda fälten så att de ser ut som en enda post i rapporten. Inaktivera gruppering efter likadana attribut för att visa en post för varje geoobjekt istället.",
    "addLayersHintText": "Tips! Välj de lager och fält som ska ingå i analysen och rapporten",
    "queryCapabilityHintText": "Endast lager med frågefunktioner kommer att listas",
    "addLayerNameTitle": "Lagernamn",
    "addFieldsLabel": "Lägg till fält",
    "addFieldsPopupTitle": "Välj fält",
    "addFieldsNameTitle": "Fältnamn",
    "aoiToolsLegendLabel": "Verktyg för intresseområde",
    "aoiToolsDescriptionLabel": "Välj och ange etiketter för de verktyg som är tillgängliga för att skapa intresseområdet.",
    "placenameLabel": "Platsens namn",
    "drawToolsLabel": "Välj ritverktyg",
    "uploadShapeFileLabel": "Överför en shapefil",
    "coordinatesLabel": "Koordinater",
    "coordinatesDrpDwnHintText": "Tips! Välj enhet för att visa påbörjade polygontåg",
    "coordinatesBearingDrpDwnHintText": "Tips! Välj bäring för att visa påbörjade polygontåg",
    "allowShapefilesUploadLabel": "Tillåt användare att överföra shapefiler som ska ingå i analysen",
    "allowShapefilesUploadLabelHintText": "Tips! Lägg till ett alternativ på fliken Rapport där användare kan överföra sina egna data som en shapefil som ska ingå i analysrapporten",
    "allowVisibleLayerAnalysisLabel": "Analysera eller rapportera inte resultat för lager som inte är synliga",
    "allowVisibleLayerAnalysisHintText": "Tips: Lager som har stängts av eller som inte är synliga på grund av inställningarna för skalans synlighet kommer inte att analyseras eller inkluderas i utskrivna eller hämtade resultat.",
    "areaUnitsLabel": "Enheter för analysresultat (yta)",
    "lengthUnitsLabel": "Enheter för analysresultat (längd)",
    "maxFeatureForAnalysisLabel": "Maximalt antal geoobjekt som ska analyseras",
    "maxFeatureForAnalysisHintText": "Tips! Ange det maximala antalet geoobjekt som ska ingå i analysen",
    "searchToleranceLabelText": "Söktolerans",
    "searchToleranceHint": "Tips! Söktoleransen används när du analyserar punkt- och linjeinmatningar",
    "placenameButtonText": "Platsens namn",
    "drawToolsButtonText": "Rita",
    "shapefileButtonText": "Shapefil",
    "coordinatesButtonText": "Koordinater",
    "invalidLayerErrorMsg": "Konfigurera fälten för",
    "drawToolSelectableLayersLabel": "Välj valbara lager",
    "drawToolSelectableLayersHint": "Tips! Välj de lager som innehåller de geoobjekt som kan väljas med Välj ritverktyg",
    "drawToolsSettingsFieldsetLabel": "Ritverktyg",
    "drawToolPointLabel": "Punkt",
    "drawToolPolylineLabel": "Polylinje",
    "drawToolExtentLabel": "Utbredning",
    "drawToolPolygonLabel": "Polygon",
    "drawToolCircleLabel": "Cirkel",
    "selectDrawToolsText": "Välj de ritverktyg som är tillgängliga för att skapa intresseområdet",
    "selectingDrawToolErrorMessage": "Välj minst ett ritverktyg eller urvalslager för att använda alternativet Ritverktyg för AOI-verktyg.",
    "sortingSettingsLegend": "Sorteringsinställningar",
    "ascendingLabel": "Stigande",
    "descendingLabel": "Fallande",
    "sortFieldSelectLabel": "Välj sorteringsfält",
    "statisticsCountLabel": "Statistik: antal",
    "statisticsTotalLengthLabel": "Statistik: total längd",
    "statisticsTotalAreaLabel": "Statistik: total yta"
  },
  "downloadTab": {
    "downloadLegend": "Hämtningsinställningar",
    "reportLegend": "Rapportinställningar",
    "downloadTabLabel": "Hämta",
    "syncEnableOptionLabel": "Geoobjektlager",
    "syncEnableOptionHint": "Tips! Välj de lager som kan hämtas och ange de format som varje lager är tillgängligt i. Hämtade dataset inkluderar de geoobjekt som skär intresseområdet.",
    "syncEnableOptionNote": "Observera: Hämtningar av filgeodatabas och shapefil kräver geoobjektslager med synkronisering aktiverad. Shapefileformatet stöds enbart med ArcGIS Online-värdbaserade geoobjektlager.",
    "extractDataTaskOptionLabel": "Geobearbetningstjänsten Extrahera datauppgift",
    "extractDataTaskOptionHint": "Tips! Använd en publicerad geobearbetningstjänst med Extrahera datauppgift för att hämta geoobjekt som korsar det intressanta området i filgeodatabas- eller shapefilsformat.",
    "cannotDownloadOptionLabel": "Inaktivera hämtning",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Lagernamn",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "Filbaserad geodatabas",
      "ShapefileFormatLabel": "Shapefil",
      "allowDownloadLabel": "Tillåt hämtning"
    },
    "setButtonLabel": "Ange",
    "GPTaskLabel": "Ange webbadress till geobearbetningstjänst",
    "printGPServiceLabel": "Webbadress till utskriftstjänst",
    "setGPTaskTitle": "Ange obligatorisk webbadress till geobearbetningstjänst",
    "logoLabel": "Logotyp",
    "logoChooserHint": "Tips! Ändra logotypen som visas i rapportens övre vänstra hörn genom att klicka på bildikonen",
    "footnoteLabel": "Fotnot",
    "columnTitleColorPickerLabel": "Färg på rapportkolumnrubrik",
    "reportTitleLabel": "Rapportnamn",
    "displaySummaryLabel": "Visa sammanfattning",
    "hideZeroValueRowLabel": "Dölj rader med 0 värde för alla analysfält",
    "hideNullValueRowLabel": "Dölj rader utan datavärden (null eller tomt) för alla analysfält",
    "errorMessages": {
      "invalidGPTaskURL": "Ogiltig geobearbetningstjänst. Välj en geobearbetningstjänst som innehåller en Extrahera datauppgift.",
      "noExtractDataTaskURL": "Välj en geobearbetningstjänst som innehåller en Extrahera datauppgift.",
      "duplicateCustomOption": "Det finns en dubblerad post för ${duplicateValueSizeName}.",
      "invalidLayoutWidth": "Ogiltig bredd har angetts för ${customLayoutOptionValue}.",
      "invalidLayoutHeight": "Ogiltig höjd har angetts för ${customLayoutOptionValue}.",
      "invalidLayoutPageUnits": "Ogiltig sidenhet har angetts för ${customLayoutOptionValue}.",
      "failtofetchbuddyTaskDimension": "Fel vid hämtning av dimensionsinformation för uppgiften. Försök igen.",
      "failtofetchbuddyTaskName": "Fel vid hämtning av namn på uppgiften. Försök igen.",
      "failtofetchChoiceList": "Fel vid hämtning av listan med alternativ från utskriftstjänsten. Försök igen.",
      "invalidWidth": "Ogiltig bredd.",
      "invalidHeight": "Ogiltig höjd."
    },
    "addCustomLayoutTitle": "Lägg till anpassad layout",
    "customLayoutOptionHint": "Tips! Lägg till layouten från utskriftstjänsten till listan med utskriftsalternativ.",
    "reportDefaultOptionLabel": "Standardlayout",
    "pageSizeUnits": {
      "millimeters": "Millimetrar",
      "points": "Punkter"
    },
    "noDataTextRepresentation": "Inget datavärde",
    "naTextRepresentation": "Inte tillämpligt värde",
    "noDataDefaultText": "Inga data",
    "notApplicableDefaultText": "Inget standardvärde"
  },
  "generalTab": {
    "generalTabLabel": "Allmänt",
    "tabLabelsLegend": "Paneletiketter",
    "tabLabelsHint": "Tips: Ange etiketter",
    "AOITabLabel": "Panel för intressant område",
    "ReportTabLabel": "Rapportpanel",
    "bufferSettingsLegend": "Buffertinställningar",
    "defaultBufferDistanceLabel": "Standardbuffertavstånd",
    "defaultBufferUnitsLabel": "Buffertenheter",
    "generalBufferSymbologyHint": "Tips! Symbologi som ska användas för att markera buffertområdet omkring det definierade intresseområdet",
    "aoiGraphicsSymbologyLegend": "Symbologi för intresseområdet",
    "aoiGraphicsSymbologyHint": "Tips! Symbologi som används för att markera punkt-, linje- och polygonintresseområden",
    "pointSymbologyLabel": "Punkt",
    "previewLabel": "Förhandsgranska",
    "lineSymbologyLabel": "Linje",
    "polygonSymbologyLabel": "Polygon",
    "aoiBufferSymbologyLabel": "Buffertsymbologi",
    "pointSymbolChooserPopupTitle": "Adress- eller punktplatssymbol",
    "polygonSymbolChooserPopupTitle": "Polygonsymbol",
    "lineSymbolChooserPopupTitle": "Linjesymbol",
    "aoiSymbolChooserPopupTitle": "Buffertsymbol",
    "aoiTabText": "AOI",
    "reportTabText": "Rapport",
    "invalidSymbolValue": "Ogiltigt symbolvärde."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Sök källinställningar",
    "searchSourceSettingTitle": "Sök källinställningar",
    "searchSourceSettingTitleHintText": "Lägg till och konfigurera geokodningstjänster eller geoobjektslager som sökkällor. Dessa angivna källor avgör vad som går att söka i sökrutan",
    "addSearchSourceLabel": "Lägg till sökkälla",
    "featureLayerLabel": "geoobjektslager",
    "geocoderLabel": "Geokodare",
    "generalSettingLabel": "Allmän inställning",
    "allPlaceholderLabel": "Platshållartext för sökning i alla:",
    "allPlaceholderHintText": "Tips: Ange text som ska visas som platshållare när du söker i alla lager och geokodare",
    "generalSettingCheckboxLabel": "Visa popup för det hittade geoobjekt eller den hittade platsen",
    "countryCode": "Lands- eller regionkoder",
    "countryCodeEg": "till exempel ",
    "countryCodeHint": "Om du lämnar det här värdet tomt sker sökningen i alla länder och regioner",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Sök bara i den aktuella kartutbredningen",
    "locatorUrl": "Geokodarens URL",
    "locatorName": "Geokodarens namn",
    "locatorExample": "Exempel",
    "locatorWarning": "Den här versionen av geokodningstjänsten stöds inte. Widgeten har stöd för geokodningstjänsten 10.0 och högre.",
    "locatorTips": "Förslag finns inte tillgängliga eftersom geokodningstjänsten inte har stöd för förslagsfunktionen.",
    "layerSource": "Lagerkälla",
    "setLayerSource": "Ange lagerkälla",
    "setGeocoderURL": "Ange URL till geokodare",
    "searchLayerTips": "Förslag finns inte tillgängliga eftersom geoobjektstjänsten inte har stöd för pagineringsfunktionen.",
    "placeholder": "Platshållartext",
    "searchFields": "Sökfält",
    "displayField": "Visa fält",
    "exactMatch": "Exakt matchning",
    "maxSuggestions": "Maximalt antal förslag",
    "maxResults": "Maximala resultat",
    "enableLocalSearch": "Aktivera lokal sökning",
    "minScale": "Minimiskala",
    "minScaleHint": "När kartans skala är större än denna skala används lokal sökning",
    "radius": "Radie",
    "radiusHint": "Anger radien för ett område kring den aktuella kartans mitt som ska användas för att höja rangordningen för geokodningskandidater så att de kandidater som är närmast platsen returneras först",
    "setSearchFields": "Ange sökfält",
    "set": "Ange",
    "invalidUrlTip": "URL:en ${URL} är ogiltig eller går inte att öppna.",
    "invalidSearchSources": "Ogiltiga sökkällinställningar"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Fyll i de obligatoriska fälten",
    "bufferDistanceFieldsErrorMsg": "Ange giltiga värden",
    "invalidSearchToleranceErrorMsg": "Ange ett giltigt värde för söktoleransen",
    "atLeastOneCheckboxCheckedErrorMsg": "Ogiltig konfiguration: Minst ett verktyg för intresseområde krävs.",
    "noLayerAvailableErrorMsg": "Det finns inga lager tillgängliga",
    "layerNotSupportedErrorMsg": "Stöds inte ",
    "noFieldSelected": "Använd redigeringsåtgärden för att välja fält för analysen.",
    "duplicateFieldsLabels": "Dubblettetiketten \"${labelText}\" tillagd för: \"${itemNames}\"",
    "noLayerSelected": "Välj minst ett lager för analys.",
    "errorInSelectingLayer": "Det gick inte att välja lagret. Försök igen.",
    "errorInMaxFeatureCount": "Ange giltigt maximalt antal geoobjekt för analysen."
  }
});