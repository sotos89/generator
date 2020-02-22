Ext.define('PapyrosSerial.view.SerialView', {
    extend: 'Ext.Panel',
    alias: 'widget.serialView',

    controller: 'serialViewController',

    items:[{
        xtype: 'container',
        items: [{
            xtype: 'container',
            layout: 'card',
            userCls: 'form-title',
            layout: {
                type: 'vbox',
                userCls: 'inputForm',
            },
            items: [{
                xtype: 'fieldset',
                items: [{
                    xtype: 'container',
                    flex: 1,
                    minHeight:100,
                    items:[{// document server
                        xtype: 'textfield',
                        itemId: 'dserverSerial',
                        label: 'document Server',
                        reference: 'dserverSerial',
                        editable: false,
                        clearable: false,
                        inputMask: '*****-*-****'
                    }, {
                        /**
                         * concurrent 80
                         */
                        xtype: 'textfield',
                        itemId: 'serial80',
                        reference: 'serial80',
                        label: 'concurrent',
                        clearable: false,
                        inputMask: '*****-**-*****-*-****'
                    }, {
                        /**
                         * named 81
                         */
                        xtype: 'textfield',
                        itemId: 'serial81',
                        reference: 'serial81',
                        clearable: false,
                        inputMask: '*****-**-*****-*-****'
                    }, {
                        /**
                         * concurrent 90
                         */
                        xtype: 'textfield',
                        itemId: 'serial90',
                        reference: 'serial90',
                        clearable: false,
                        inputMask: '*****-**-*****-*-****'
                    }, {
                        /**
                         * named 91
                         */
                        xtype: 'textfield',
                        itemId: 'serial91',
                        reference: 'serial91',
                        clearable: false,
                        inputMask: '*****-**-*****-*-****'
                    }]
                }, {
                    xtype: 'container',
                    flex: 1,
                    items:[{
                        xtype: 'textfield',
                        itemId: 'serial',
                        reference: 'serial',
                        hidden: true,
                        inputMask: '*****-**-*****-*-****'
                    }]
                }]
            }]
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
                itemId: 'clearValuesBtn',
                reference: 'clearValuesBtn',
                text: 'clear',
                scale: 'medium',
                ui: 'action',
                handler: 'clearValues'
            }]
        }]
    }]
});