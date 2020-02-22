Ext.define('PapyrosSerial.store.Application', {
    extend: 'Ext.data.Store',

    requires: [
        'PapyrosSerial.model.Application',
    ],

    config: {
        autoLoad: false,
        storeId: 'application',
        model: 'PapyrosSerial.model.Application'
    },

    constructor: function(){
        this.callParent();
        this.setData([{
            name:   '00. Document Server',
            type:   00
        }, {
            name:   '01. Σύστημα Επίβλεψης',
            type:   01,
        }, {
            name:   '03. Εισαγωγή Εγγράφων',
            type:   03,
        }, {
            name:   '04. Ιντερνετ',
            type:   04,
        }, {
            name:   '05. Φάκελοι',
            type:   05,
        }, {
            name:   '06. Επιφάνεια Εργασίας',
            type:   06,
        }, {
            name:   '07. Διαχείριση Φορμών',
            type:   07,
        }, {
            name:   '08. Προσχέδια',
            type:   08,
        }, {
            name:   '09. Διαχείριση Εγγράφων',
            type:   09,
        }, {
            name:   '10. Viwer',
            type:   10,
        }, {
            name:   '11. Διαχείριση Χρεώσεων',
            type:   11,
        }, {
            name:   '12. Διαχείριση Υποθέσεων',
            type:   12,
        }, {
            name:   '13. Αναζητήσεις Εγγράφων',
            type:   13,
        }, {
            name:   '20. Κρυπτογράφηση',
            type:   20,
        }, {
            name:   '21. Ψηφιακές Υπογραφές',
            type:   21,
        }, {
            name:   '22. Ειδοποιήσεις',
            type:   22,
        }, {
            name:   '23. Διαδικασίες',
            type:   23,
        }, {
            name:   '26. Fax',
            type:   26,
        }, {
            name:   '27. Mail',
            type:   27,
        }, {
            name:   '28. Βιβλιοθήκη ISIS',
            type:   28,
        }, {
            name:   '29. Θυσαυρός',
            type:   29,
        }, {
            name:   '80. Custom',
            type:   80,
        }, {
            name:   '81. Custom',
            type:   81,
        }, {
            name:   '82. Custom',
            type:   82,
        }, {
            name:   '83. Custom',
            type:   83,
        }, {
            name:   '84. Custom',
            type:   84,
        }, {
            name:   '85. Custom',
            type:   85,
        }, {
            name:   '86. Custom',
            type:   86,
        }, {
            name:   '87. Custom',
            type:   87,
        }, {
            name:   '88.Custom',
            type:   88,
        }, {
            name:   '89. Custom',
            type:   89,
        }, {
            name:   '90. Custom',
            type:   90,
        }, {
            name:   '91. Custom',
            type:   91,
        }, {
            name:   '92. Custom',
            type:   92,
        }, {
            name:   '93. Custom',
            type:   93,
        }, {
            name:   '94. Custom',
            type:   94,
        }, {
            name:   '95. Custom',
            type:   95,
        }, {
            name:   '96. Custom',
            type:   96,
        }, {
            name:   '97. Custom',
            type:   97,
        }, {
            name:   '98. Custom',
            type:   98,
        }, {
            name:   '99. Custom',
            type:   99,
        }])
    }
});