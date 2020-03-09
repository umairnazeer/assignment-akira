import Page from './page'

class EligibilityPage extends Page {

    get optionsList() { return $('.CardDecision.CardItem.align-right') }
    get option() { return $('.CardDecision.CardItem.align-right>div:nth-child(2)') }

    selectOption(opt) {
        const myOption = $(`.CardDecision.CardItem.align-right>div:nth-child(${opt})`);
        myOption.click();
    }
}

export default new EligibilityPage()