import LoginPage from './test/pageobjects/login.page';
import ProfilePage from './test/pageobjects/portal/profile.portal.page';

exports.config = {
    runner: 'local',


    specs: [
        './test/specs/**/*.js'
    ],

    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 1,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'firefox'
        }
    ],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://localcoding.us',

    waitforTimeout: 10000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 1,

    services: ['geckodriver'],

    framework: 'mocha',
    reporters: ['spec'],




    mochaOpts: {
        require: ['@babel/register'],
        ui: 'bdd',
        timeout: 60000
    },

    before: function (capabilities, specs) {
        browser.addCommand('login', function (username, password) {
            LoginPage.open();
            LoginPage.setLogin(username);
            LoginPage.setPassword(password);
            LoginPage.clickSubmitButton();
            ProfilePage.isOpen();
        })
    }
}

