Ext.define('PapyrosSerial.view.SelectOptionsDialogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.selectOptionsDialogController',

    cancel: function(){
        this.getView().close();
    },

});