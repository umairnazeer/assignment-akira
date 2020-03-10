import Page from './page'

class SignupPage extends Page {

    get email() { return $('#emailInput') }
    get nextBtn() { return $('.CardButton.primary') }
    get logo() { return $('img.logo[alt="Akira Logo"]') }
    get cardTitle() { return $('.Card>div:nth-child(1)>div') }
    get btnIsDisabled() { return $('.CardButton.primary[disabled]') }

    /**
     * @desc opens the page in the browser. 
     */
    open() {
        browser.url('email')
    }

    /**
     * @desc this function inputs email address on signup page
     * @param {string} emailAddress 
     * @example abc@example.com
     */
    enterEmail(emailAddress) {
        this.email.addValue(emailAddress)
    }

    /**
     * @desc this function clicks next button
     */
    clickNextBtn() {
        this.nextBtn.click()
    }

    /**
     * @desc this function gets the heading text above the input field
     */
    getCardTitle() {
        return this.cardTitle.getText();
    }
}

export default new SignupPage()
