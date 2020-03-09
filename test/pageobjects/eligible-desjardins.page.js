import Page from './page'

class EligibleDesjardinsPage extends Page {

    get eligibleMessage() { return $('.Card>div:nth-child(2)') }
    get desjardinsLogo() { return $('.Card>div:nth-child(1)') }
    get sendActivationLinkBtn() { return $('.CardButton.primary.nav')}

    // messageNumber = 2 => "Good Job!" (default)
    // messageNumber = 3 => "Your account is eligible for a Medisys on Demand membership."
    // messageNumber = 4 => "To verify your identity, we'll send you a welcome email with an activation link."
    getMessage(messageNumber = 2) {
        const messageElement = $(`.Card>div:nth-child(${messageNumber})`)
        return messageElement.getText();
    }

    getBtnText() {
        return this.sendActivationLinkBtn.getText();
    }
}

export default new EligibleDesjardinsPage()