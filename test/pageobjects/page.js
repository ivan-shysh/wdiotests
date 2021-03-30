
export default class Page {
    open (path) {
        return browser.url(path)
    }

    clearInput(element) {
        const value = element.getValue();
        for (let i = 0; i < value.length; i++) {
            element.keys(['Backspace']);
        }
    }
}
