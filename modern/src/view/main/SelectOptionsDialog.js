Ext.define('PapyrosSerial.view.SelectOptionsDialog', {
    extend: 'Ext.Dialog',
    alias: 'widget.selectOptionsDialog',

    layout: 'fit',
    controller: 'selectOptionsDialogController',

    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'center'
    },

    viewModel: {
        type: 'main'
    },

    padding: 10,

    buttons: {
        cancelDialog: {
            text: 'ΑΚΥΡΟ',
            handler: 'cancel'
        },
        confirmDialog: {
            text: 'OK',
            handler: 'renameFile'
        }
    },

    items: [{
        xtype: 'container',
        items: [{
            xtype: 'button',
            bind: 'Call {menuGroups.option}',
            viewModel: {
                data: {
                    menuGroups: {
                        option: 'home'
                    }
                }
            },
            menu: {
                bind: {
                    groups: '{menuGroups}'
                },
                items: [{
                    text: 'Home',
                    group: 'option',  // causes Menu to create this class of item
                    value: 'home'
                }, {
                    text: 'Work',
                    group: 'option',
                    value: 'work'
                }, {
                    text: 'Mobile',
                    group: 'option',
                    value: 'mobile'
                }]
            }
        }]
    }],


        
    

    // items: [{
    //     xtype: 'radiofield',
    //     name: 'color',
    //     group: 'option',
    //     value: 'red',
    //     label: 'Red',
    //     checked: true
    // }, {
    //     xtype: 'radiofield',
    //     name: 'color',
    //     group: 'option',
    //     value: 'green',
    //     label: 'Green'
    // }, {
    //     xtype: 'radiofield',
    //     name: 'color',
    //     group: 'option',
    //     value: 'blue',
    //     label: 'Blue'
    // }],

    initialize: function(){
        var me = this;
        
        me.setTitle('Όνομα Αρχείου');

        // me.setItems([{
        //     xtype: 'radiogroup',
        //     listeners: {
        //         change: {
        //             fn: me.rgChange()
        //         }
        //     },
        //     items: [
        //         { boxLabel: 'Item 1', name: 'rb', inputValue: '1' },
        //         { boxLabel: 'Item 2', name: 'rb', inputValue: '2', checked: true},
        //         { boxLabel: 'Item 3', name: 'rb', inputValue: '3' },
        //         { boxLabel: 'Item 4', name: 'rb', inputValue: '4' },
        //         { boxLabel: 'Item 5', name: 'rb', inputValue: '5' },
        //         { boxLabel: 'Item 6', name: 'rb', inputValue: '6' }
        //     ]
        // }]),
        // me.setItems([{
        //     // xtype: 'radiofield',
        //     // vertical: true,
        //     // width: "100%",
        //     // items: [{
        //         xtype: 'radiofield',
        //         label: 'Αποστολή με email',
        //         name: 'rb',
        //         value: '1'
        //     }, {
        //         xtype: 'radiofield',
        //         label: 'Δρομολογηση στον Παπυρο',
        //         name: 'rb',
        //         value: '2'
        //     }, {
        //         xtype: 'radiofield',
        //         label: 'Αποθυκευση',
        //         name: 'rb',
        //         value: '3'
        //     // }]
        // }]);

        this.callParent();
    }
});
	