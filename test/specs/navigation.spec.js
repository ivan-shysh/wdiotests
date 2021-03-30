import MainPage from '../pageobjects/portal/main.portal.page';
import CoursesPage from '../pageobjects/portal/courses.portal.page';

describe('Navigation', () => {
    before(() => {
        browser.login('xonol63306@gameqo.com', 'Qwerty!23');
    });

    beforeEach(() => {
        MainPage.open();
    });

    it('courses page opens', () => {
        MainPage.goToCourses();
        CoursesPage.isOpen();
    });
});

