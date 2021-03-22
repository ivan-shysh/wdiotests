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

    })

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });
});


