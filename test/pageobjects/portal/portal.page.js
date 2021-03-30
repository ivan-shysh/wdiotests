import Page from '../page';

export default class PortalPage extends Page {
    get linkCourses () { return $('[data-qa="topmenu-Courses"]'); }
    get linkCards () { return $('[data-qa="topmenu-Cards"]'); }
    get linkDiary () { return $('[data-qa="topmenu-Diary"]'); }
    get linkChallenges () { return $('[data-qa="topmenu-Challenges"]'); }

    goToCourses() {
        this.linkCourses.click();
    }

    goToCards() {
        this.linkCards.click();
    }

    goToDiary() {
        this.linkDiary.click();
    }

    goToChallenges() {
        this.linkChallenges.click();
    }
}
