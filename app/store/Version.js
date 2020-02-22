Ext.define('PapyrosSerial.store.Version', {
    extend: 'Ext.data.Store',

    requires: [
        'PapyrosSerial.model.Version',
    ],

    config: {
        autoLoad: false,
        storeId: 'version',
        model: 'PapyrosSerial.model.Version'
    },

    constructor: function(){
        this.callParent();
        this.setData([{
            name:   'Βασική',
            type:   1
        }, {
            name:   'Εισαγωγική',
            type:   2,
        }, {
            name:   'Επιχειρησιακή',
            type:   3,
        }])
    }
});