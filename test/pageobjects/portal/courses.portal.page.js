import PortalPage from "./portal.page";

class CoursesPage extends PortalPage {
    get sectionHeader () { return $('section > div > h1'); }

    open() {
        return super.open('/course');
    }

    isOpen() {
        expect(browser).toHaveUrlContaining('/course');
        expect(this.sectionHeader).toHaveText('Interactive Courses');
    }
}

export default new CoursesPage();
