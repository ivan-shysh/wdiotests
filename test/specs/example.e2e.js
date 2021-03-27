import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    beforeEach(() => {
        LoginPage.open();
    });

    it('user logs in with valid credentials', () => {
        LoginPage.setLogin('jimbim77@mailinator.com');
        LoginPage.setPassword('System23');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    it('submit button is disabled if login and password are absent', () => {
        LoginPage.submitButtonIsDisabled();
    });

    it('fails if invalid data is provided', () => {
        LoginPage.setLogin('bob@bob.com');
        LoginPage.setPassword('password');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();
    });

    it('should display error message for wrong email format', () => {
        LoginPage.setLogin('gor2.gmail.com');
        LoginPage.emailErrorAppeared();
    });

  /*  it('should display error message when no email provided for login', () => {
        LoginPage.setLogin('frabob@bob.com');
        browser.pause('3000');
        browser.doubleClick;
        browser.keys('Backspace');
        browser.pause('3000');
    });           */

    it.only('login input is required', () => {
        LoginPage.setLogin('example');
        LoginPage.emptyLoginInput();
        browser.pause('3000');
        LoginPage.loginRequiredError();
    })

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });
});


