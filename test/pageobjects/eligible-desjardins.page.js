import Page from './page'

class EligibleDesjardinsPage extends Page {

    get eligibleMessage() { return $('.Card>div:nth-child(2)') }
    get desjardinsLogo() { return $('.Card>div:nth-child(1)') }
    get sendActivationLinkBtn() { return $('.CardButton.primary.nav') }

    getMessage() {
        return this.eligibleMessage.getText();
    }

    getBtnText() {
        return this.sendActivationLinkBtn.getText();
    }
}

export default new EligibleDesjardinsPage()