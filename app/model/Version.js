Ext.define('PapyrosSerial.model.Version', {
    extend: 'Ext.data.Model',
    alias: 'model.version',

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