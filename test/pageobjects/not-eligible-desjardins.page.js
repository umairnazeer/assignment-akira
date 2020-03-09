import Page from './page'

class NotEligibleDesjardinPage extends Page {

    get notEligibleMessage() { return $('.CardMessage.CardItem.align-right') }
    get startAgainBtn() { return $('.CardButton.primary.nav')}

    getMessage() {
        return this.notEligibleMessage.getText();
    }

    clickStartAgainBtn() {
        this.startAgainBtn.click();
    }
}

export default new NotEligibleDesjardinPage()