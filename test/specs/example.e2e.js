import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    it('user logs in with valid credentials', () => {
        LoginPage.open();
        LoginPage.setLogin('jimbim77@mailinator.com');
        LoginPage.setPassword('System23');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });
});


