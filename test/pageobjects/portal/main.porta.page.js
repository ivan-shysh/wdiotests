import PortalPage from "./portal.page";

class MainPage extends PortalPage {
    open() {
        return super.open('/');
    }
}

export default new MainPage();
