Ext.define('PapyrosSerial.view.main.FormController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.formController',

    getValues: function(){
        var me = this;

        var serverId = me.lookup('serverId').getValue();
        var version = me.lookup('version').getValue();
        var concurrentNo80 = me.lookup('concurrentNo80').getValue();
        var namedNo81 = me.lookup('namedNo81').getValue();
        var concurrentNo90 = me.lookup('concurrentNo90').getValue();
        var namedNo91 = me.lookup('namedNo91').getValue();

        me.lookup('generateBtn').setHidden(true);
        me.lookup('inputForm').setHidden(true);
        me.lookup('serialView').setHidden(false);


        //Document Server -> 0 
        var application = 0;  // me.lookup('application').getValue();
        me.docServer(serverId, version);
        me.allSerialGenerator(serverId, version, application, concurrentNo80, namedNo81, concurrentNo90, namedNo91);
    },

    docServer(serverId, version){
        var me = this;
        var result = (((serverId + 1234) * 60199) + ((version + 321) * 73777)).toString(32).toUpperCase();
        var documentServer = result.slice(result.length - 4);
        serverId = ('00000'+serverId).slice(-5);
        me.lookup('serialView').down('#dserverSerial').setValue(serverId + '-' + version + '-' + documentServer);
    },


    serialGenerator: function(serverId, version, application, serianNo){
        var me = this;
        var result = ((serverId + 1234) * 60199) + ((version + 321) * 73777) + ((application + 123) * 84444) + ((serianNo + 21) * 56897);
        var fResult = result.toString(32).toUpperCase();
        var idServer = fResult.slice(fResult.length - 4);
        serverId = ('00000'+serverId).slice(-5);
        serianNo = ('00000'+serianNo).slice(-5);
        application  = ('00'+application).slice(-2);
        me.lookup('serial').setValue(serianNo + '-' + application + '-' + serverId + '-' + version + '-' + idServer);
    },

    allSerialGenerator: function(serverId, version, application, concurrentNo80, namedNo81, concurrentNo90, namedNo91){
        var me = this;
        
        //concurrent 80
        var application80 = 80;
        var result80 = ((serverId + 1234) * 60199) + ((version + 321) * 73777) + ((application80 + 123) * 84444) + ((concurrentNo80 + 21) * 56897);
        var fResult80 = result80.toString(32).toUpperCase();
        var idServer80 = fResult80.slice(fResult80.length - 4);
        var serverId80 = ('00000'+serverId).slice(-5);
        var concurrentNo80 = ('00000'+concurrentNo80).slice(-5);
        var application80  = ('00'+application80).slice(-2);
        me.lookup('serialView').down('#serial80').setValue(concurrentNo80 + '-' + application80 + '-' + serverId80 + '-' + version + '-' + idServer80);

        //named 81
        var application81 = 81;
        var result81 = ((serverId + 1234) * 60199) + ((version + 321) * 73777) + ((application81 + 123) * 84444) + ((namedNo81 + 21) * 56897);
        var fResult81 = result81.toString(32).toUpperCase();
        var idServer81 = fResult81.slice(fResult81.length - 4);
        var serverId81 = ('00000'+serverId).slice(-5);
        var namedNo81 = ('00000'+namedNo81).slice(-5);
        var application81  = ('00'+application81).slice(-2);
        me.lookup('serialView').down('#serial81').setValue(namedNo81 + '-' + application81 + '-' + serverId81 + '-' + version + '-' + idServer81);

       //concurrent 90
        var application90 = 90;
        var result90 = ((serverId + 1234) * 60199) + ((version + 321) * 73777) + ((application90 + 123) * 84444) + ((concurrentNo90 + 21) * 56897);
        var fResult90 = result90.toString(32).toUpperCase();
        var idServer90 = fResult90.slice(fResult90.length - 4);
        var serverId90 = ('00000'+serverId).slice(-5);
        var concurrentNo90 = ('00000'+concurrentNo90).slice(-5);
        var application90  = ('00'+application90).slice(-2);
        me.lookup('serialView').down('#serial90').setValue(concurrentNo90 + '-' + application90 + '-' + serverId90 + '-' + version + '-' + idServer90);

        //named 91
        var application91 = 91;
        var namedNo91 = 610;
        var result91 = ((serverId + 1234) * 60199) + ((version + 321) * 73777) + ((application91 + 123) * 84444) + ((namedNo91 + 21) * 56897);
        var fResult91 = result91.toString(32).toUpperCase();
        var idServer91 = fResult91.slice(fResult91.length - 4);
        var serverId91 = ('00000'+serverId).slice(-5);
        var namedNo91 = ('00000'+namedNo91).slice(-5);
        var application91  = ('00'+application91).slice(-2);
        me.lookup('serialView').down('#serial91').setValue(namedNo91 + '-' + application91 + '-' + serverId91 + '-' + version + '-' + idServer91);
    }
});
