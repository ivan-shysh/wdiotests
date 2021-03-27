import Page from './page';


class LoginPage extends Page {

    get inputUsername () { return $('#normal_login_email'); }
    get inputPassword () { return $('#normal_login_password'); }
    get buttonSubmit () { return $('.login-form-button'); }
    get errorToast () { return $('.ant-notification-notice-message'); }
    get emailError () { return $('//div[@role and contains(text(),\'email\')]');}
   // get emailRequired () { return $('//div[@role and contains(text(),\'Required\')]');}
    get loginValidationError () { return $('//div[contains(@class, "ant-form-item-with-help")][.//input[@id="normal_login_email"]]//div[@role="alert"]\n'); }

    open () {
        return super.open('/');
    }

    setLogin(email) {
        this.inputUsername.setValue(email);
    }

    setPassword (password) {
        this.inputPassword.setValue(password);
    }

    clickSubmitButton() {
        this.buttonSubmit.click();
    }

    submitButtonIsDisabled() {
        expect(this.buttonSubmit).toBeDisabled();
    }

    errorToastAppeared() {
        expect(this.errorToast).toBeDisplayed();
    }

    emailErrorAppeared() {
        expect(this.emailError).toBeDisplayed();
    }

    emptyLoginInput() {
        this.clearInput(this.inputUsername);
    }

    loginRequiredError() {
        expect(this.loginValidationError).toBeDisplayed();
        expect(this.loginValidationError.getText()).toEqual('Required');
    }
    //emailRequiredAppeared() {
        //expect(this.emailRequired).toBeDisplayed();
    //}
}

export default new LoginPage();
