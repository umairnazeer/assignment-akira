import Page from './page'

class NotEligibleDesjardinPage extends Page {

    get notEligibleMessage() { return $('.CardMessage.CardItem.align-right') }
    get startAgainBtn() { return $('.CardButton.primary.nav') }

    /**
     * @desc this function gets the not-eligiblep-message text for element
     */
    getMessage() {
        return this.notEligibleMessage.getText();
    }

    /**
     * @desc this function clicks the start-again button to go back to the enter certificate/polocicy details
     */
    clickStartAgainBtn() {
        this.startAgainBtn.click();
    }
}

export default new NotEligibleDesjardinPage()