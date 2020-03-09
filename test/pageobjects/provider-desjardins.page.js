import Page from './page'

class ProviderDesjardinPage extends Page {

    get policyNumber() { return $('#policyInput') }
    get certificateNumber() { return $('#certificateInput')}
    get continueBtn() { return $('.CardButton.primary')}

    enterCredentials(policyNum, certNum ) {
        this.policyNumber.addValue(policyNum)
        this.certificateNumber.addValue(certNum)
    }

    clickContinueBtn() {
        this.continueBtn.click();
    }
}

export default new ProviderDesjardinPage()