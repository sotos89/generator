Ext.define('PapyrosSerial.view.InputForm' ,{
    extend: 'Ext.Panel',

    alias: 'widget.inputForm',

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
            /**
             * server ID
             */
            items: [{
                xtype: 'numberfield',
                label: 'Server ID',
                itemId: 'serverId',
                reference: 'serverId',
                required: true
            }, {
                /**
                 * Version
                 */
                xtype: 'selectfield',
                itemId: 'version',
                reference: 'version',
                picker: 'edge',
                label: 'Version',
                displayField: 'name',
                valueField: 'type',
                store: Ext.create('PapyrosSerial.store.Version'),
                autoLoadOnValue: true,
                value: 3,
                required: true,
                userCls: 'inputForm',
            }, {
                /**------------------
                 * concurrent user 80
                 */
                xtype: 'numberfield',
                label: 'No. Concurrent users',
                itemId: 'concurrentNo80',
                reference: 'concurrentNo80',
                name: 'concurrentNo80',
                userCls: 'inputForm',
                required: true
            }, {
                /**
                 * named user 81
                 */
                xtype: 'numberfield',
                label: 'No. Named users',
                itemId: 'namedNo81',
                reference: 'namedNo81',
                name: 'namedNo81',
                userCls: 'inputForm',
                required: true
            }, {
                /**
                 * concurrent user 90
                 */
                xtype: 'numberfield',
                label: 'No. Concurrent users',
                itemId: 'concurrentNo90',
                reference: 'concurrentNo90',
                name: 'concurrentNo90',
                userCls: 'inputForm',
                value: 610,
                hidden: true
            }, {
                /**
                 * named user 91
                 */
                xtype: 'numberfield',
                label: 'No. Named users',
                itemId: 'namedNo91',
                reference: 'namedNo91',
                name: 'namedNo91',
                userCls: 'inputForm',
                value: 610,
                hidden: true
            }]
        }]
    }]
});