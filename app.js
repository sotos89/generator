/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'PapyrosSerial.Application',

    name: 'PapyrosSerial',

    requires: [
        // This will automatically load all classes in the PapyrosSerial namespace
        // so that application classes do not need to require each other.
        'PapyrosSerial.*'
    ],

    // The name of the initial view to create.
    // mainView: 'PapyrosSerial.view.Form'
    mainView: 'PapyrosSerial.view.main.Main'
});
