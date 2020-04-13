/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"fioridemo/FioriApp_01/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"fioridemo/FioriApp_01/test/integration/pages/View1",
	"fioridemo/FioriApp_01/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "fioridemo.FioriApp_01.view.",
		autoWait: true
	});
});