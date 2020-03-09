import Page from './page'

class SignupPage extends Page {

    get email() { return $('#emailInput') }
    get nextBtn() { return $('.CardButton.primary') }
    get logo() { return $('img.logo[alt="Akira Logo"]') }
    get cardTitle() { return $('.Card>div:nth-child(1)>div') }
    get btnIsDisabled() { return $('.CardButton.primary[disabled]') }

    open() {
        // super.open('email')
        browser.url('email')
    }

    enterEmail(emailAddress) {
        this.email.addValue(emailAddress)
    }

    clickNextBtn() {
        this.nextBtn.click()
    }

    getCardTitle() {
        return this.cardTitle.getText();
    }


}

export default new SignupPage()
