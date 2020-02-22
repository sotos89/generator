Ext.define('PapyrosSerial.model.Application', {
    extend: 'Ext.data.Model',
    alias: 'model.application',

    requires: [
        'Ext.data.Field'
    ],
    fields: [{
        name:   'name',
        type:   'string'
    }, {
        name:   'type',
        type:   'int'
    }]
});