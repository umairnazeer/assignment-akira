export default class Page {

    /**
     * @desc this function opens the page provided in the parameter
     * @param {string} path 
     * @example open('email');
     */
    open(path) {
        browser.url(path)
    }
}
