Ext.define('PapyrosSerial.view.main.SerialViewController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.serialViewController',


    clearValues: function(){
        var me = this;
        var view = this.getView();
        view.up('generateForm').lookup('serialView').setHidden(true);
        view.up('generateForm').lookup('inputForm').setHidden(false);
        view.up('generateForm').lookup('generateBtn').setHidden(false);

        me.lookup('dserverSerial').clearValue();
        me.lookup('serial80').clearValue();
        me.lookup('serial81').clearValue();
        me.lookup('serial90').clearValue();
        me.lookup('serial91').clearValue();

        view.up('generateForm').lookup('serverId').clearValue();
        view.up('generateForm').lookup('concurrentNo80').clearValue();
        view.up('generateForm').lookup('namedNo81').clearValue();
    }
});
