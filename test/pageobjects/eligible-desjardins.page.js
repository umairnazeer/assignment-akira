import Page from './page'

class EligibleDesjardinsPage extends Page {

    get eligibleMessage() { return $('.Card>div:nth-child(2)') }
    get desjardinsLogo() { return $('.Card>div:nth-child(1)') }
    get sendActivationLinkBtn() { return $('.CardButton.primary.nav') }

    /**
     * @desc this functions gets the text of the eligible message element
     */
    getMessage() {
        return this.eligibleMessage.getText();
    }
    /**
     * @desc this function gets the text of the send activation button
     */
    getBtnText() {
        return this.sendActivationLinkBtn.getText();
    }
}

export default new EligibleDesjardinsPage()