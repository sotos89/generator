/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */



Ext.define('PapyrosSerial.view.main.Main', {
	extend: 'Ext.navigation.View',
	
	alternateClassName: [
		'MainView'
	],
	itemId: 'mainView',
	requires: [
		'PapyrosSerial.view.Form'
	],

	navigationBar:{
		hidden:true
	},
	items: [{
		xtype: 'generateForm'
	}],

	initialize: function(){
		this.callParent();
		mainView = this;
	}
});