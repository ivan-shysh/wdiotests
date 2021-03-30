import PortalPage from "./portal.page";

class ProfilePage extends PortalPage {
    get iconUser () { return $('.ant-avatar-square'); }

    isOpen () {
        expect(browser).toHaveUrlContaining('/profile/');
        expect(this.iconUser).toBeDisplayed();
    }
}

export default new ProfilePage();
