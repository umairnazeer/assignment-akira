import Page from './page'

class ProviderDesjardinPage extends Page {

    get policyNumber() { return $('#policyInput') }
    get certificateNumber() { return $('#certificateInput') }
    get continueBtn() { return $('.CardButton.primary') }

    /**
     * @desc this function enters policy and certificate credentials into desjardins page
     * @param {string} policyNum 
     * @param {string} certNum 
     */
    enterCredentials(policyNum, certNum) {
        this.policyNumber.addValue(policyNum)
        this.certificateNumber.addValue(certNum)
    }
    
    /**
     * @desc this function clicks the continue button
     */
    clickContinueBtn() {
        this.continueBtn.click();
    }
}

export default new ProviderDesjardinPage()