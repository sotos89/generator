Ext.define('PapyrosSerial.view.Form', {
    extend: 'Ext.Panel',
    alias: 'widget.generateForm',
    requires: [
        'PapyrosSerial.view.InputForm'
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    controller: 'formController',
    padding: '20 25 20 25',
    
    defaults: {
        scrollable: false
    },

    items:[{
        xtype: 'container',
        items: [{
            xtype: 'container',
            centered: false,
            itemId: 'form',
            flex: 1,
            margin: 0,
            height: 110,
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },
            items: [{
                xtype: 'image',
                height: 100,
                width: 256,
                src: 'resources/images/PapyrosLogo.png',
            }]
        }, {
            xtype: 'inputForm',
            reference: 'inputForm',
            hidden: false
        }, {
            xtype: 'serialView',
            reference: 'serialView',
            hidden: true
        }, {
            xtype: 'container',
            flex: 2,
            layout: {
                type: 'vbox',
                align: 'stretch',
                // maxWidth: 500,
            },
            items: [{
                xtype: 'button',
                itemId: 'generateBtn',
                reference: 'generateBtn',
                text: 'generate',
                scale: 'medium',
                ui: 'action',
                handler: 'getValues'
            }]
        }]
    }]
});